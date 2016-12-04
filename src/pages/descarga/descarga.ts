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
   public nav: any;
   public detailedViagem: Array<boolean> = [];
   public detailedAguardando: Array<boolean> = [];

   constructor(public navCtrl: NavController, private dataService: DataService) {
      this.descargas = 'd_previsao';
      this.nav = navCtrl;
   }

   ionViewDidLoad() {
      this.loadDescargasPrevisao(null, true);
   }

   loadDescargasPrevisao(refresher, force?: boolean) {
      this.descargas = 'd_previsao';
      this.dataService.loadDescargasPrevisao(force).then(data => {
         this.descargasPrevisao = data[0];
         for (let i = 0; i < this.descargasPrevisao.previsao.length; i++) {
            this.detailedViagem[i] = false;
         }

         if (refresher) {
            refresher.complete();
         }
         //console.log(this.descargasPrevisao.previsao);
      });
   }

   loadDescargasTempo(refresher, force?: boolean) {
      this.descargas = 'd_tempo';
      this.dataService.loadDescargasTempo(force).then(data => {
         this.descargasTempo = data[0];
         for (let i = 0; i < this.descargasTempo.tempo.length; i++) {
            this.detailedAguardando[i] = false;
         }
         if (refresher) {
            refresher.complete();
         }
         //console.log(this.descargasTempo.tempo);
      });
   }
}
