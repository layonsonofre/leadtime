import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Carga } from '../pages/carga/carga';
import { Descarga } from '../pages/descarga/descarga';
import { Home } from '../pages/home/home';
import { TransitTime } from '../pages/transitTime/transitTime';
//import { Login } from '../pages/login/login';

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
   rootPage: any = Home;
   pages: Array<{title: string, component: any}>;

   constructor(public platform: Platform) {
      this.initializeApp();
   }

   initializeApp() {
      this.platform.ready().then(() => {
         StatusBar.styleDefault();
         Splashscreen.hide();
      });
   }

   openPage(page) {
      if (page === 'inicio') {
         this.nav.setRoot(Home);
      } else if (page === 'cargas'){
         this.nav.push(Carga);
      } else if (page === 'descargas'){
         this.nav.push(Descarga);
      } else if (page === 'transit'){
         this.nav.push(TransitTime);
      } else if (page === 'logout'){
         //this.nav.push(Carga);
      }
   }
}
