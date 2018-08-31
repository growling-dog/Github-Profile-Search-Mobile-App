import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubServicesProvider } from '../../providers/git-hub-services/git-hub-services'
import { User } from '../../models/user.interface'
/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private service: GitHubServicesProvider) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
  }

  getUserInformation(): void {
    this.service.mockGetUserInformation(this.username).subscribe(data => this.user = data);
  }

}
