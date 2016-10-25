import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
//import { Carga } from '../pages/carga/carga';

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
  private indicadoresHome: any;
  private indicadores : any;

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

  public gotoAusencia() {
    console.log("entrwei");
  //  this.navCtrl.push(Carga);
  }

  loadDadosHome() {

    this.dataService.loadDadosHome().then(data => {
      this.indicadoresHome = data[0];


      //this.indicadores['cargas'] = 'A'; //this.indicadoresHome.indicadores[0].carga.quantidade;
      //this.indicadores['aguardando'] = 'B'; //this.indicadoresHome.indicadores[0].aguardando.quantidade;
      //this.indicadores['transit'] = 'C'; //this.indicadoresHome.indicadores[0].transit.quantidade;


      //console.log(this.indicadores);
    });

  }

}
