import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  title = 'Parent calls an @ViewChild()';
  constructor() { }

  ngOnInit(): void {
   // this.para.nativeElement.style.color="blue";
  }
 
 

}
