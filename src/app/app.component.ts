import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Carga } from '../pages/carga/carga';
import { Descarga } from '../pages/descarga/descarga';
import { Home } from '../pages/home/home';
import { TransitTime } from '../pages/transitTime/transitTime';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Home;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Início', component: Home },
      { title: 'Carga', component: Carga },
      { title: 'Descarga', component: Descarga },
      { title: 'Transit Time', component: TransitTime }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  // openPage(page) {
  //   this.nav.push(page);
  // }
}
