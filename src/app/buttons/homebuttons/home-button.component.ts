import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lg-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.sass']
})
export class HomeButtonComponent {
  @Input() public icon = '';
  @Input() public text = '';
  @Input() public color = '';

  constructor() {
  }
}
