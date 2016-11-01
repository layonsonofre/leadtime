import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component ({
  template: 'carga.html'
})
export class Filtro {

  private dumbData: number;

  constructor(private params: NavParams) {
   console.log("constructor");
   this.dumbData= 22;
   console.log('Param:', params.get('param'));
 }

}
