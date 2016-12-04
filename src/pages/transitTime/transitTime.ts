import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { TravelProgressComponent } from '../../components/travel-progress/travel-progress.component';

@Component({
   templateUrl: 'transitTime.html',
   selector: 'transitTime',
   providers: [DataService],
   entryComponents: [TravelProgressComponent]
})

export class TransitTime {
   public transitTime: any;
   public detailedViagem: Array<boolean> = [];

   constructor(public navCtrl: NavController, private dataService: DataService) {

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

}
