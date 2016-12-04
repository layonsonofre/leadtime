import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
   templateUrl: 'transitTime.html',
   selector: 'transitTime',
   providers: [DataService]
})

export class TransitTime {
   public transitTime: any;
   public detailedViagem: Array<boolean> = [];

   constructor(public navCtrl: NavController, private dataService: DataService, private toast: ToastController) {

   }

   ionViewDidLoad() {
      this.loadTransitTime(null, false);
   }

   loadTransitTime(refresher, force?: boolean) {
      this.dataService.loadTransitTime(force).then(data => {
         this.transitTime = data[0];
         for (let i = 0; i < this.transitTime.transitTime.length; i++) {
            this.detailedViagem[i] = false;
         }
         if (refresher) {
             refresher.complete();
         }
         //console.log(this.transitTime.transitTime);
      });
   }

   show(message: string): void {
      this.toast.create(
         {
            message: message,
            duration: 2500
         }
      ).present();
   }


}
