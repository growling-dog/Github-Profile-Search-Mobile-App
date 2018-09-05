import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.component.html'
})
export class SearchResultComponent {

  @Input() user$: Observable<User>;

}