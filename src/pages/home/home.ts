import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

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

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }


  ionViewDidLoad() {
    this.loadDadosHome();
  }

  loadDadosHome() {

    this.dataService.loadDadosHome().then(data => {
      this.indicadoresHome = data[0];
      console.log("Carrerou os indicadores!");
      console.log(this.indicadoresHome.indicadores[0].aguardando.quantidade);
    });

  }

}
