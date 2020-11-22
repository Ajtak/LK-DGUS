import { Component, OnInit } from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l212',
  templateUrl: './l212.component.html',
  styleUrls: ['./l212.component.sass']
})
export class L212Component extends BaseComponentDirective implements OnInit {

  ngOnInit(): void {
  }

  getButtons(): object[] {
    return [{
      id: 1,
      col: 6,
      title: 'Enable',
      color: 'success'
    },
      {
        id: 1,
        col: 6,
        title: 'Disable',
        color: 'warning'
      }];
  }

}
