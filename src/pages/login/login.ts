import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { Home } from '../home/home';


@Component({
  templateUrl: 'login.html',
  selector: 'login',
  providers: [DataService]
})

export class Login {

  public formularioInicial: any;
  public autenticado: false;
  public error: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
  }

  ionViewDidLoad() {
    if (this.autenticado) {
      this.gotoHome();
    }
  }

  public gotoHome() {
    this.navCtrl.setRoot(Home);
  }
}
