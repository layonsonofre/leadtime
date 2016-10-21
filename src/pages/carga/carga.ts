import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'carga.html',
  selector: 'carga',
  providers: [DataService]
})
export class Carga {
  private cargasViagem: any;
  private cargasAguardando: any;
  private cargas: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
    this.cargas = 'c_viagem';
  }

  ionViewDidLoad() {
    this.loadCargasViagem();
  }

  loadCargasViagem() {
    this.cargas = 'c_viagem';
    this.dataService.loadCargasViagem().then(data => {
      this.cargasViagem = data[0];

      console.log("Cargas Viagem: ");
      console.log(this.cargasViagem);
    });
  }

  loadCargasAguardando() {
    this.cargas = 'c_aguardando';
    this.dataService.loadCargasAguardando().then(data => {
      this.cargasAguardando = data[0];

      console.log("Cargas aguardando: ");
      console.log(this.cargasAguardando);
    });
  }
}
