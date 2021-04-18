import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('para',{static:false})
  para!: ElementRef;
  @ViewChildren('para')
  paraList!: QueryList<ElementRef>;
  //@ViewChild('child', {static:true}) child!: ChildComponent;
  @ViewChild(ChildComponent, {static:true}) child!: ChildComponent;

  title = 'Parent calls an @ViewChild()';
  constructor() { }

  ngOnInit(): void {
   // this.para.nativeElement.style.color="blue";
  }
  increment() {
    console.log(this.child);
    this.child.increment();
  }
 
  decrement() {
    this.child.decrement();
  }
  changeColor(){
    this.para.nativeElement.style.color="blue";
  }
  changeParaColor(){
    console.log(this.paraList);
this.paraList.forEach((ele)=>{ele.nativeElement.style.color="green"});
  }
}
