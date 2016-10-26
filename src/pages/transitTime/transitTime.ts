import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'transitTime.html',
  selector: 'transitTime',
  providers: [DataService]
})

export class TransitTime {
  private transitTime: any;
  public detailedViagem: Array<boolean> = [];

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ionViewDidLoad() {
    this.loadTransitTime();
  }

  loadTransitTime() {
    this.dataService.loadTransitTime().then(data => {
      this.transitTime = data[0];
      console.log(this.transitTime);

      for (let i = 0; i < this.transitTime.transitTime.length; i++) {
          this.detailedViagem[i] = false;
      }
      console.log(this.transitTime.transitTime);

    });
  }

}
