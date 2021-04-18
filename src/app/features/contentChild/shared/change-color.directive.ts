import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
@HostBinding('style.color') color: any;
/* private el!:ElementRef; */
  constructor() { }
  ngOnInit(){
this.color='red';
//this.el.nativeElement.style.color='yellow';
  }
  @HostListener('click') onClick(){
    this.color='yello'
  } 

  @HostListener('mouseover') onmousein(){
    this.color='blue'
  } 
  @HostListener('mouseout') onmouseout(){
    this.color='green'
  } 
}
