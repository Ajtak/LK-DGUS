import { Component, OnInit } from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l206',
  templateUrl: './l206.component.html',
  styleUrls: ['./l206.component.sass']
})
export class L206Component extends BaseComponentDirective implements OnInit {

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
