import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {L001Component} from './screens/l001/l001.component';
import {L002Component} from './screens/l002/l002.component';
import {L204Component} from './screens/l204/l204.component';
import {L003Component} from './screens/l003/l003.component';
import {L004Component} from './screens/l004/l004.component';
import {L005Component} from './screens/l005/l005.component';
import {PagesComponent} from './pages/pages.component';
import {L248Component} from './screens/l248/l248.component';
import {L018Component} from './screens/l018/l018.component';
import {L250Component} from './screens/l250/l250.component';
import {L249Component} from './screens/l249/l249.component';
import {L000Component} from './screens/l000/l000.component';
import {L206Component} from './screens/l206/l206.component';
import {L208Component} from './screens/l208/l208.component';
import {L212Component} from './screens/l212/l212.component';
import {L214Component} from './screens/l214/l214.component';

const routes: Routes = [
  {
    path: '000',
    component: L000Component
  },
  {
    path: '001',
    component: L001Component
  },
  {
    path: '002',
    component: L002Component
  },
  {
    path: '003',
    component: L003Component
  },
  {
    path: '004',
    component: L004Component
  },
  {
    path: '005',
    component: L005Component
  },
  {
    path: '018',
    component: L018Component
  },
  {
    path: '204',
    component: L204Component
  },
  {
    path: '206',
    component: L206Component
  },
  {
    path: '208',
    component: L208Component
  },
  {
    path: '212',
    component: L212Component
  },
  {
    path: '214',
    component: L214Component
  },
  {
    path: '248',
    component: L248Component
  },
  {
    path: '249',
    component: L249Component
  },
  {
    path: '250',
    component: L250Component
  },
  {
    path: '',
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
