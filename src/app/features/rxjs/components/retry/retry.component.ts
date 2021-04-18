import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, concatMap, delay, retryWhen, scan } from 'rxjs/operators';
import { DataServiceService } from '../../shared/data-service.service';
//https://www.youtube.com/watch?v=_mb5rPtBoRg&t=248s
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getData().pipe(
      retryWhen(err => err.pipe(concatMap((err: HttpErrorResponse) => {
        if (err.status === 0) {
          return of(err);
        }else if(err.status==401){
          return of(err);
        }
        return throwError(err);
      }), scan((retryCount) => {
        if (retryCount > 5) {
          throw err;
        }
        else {
          retryCount++;
          return retryCount;
        }
      }, 0), delay(1000)
      )
      ), catchError(this.handleError)).subscribe((res) => console.log(res), (err) => { console.error("error" + err) });

  }
  handleError(error: any) {
    let errorMsg = '';
    if (!error.error || !error.error.error) {
      errorMsg = "there is some unknown error";
    }
    else if (error.error == "permission denied") {
      errorMsg = "you dont have permission for this content";
    }
    else {
      errorMsg = "unknown error";
    }

    return throwError(errorMsg);
  }

}
