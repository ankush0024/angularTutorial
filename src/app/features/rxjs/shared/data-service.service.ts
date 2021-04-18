import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RxjsModule } from '../rxjs.module';

@Injectable()
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }
  public getData(){
return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
