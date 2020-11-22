import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lg-printprogressbuttons',
  templateUrl: './printprogressbuttons.component.html',
  styleUrls: ['./printprogressbuttons.component.sass']
})
export class PrintprogressbuttonsComponent implements OnInit {

  @Input() public title = '';
  @Input() public color = '';
  @Input() public icon = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
