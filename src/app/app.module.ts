import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Carga } from '../pages/carga/carga';
import { Descarga } from '../pages/descarga/descarga';
import { Home } from '../pages/home/home';
import { TransitTime } from '../pages/transitTime/transitTime';
import { Login } from '../pages/login/login';
import { DataService } from '../providers/data-service';

@NgModule({
  declarations: [
    MyApp,
    Carga,
    Descarga,
    Home,
    TransitTime,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Carga,
    Descarga,
    Home,
    TransitTime,
    Login
  ],
  providers: [DataService]
})
export class AppModule {}
