import { ContentChild, Directive, ElementRef,ContentChildren, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {

  constructor(private elem:ElementRef, private render:Renderer2) { }

  position:any

  @ContentChild('tooltip')
  


  @Input()
  hidden:boolean =true


  getPosition(){
    this.position.elem.nativeElement.getBoundingClientRect()
  }

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Ca entre')
    this.render.setStyle()
  }

  
  




}
