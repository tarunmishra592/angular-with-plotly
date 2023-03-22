import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlotlyViaCDNModule} from "angular-plotly.js";

PlotlyViaCDNModule.setPlotlyVersion('2.12.1');
PlotlyViaCDNModule.setPlotlyBundle('basic');

@Component({
  selector: 'app-plotly-test',
  standalone: true,
  imports: [
    CommonModule,
    PlotlyViaCDNModule
  ],
  templateUrl: './plotly-test.component.html',
  styleUrls: ['./plotly-test.component.scss']
})
export class PlotlyTestComponent {
  data = [
    { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
    { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
  ]
  layout = {width: 320, height: 240, title: 'A Fancy Plot'}
}
