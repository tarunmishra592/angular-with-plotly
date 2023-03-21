
import { NgModule, Injectable, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyService } from "angular-plotly.js";
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";


function _window(): any {
    // return the global native browser window object
    return window;
}

@Injectable()
export class WindowRefService {
    get nativeWindow(): any {
        return _window();
    }
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PlotlyService, WindowRefService],
  exports: [],
})
export class PlotlyUniversalModule {
  constructor(@Inject(PLATFORM_ID) private platformId: any, private windowService: WindowRefService) {
    if (isPlatformBrowser(platformId)) {
      const plotly = (windowService.nativeWindow as any).Plotly;
      if (typeof plotly === 'undefined') {
        throw new Error(`Plotly object not found on window.`);
      }
      PlotlyService.setPlotly(plotly);
    }
  }

}