import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { GitHubServicesProvider } from '../../providers/git-hub-services/git-hub-services'
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user$: Observable<User>;
  repositories$: Observable<Repository[]>;



  constructor(private navParams: NavParams, private httpService: GitHubServicesProvider) {}

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    console.log(this.username);
    if (this.username) {
      this.getGitHubInformation();
    }
  }

  getGitHubInformation() {
    this.user$ = this.httpService.GetGitHubUserInformation(this.username);
    this.repositories$ = this.httpService.GetGitHubRepositoryInformation(this.username);
  }

  // getUserInformation(): void {
  //   this.service.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
  //   this.service.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  // }

}