import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { PlotlyViaWindowModule } from 'angular-plotly.js';
import { PlotlyUniversalModule } from './plotly-universal.module';
import {PlotlyTestComponent} from "./plotly-test/plotly-test.component";
import {ExcludeSsrDirective} from "./exclude-ssr.directive";

@NgModule({
  declarations: [
    AppComponent,
    ExcludeSsrDirective
  ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        PlotlyTestComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
