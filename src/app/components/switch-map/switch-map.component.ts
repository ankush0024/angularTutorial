import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  public status = false;
  public movieData: any = [];
  public searchKey: any;
  constructor(private httpClient: HttpClient) { }
  @ViewChild('search')
  searchEvent!: ElementRef;
  public searchBoxObs$!: Observable<any>;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.searchBoxObs$ = fromEvent(this.searchEvent.nativeElement, 'keyup');
    this.searchBoxObs$.pipe(pluck('target', 'value'), debounceTime(500), distinctUntilChanged(), tap(() => { this.status = true; })
      , switchMap((res) => this.searchGetCall(res))
      , pluck('Search')).subscribe((res) => {
        this.status = false;
        this.movieData = res;
      });



  }
  searchGetCall(term: string) {
    const APIKEY = "e8067b53";

    const PARAMS = new HttpParams({
      fromObject: {
        action: "opensearch",
        format: "json",
        origin: "*"
      }
    });
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
  }

}
