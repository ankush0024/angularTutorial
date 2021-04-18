import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit {
@Input() value1:any;
@Output() sampleEvent:EventEmitter<any>=new EventEmitter();
Childinput:any;
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
childFun(){
  this.sampleEvent.emit(this.Childinput);
}



}


