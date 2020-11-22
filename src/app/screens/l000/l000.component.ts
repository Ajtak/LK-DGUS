import { Component, OnInit } from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l000',
  templateUrl: './l000.component.html',
  styleUrls: ['./l000.component.sass']
})
export class L000Component extends BaseComponentDirective implements OnInit {

  ngOnInit(): void {
  }

}
