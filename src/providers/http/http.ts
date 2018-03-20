import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  url: string = './assets/mocks/';

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  get(path: string) {
    return this.http.get(this.url + path);
  }

}
