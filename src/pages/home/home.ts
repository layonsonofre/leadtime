import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { Carga } from '../carga/carga';
import { Descarga } from '../descarga/descarga';
import { TransitTime } from '../transitTime/transitTime';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  providers: [DataService]
})

export class Home {

  public home: any;
  public indicadoresHome: any;
  public indicadores: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ionViewDidLoad() {
    this.loadDadosHome();
  }

  public goto(page) {
    if (page === 'carga') {
      this.navCtrl.push(Carga);
    } else if (page === 'descarga') {
      this.navCtrl.push(Descarga);
    } else if (page === 'transit') {
      this.navCtrl.push(TransitTime);
    }
  }

  loadDadosHome() {

    this.dataService.loadDadosHome().then(data => {
      this.indicadoresHome = data[0].indicadores[0];
    });

  }

}
