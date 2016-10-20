import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'carga.html',
  providers: [DataService]
})
export class Carga {
  private cargasViagem: any;
  private cargas: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
     this.cargas = 'c_viagem';
  }

  ionViewDidLoad() {
  }

  loadCargasViagem() {
    this.dataService.loadCargasViagem().then(data => {
      this.cargasViagem = data[0];
      console.log(this.cargasViagem);
    });
  }

}
