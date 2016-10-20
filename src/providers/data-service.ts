import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  public cargasViagem: any;

  constructor(public http: Http) {
  }

  loadCargasViagem() {
    return new Promise(resolve => {
      this.http.get('http://private-8d09d-leadtime.apiary-mock.com/cargas/viagem')
        .map(res => res.json())
        .subscribe(data => {
           this.cargasViagem = data;
           resolve(this.cargasViagem);
        }, err => {
          console.error(err);
        });
    });
  }

  loadCargasAguardando() {
    return new Promise(resolve => {
      this.http.get('http://private-8d09d-leadtime.apiary-mock.com/cargas/aguardando')
        .map(res => res.json())
        .subscribe(data => {
           this.cargasViagem = data;
           resolve(this.cargasViagem);
        }, err => {
          console.error(err);
        });
    });
  }
}
