import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { L001Component } from './screens/l001/l001.component';
import {HomeButtonComponent} from './buttons/homebuttons/home-button.component';
import { L002Component } from './screens/l002/l002.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { L204Component } from './screens/l204/l204.component';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';
import { L003Component } from './screens/l003/l003.component';
import { PrintprogressbuttonsComponent } from './buttons/printprogressbuttons/printprogressbuttons.component';
import { AdjustbuttonsComponent } from './buttons/adjustbuttons/adjustbuttons.component';
import { L004Component } from './screens/l004/l004.component';
import { L005Component } from './screens/l005/l005.component';
import { PagesComponent } from './pages/pages.component';
import { L248Component } from './screens/l248/l248.component';
import { L018Component } from './screens/l018/l018.component';
import { L250Component } from './screens/l250/l250.component';
import { L249Component } from './screens/l249/l249.component';
import { L000Component } from './screens/l000/l000.component';
import { L206Component } from './screens/l206/l206.component';
import { L208Component } from './screens/l208/l208.component';
import { L212Component } from './screens/l212/l212.component';
import { L214Component } from './screens/l214/l214.component';

@NgModule({
  declarations: [
    AppComponent,
    L001Component,
    HomeButtonComponent,
    AdjustbuttonsComponent,
    L002Component,
    TopMenuComponent,
    L204Component,
    AlertdialogComponent,
    L003Component,
    PrintprogressbuttonsComponent,
    L004Component,
    L005Component,
    PagesComponent,
    L248Component,
    L018Component,
    L250Component,
    L249Component,
    L000Component,
    L206Component,
    L208Component,
    L212Component,
    L214Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
