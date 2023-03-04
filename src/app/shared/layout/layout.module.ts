import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LayoutModule { }
