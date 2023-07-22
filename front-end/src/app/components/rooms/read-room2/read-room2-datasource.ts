import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { IRooms } from 'src/app/shared/models/rooms.interface';

const EXAMPLE_DATA: IRooms[] = [
  { id: 1, name: 'Hydrogen', description: '' },
  { id: 2, name: 'Helium', description: '' },
  { id: 3, name: 'Lithium', description: '' },
  { id: 4, name: 'Beryllium', description: '' },
  { id: 5, name: 'Boron', description: '' },
  { id: 6, name: 'Carbon', description: '' },
  { id: 7, name: 'Nitrogen', description: '' },
  { id: 8, name: 'Oxygen', description: '' },
  { id: 9, name: 'Fluorine', description: '' },
  { id: 10, name: 'Neon', description: '' },
  { id: 11, name: 'Sodium', description: '' },
  { id: 12, name: 'Magnesium', description: '' },
  { id: 13, name: 'Aluminum', description: '' },
  { id: 14, name: 'Silicon', description: '' },
  { id: 15, name: 'Phosphorus', description: '' },
  { id: 16, name: 'Sulfur', description: '' },
  { id: 17, name: 'Chlorine', description: '' },
  { id: 18, name: 'Argon', description: '' },
  { id: 19, name: 'Potassium', description: '' },
  { id: 20, name: 'Calcium', description: '' },
];

/**
 * Data source for the ReadRoom2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ReadRoom2DataSource extends DataSource<IRooms> {
  data: IRooms[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<IRooms[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IRooms[]): IRooms[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IRooms[]): IRooms[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
