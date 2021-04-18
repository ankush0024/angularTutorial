import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }
  public getData(){
return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
