import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Carga } from '../pages/carga/carga';
import { Home } from '../pages/home/home';
import { DataService } from '../providers/data-service';

@NgModule({
  declarations: [
    MyApp,
    Carga,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Carga,
    Home
  ],
  providers: [DataService]
})
export class AppModule {}
