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
  public cargas: any;
  public detailedViagem: Array<boolean> = [];
  public detailedAguardando: Array<boolean> = [];

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
      for (let i = 0; i < this.cargasViagem.viagens.length; i++) {
          this.detailedViagem[i] = false;
      }
      console.log(this.cargasViagem.viagens);
    });
  }

  loadCargasAguardando() {
    this.cargas = 'c_aguardando';
    this.dataService.loadCargasAguardando().then(data => {
      this.cargasAguardando = data[0];
      for (let i = 0; i < this.cargasAguardando.viagens.length; i++) {
          this.detailedAguardando[i] = false;
      }
      console.log(this.cargasAguardando.viagens);
    });
  }
}
