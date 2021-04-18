import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

 /*  book: Book;
   allBooks$: Observable<Book[]>; */
public valueArray1:any=[];
public valueArray2:any=[];
public valueArray3:any=[];
public valueArray4:any=[];
   constructor() { }
   ngOnInit() {

    of('x', 'y', 'z').pipe(
      switchMap(el => of(1, 2).pipe(
           delay(2000),
           map(num => el+num)        
         )
       )
     ).subscribe(res => this.valueArray1.push(res));

     
     of('x', 'y', 'z').pipe(
      mergeMap(el => of(1, 2).pipe(
           delay(2000),
           map(num => el+num)        
         )
       )
     ).subscribe(res => this.valueArray2.push(res));


     of('x', 'y', 'z').pipe(
      concatMap(el => of(1, 2).pipe(
           delay(2000),
           map(num => el+num)        
         )
       )
     ).subscribe(res =>this.valueArray3.push(res));


     of('x', 'y', 'z').pipe(
      exhaustMap(el => of(1, 2).pipe(
           delay(2000),
           map(num => el+num)        
         )
       )
     ).subscribe(res => this.valueArray4.push(res));

   }

 
     

}
