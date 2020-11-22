import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l005',
  templateUrl: './l005.component.html',
  styleUrls: ['./l005.component.sass']
})
export class L005Component extends BaseComponentDirective implements OnInit {

  ngOnInit(): void {
  }

  getButtons(): object[] {
    return [{
      id: 1,
      col: 12,
      title: 'OK',
      color: 'success'
    }];
  }
}
