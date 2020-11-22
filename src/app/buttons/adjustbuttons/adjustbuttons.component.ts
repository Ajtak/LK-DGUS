import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lg-adjustbutton',
  templateUrl: './adjustbuttons.component.html',
  styleUrls: ['./adjustbuttons.component.sass']
})
export class AdjustbuttonsComponent implements OnInit {

  @Input() public title = '';
  @Input() public color = '';
  @Input() public icon = '';

  constructor() { }
  ngOnInit(): void {
  }

}
