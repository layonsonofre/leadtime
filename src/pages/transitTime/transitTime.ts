import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'transitTime.html',
  selector: 'transitTime',
  providers: [DataService]
})

export class TransitTime {

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ionViewDidLoad() {

  }
}
