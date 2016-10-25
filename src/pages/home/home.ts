import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { Carga } from '../carga/carga';
import { Descarga } from '../descarga/descarga';
import { TransitTime } from '../transitTime/transitTime';

/*
  Generated class for the Home page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.

*/

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  providers: [DataService]
})

export class Home {

  public home: any;
  public indicadoresHome: any;
  public indicadores : any;

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ionViewDidLoad() {
    this.loadDadosHome();
  }

  /*
  abrirPagina(nome) {
    console.log("Abrir página");
    this.nav.setRoot(nome);
  }
  */

  public gotoCarga() {
    console.log("entrwei");
    this.navCtrl.push(Carga);
  }

  public gotoDescarga() {
    console.log("entrwei");
    this.navCtrl.push(Descarga);
  }

  public gotoTransitTime() {
    console.log("entrwei");
    this.navCtrl.push(TransitTime);
  }

  loadDadosHome() {

    this.dataService.loadDadosHome().then(data => {
      this.indicadoresHome = data[0];

      console.log("Indicadores:");
      console.log(this.indicadoresHome);




      //this.indicadores['cargas'] = this.indicadoresHome.indicadores[0].carga.quantidade;
      //this.indicadores['aguardando'] = 'B'; //this.indicadoresHome.indicadores[0].aguardando.quantidade;
      //this.indicadores['transit'] = 'C'; //this.indicadoresHome.indicadores[0].transit.quantidade;


      //console.log(this.indicadores);
    });

  }

}
