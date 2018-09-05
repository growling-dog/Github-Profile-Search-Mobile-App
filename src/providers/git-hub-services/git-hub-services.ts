//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
//import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
//import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

@Injectable()
export class GitHubServicesProvider {

  private ROOT_URL : string = "https://api.github.com/users";  
  private REPO_SUFFIX : string = "repos";

  constructor(private http: HttpClient) {
    console.log('Custom service call...');
  }

  GetGitHubUserInformation(username: string) {    
    return this.http.get<User>(`${this.ROOT_URL}/${username}`);
  }

  GetGitHubRepositoryInformation(username: string) {
    return this.http.get<Repository[]>(`${this.ROOT_URL}/${username}/${this.REPO_SUFFIX}`);
  }

  // mockGetUserInformation(username: string): Observable<User> {
  //   return Observable.of(USER_LIST.filter(user => user.name===username)[0]);
  // }

  // mockGetRepositoryInformation(username: string): Observable<Repository[]> {
  //   return Observable.of(REPOSITORY_LIST.filter(data => data.owner.name === username));
  // }

};