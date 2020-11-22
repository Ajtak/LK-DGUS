import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l002',
  templateUrl: './l002.component.html',
  styleUrls: ['./l002.component.sass']
})
export class L002Component extends BaseComponentDirective implements OnInit {


  ngOnInit(): void {
  }

}
