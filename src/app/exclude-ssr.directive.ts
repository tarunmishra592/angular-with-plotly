import {
  Directive,
  OnInit,
  PLATFORM_ID,
  Inject,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appExcludeSsr]'
})
export class ExcludeSsrDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    console.log('isPlatformServer', isPlatformServer(this.platformId))
    if (isPlatformServer(this.platformId)) {
      console.log('if')
      this.viewContainer.clear();
    } else {
      console.log('else')
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
