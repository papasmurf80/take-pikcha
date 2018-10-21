import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppUserProvider {
  user: any;

  constructor(public http: HttpClient) {
    console.log('Hello AppUserProvider Provider');
  }
  userUrl: string = "http://localhost:3000/api/photoappusers"

  register(user) {
    return this.http.post(this.userUrl, user)
  }

  login(user) {
    return this.http.post(this.userUrl + "/login", user)
  }
}
