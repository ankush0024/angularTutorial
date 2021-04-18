import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, timer } from 'rxjs';
import{toArray,map,pluck, filter, tap, take, takeLast, takeUntil, retry, delay} from 'rxjs/operators';
import { DataServiceService } from 'src/app/shared/data-service.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  public intervalValue;
public obs1$=interval(1000);
  public timerValue;
public obs2$=timer(3,1000);//creates an observable which emits 1 2 3 4 5 6 7 
public ofValue;
public obs3$=of(1,2,3,4,5,6,7);
public arr=[{name:"ankush",age:25},{name:"singhal",age:35},{name:"ddd",age:15}];
public fromValue;
public toarrayResult;
public obs4$=from(this.arr);
public mapResult;
public pluckResult;
public filterResult;
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
   
   // this.obs1$.pipe(take(5)).subscribe((res)=>{/* console.log(res); */this.intervalValue=res;});
   //this.obs1$.pipe(takeLast(5)).subscribe((res)=>{/* console.log(res); */this.intervalValue=res;});
   this.obs1$.pipe(takeUntil(fromEvent(document,'click'))).subscribe((res)=>{/* console.log(res); */this.intervalValue=res;});
    this.obs2$.subscribe((res)=>{/* console.log(res); */this.timerValue=res;});
    this.obs3$.subscribe((res)=>{/* console.log(res); */this.ofValue=res;});
    this.obs4$.subscribe((res)=>{/* console.log(res); */this.fromValue=res;});
    this.obs4$.pipe(toArray()).subscribe((res)=>{console.log(res);this.toarrayResult=res;}) ;
    this.obs4$.pipe(map((res)=>res.name)).subscribe((res)=>{console.log(res);this.mapResult=res;});
    this.obs4$.pipe(pluck('name')).subscribe((res)=>{console.log(res);this.pluckResult=res;});
    this.obs4$.pipe(tap((ele)=>console.log("beforeFilterResponse"+ele)),filter((ele)=>ele.age>20),tap((ele)=>console.log("AfterFilterResponse"+ele))).subscribe((res)=>{console.log(res);this.filterResult=res;});
    this.obs4$.pipe(tap((ele)=>console.log("tap"+ele))).subscribe((res)=>{console.log(res);this.filterResult=res;});
  //this.service.getData().pipe(retry(2)).subscribe((res:any)=>{console.log(res)});
 // this.service.getData().pipe(delay(3000)).subscribe((res:any)=>{console.log(res)});
  }

}
