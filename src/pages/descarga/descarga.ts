import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'descarga.html',
  selector: 'descarga',
  providers: [DataService]
})

export class Descarga {
  private descargasPrevisao: any;
  private descargasTempo: any;
  public descargas: any;
  public detailedViagem: Array<boolean> = [];
  public detailedAguardando: Array<boolean> = [];

  constructor(public navCtrl: NavController, private dataService: DataService) {
    this.descargas = 'd_previsao';
  }

  ionViewDidLoad() {
    this.loadDescargasPrevisao();
  }

  loadDescargasPrevisao() {
    this.descargas = 'd_previsao';
    this.dataService.loadDescargasPrevisao().then(data => {
      this.descargasPrevisao = data[0];
      for (let i = 0; i < this.descargasPrevisao.previsao.length; i++) {
          this.detailedViagem[i] = false;
      }
      console.log(this.descargasPrevisao.previsao);
    });
  }

  loadDescargasTempo() {
    this.descargas = 'd_tempo';
    this.dataService.loadDescargasTempo().then(data => {
      this.descargasTempo = data[0];
      for (let i = 0; i < this.descargasTempo.tempo.length; i++) {
          this.detailedAguardando[i] = false;
      }
      console.log(this.descargasTempo.tempo);
    });
  }
}
