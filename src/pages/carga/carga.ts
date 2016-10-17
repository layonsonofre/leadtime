import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'carga.html',
  providers: [DataService]
})
export class Carga {
  private cargas: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('Hello CargaViagem Page');
    this.loadCargasViagem();
  }

  loadCargasViagem() {
    console.log('loading cargas...');
    this.dataService.loadCargasViagem().then(data => {
      this.cargas = data;
      console.log(this.cargas);
    });
  }

}
