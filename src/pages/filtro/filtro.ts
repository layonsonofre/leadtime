import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'filtro.html',
  selector: 'filtro'
})
export class Filtro {

  constructor(private params: NavParams, private viewCtrl: ViewController) {
    console.log('nav params', params.get('param'));
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
