import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleBarService {
  public title = 'Longer LK4';
  public backTitle = '';
  public showTopBar = true;

  constructor() {
  }
}
