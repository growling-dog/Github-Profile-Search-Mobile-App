//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

@Injectable()
export class GitHubServicesProvider {

  constructor() {
    console.log('Hello GitHubServicesProvider Provider');
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name===username)[0]);
  }


}
