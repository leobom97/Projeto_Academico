import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ReadRoom2DataSource } from './read-room2-datasource';
import { IRooms } from 'src/app/shared/models/rooms.interface';

@Component({
  selector: 'app-read-room2',
  templateUrl: './read-room2.component.html',
  styleUrls: ['./read-room2.component.css'],
})
export class ReadRoom2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IRooms>;
  dataSource: ReadRoom2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description'];

  constructor() {
    this.dataSource = new ReadRoom2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
