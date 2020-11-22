import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l208',
  templateUrl: './l208.component.html',
  styleUrls: ['./l208.component.sass']
})
export class L208Component extends BaseComponentDirective implements OnInit {

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
