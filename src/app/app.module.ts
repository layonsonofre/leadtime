import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Carga } from '../pages/carga/carga';
import { DataService } from '../providers/data-service';

@NgModule({
  declarations: [
    MyApp,
    Carga
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Carga
  ],
  providers: [DataService]
})
export class AppModule {}
