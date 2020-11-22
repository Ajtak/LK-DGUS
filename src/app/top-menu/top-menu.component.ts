import {Component, OnInit} from '@angular/core';
import {TitleBarService} from '../title-bar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {

  showTopBar(): boolean {
    return this.dataService.showTopBar;
  }

  getTitle(): string {
    return this.dataService.title;
  }

  getBackTitle(): string | null {
    return (this.dataService.backTitle) ? this.dataService.backTitle : null;
  }




  redir(page: string): void {
    this.router.navigate(['/' + page]);
  }


  constructor(private dataService: TitleBarService, private router: Router) {
  }

  ngOnInit(): void {
  }


}
