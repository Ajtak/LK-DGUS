import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l214',
  templateUrl: './l214.component.html',
  styleUrls: ['./l214.component.sass']
})
export class L214Component extends BaseComponentDirective implements OnInit {

  ngOnInit(): void {
  }

  getButtons(): object[] {
    return [{
      id: 1,
      col: 6,
      title: 'Yes',
      color: 'success'
    },
      {
        id: 1,
        col: 6,
        title: 'No',
        color: 'warning'
      }];
  }
}
