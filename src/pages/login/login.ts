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
    this.formularioInicial = 'login';
  }

  ionViewDidLoad() {
    if(this.autenticado){
      this.gotoHome();
    }else{
      this.loadLogin();
    }
  }

  public gotoHome() {
    this.navCtrl.push(Home);
  }

  loadLogin() {
    this.formularioInicial = 'login';
  }

  loadCadastro() {
    this.formularioInicial = 'cadastro';
  }

}
