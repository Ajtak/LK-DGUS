import {Component, OnInit} from '@angular/core';
import {BaseComponentDirective} from '../../basecomponent';

@Component({
  selector: 'app-l001',
  templateUrl: './l001.component.html',
  styleUrls: ['./l001.component.sass']
})
export class L001Component extends BaseComponentDirective implements OnInit {


  ngOnInit(): void {
  }

}
