import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit {

@ContentChild('header') header1!:ElementRef;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
ngAfterViewInit(){
console.log(this.header1);

}
changeFont(){
  this.renderer.setStyle(this.header1.nativeElement,'color','yellow');
  //this.header1.nativeElement.style.color='yellow';
}
}
