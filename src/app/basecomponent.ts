import {TitleBarService} from './title-bar.service';
import {Directive} from '@angular/core';
import {Router} from '@angular/router';

@Directive()
export class BaseComponentDirective {

  redir(page: string): void {
    this.router.navigate(['/' + page]);
  }

  setTitle(title: string): void {
    this.dataService.title = title;
  }

  setBackLink(backName: string): void {
    this.dataService.backTitle = backName;
  }

  hideTopBar(): void {
    this.dataService.showTopBar = false;
  }

  constructor(private dataService: TitleBarService, private router: Router) {
  }
}
