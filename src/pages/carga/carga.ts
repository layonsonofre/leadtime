import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Filtro } from '../filtro/filtro'
import { DataService } from '../../providers/data-service';

@Component({
   templateUrl: 'carga.html',
   selector: 'carga',
   providers: [DataService]
})

export class Carga {
   private cargasViagem: any = null;
   private cargasAguardando: any;
   public cargas: any;
   public nav: any;
   public detailedViagem: Array<boolean> = [];
   public detailedAguardando: Array<boolean> = [];

   constructor(private navCtrl: NavController, private dataService: DataService, public modalCtrl: ModalController) {
      this.cargas = 'c_viagem';
      this.nav = navCtrl;
   }

   ionViewDidLoad() {
      this.loadCargasViagem(null, true);
   }

   presentModal() {
      let filtro = this.modalCtrl.create(Filtro, {param: "something"});
      filtro.onDidDismiss(data => {
         console.log(data);
      });
      filtro.present();
      console.log('myModal is ', filtro);
   }

   loadCargasViagem(refresher, force?: boolean) {
      this.cargas = 'c_viagem';
      this.dataService.loadCargasViagem(force).then(data => {
         this.cargasViagem = data[0];
         for (let i = 0; i < this.cargasViagem.viagens.length; i++) {
            this.detailedViagem[i] = false;
         }
         if (refresher) {
            refresher.complete();
         }
      });
   }

   loadCargasAguardando(refresher, force?: boolean) {
      this.cargas = 'c_aguardando';
      this.dataService.loadCargasAguardando(force).then(data => {
         this.cargasAguardando = data[0];
         for (let i = 0; i < this.cargasAguardando.viagens.length; i++) {
            this.detailedAguardando[i] = false;
         }
         if (refresher) {
            refresher.complete();
         }
         //console.log(this.cargasAguardando.viagens);
      });
   }
}
