import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { LayoutModule } from './shared/layout/layout.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

//M S C

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
