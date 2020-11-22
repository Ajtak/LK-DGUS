import { Component, OnInit } from '@angular/core';
import {BaseComponentDirective} from '../basecomponent';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent extends BaseComponentDirective implements OnInit {


  ngOnInit(): void {
  }

}
