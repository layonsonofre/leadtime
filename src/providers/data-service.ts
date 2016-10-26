import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  public cargasViagem: any;
  public transitTime: any;
  public descargasPrevisao: any;
  public indicadoresHome: any;

  constructor(public http: Http) {

  }

  /*
  * INICIO DO BLOCO DE CARGA
  */
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
  /*
  * FIM DO BLOCO DE CARGA
  */

  /*
  * INICIO DO BLOCO DE DESCARGA
  */
  loadDescargasPrevisao() {
    return new Promise(resolve => {
      this.http.get('http://private-8d09d-leadtime.apiary-mock.com/descargas/previsao')
        .map(res => res.json())
        .subscribe(data => {
           this.descargasPrevisao = data;
           resolve(this.descargasPrevisao);
        }, err => {
          console.error(err);
        });
    });
  }

  loadDescargasTempo() {
    return new Promise(resolve => {
      this.http.get('http://private-8d09d-leadtime.apiary-mock.com/descargas/tempo')
        .map(res => res.json())
        .subscribe(data => {
           this.descargasPrevisao = data;
           resolve(this.descargasPrevisao);
        }, err => {
          console.error(err);
        });
    });
  }

  /*
  * FIM DO BLOCO DE DESCARGA
  */

  /*
  * INICIO DO BLOCO DE TRANSIT TIME
  */
  loadTransitTime() {
    return new Promise(resolve => {
      this.http.get('http://private-8d09d-leadtime.apiary-mock.com/transit/transitTime')
        .map(res => res.json())
        .subscribe(data => {
           this.transitTime = data;
           resolve(this.transitTime);
        }, err => {
          console.error(err);
        });
    });
  }
  /*
  * FIM DO BLOCO DE TRANSIT TIME
  */

  loadDadosHome() {
    return new Promise(resolve => {
      this.http.get('http://private-8d09d-leadtime.apiary-mock.com/home/indicadores')
        .map(res => res.json())
        .subscribe(data => {
           this.indicadoresHome = data;
           //console.log(this.indicadoresHome);
           resolve(this.indicadoresHome);
        }, err => {
          console.error(err);
        });
    });
  }
}
