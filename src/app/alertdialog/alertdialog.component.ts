import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lk-alertdialog',
  templateUrl: './alertdialog.component.html',
  styleUrls: ['./alertdialog.component.sass']
})
export class AlertdialogComponent implements OnInit {
  @Input() public text = '';
  @Input() public title = '';
  @Input() public buttons = [] as  any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
