import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[left-menu]'
})
export class MenuDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
