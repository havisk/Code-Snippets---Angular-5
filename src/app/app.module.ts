import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HomePageControllerComponent} from "./home-page/home-page-controller/home-page-controller.component";
import {HomePageModule} from "./home-page/home-page.module";


@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
      BrowserModule,
      FlexLayoutModule,
      HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
