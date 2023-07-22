import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { NavComponent } from './nav/nav.component';
import { PagesModule } from 'src/app/pages/pages.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [FooterComponent, NavComponent],
  imports: [CommonModule, MaterialModuleModule, PagesModule, AppRoutingModule],
  exports: [FooterComponent, NavComponent],
})
export class TemplateModule {}
