import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l204',
  templateUrl: './l204.component.html',
  styleUrls: ['./l204.component.sass']
})
export class L204Component extends BaseComponentDirective implements OnInit {


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
