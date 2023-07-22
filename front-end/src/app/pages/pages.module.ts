import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModuleModule } from '../material-module/material-module.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModuleModule],
  exports: [HomeComponent],
})
export class PagesModule {}
