import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  templateUrl: 'carga.html',
  providers: [DataService]
})
export class Carga {
  private cargasViagem: any;
  private cargas: any;

  constructor(public navCtrl: NavController, private dataService: DataService) {
     this.cargas = 'c_viagem';
  }

  ionViewDidLoad() {
  }

  loadCargasViagem() {
    this.dataService.loadCargasViagem().then(data => {
      //this.cargasViagem = data[0];

      this.cargasViagem =
    {
        "viagens": [
            {
                "transportadora": {
                    "nome_fantasia": "Sulista",
                    "logo": "http://logo.fretebras.com.br/341675484/transporte-curitiba-pr-transportadora-sulista_p.jpg"
                },
                "status": "ADIANTADO",
                "placa": "AAA1234",
                "romaneio": "339387",
                "tempo_aguardando": "0:15",
                "chegada_prevista": "23:45 - 12/10/2016",
                "mercadoria": "PeÃ§as automotivas",
                "motorista": "Odair Barbosa Scularek",
                "municipio_origem": "Ponta Grossa/PR",
                "municipio_destino": "Bernardino de Campos/SP",
                "embarcadora": "NestlÃ¨ do Brasil Ltda."
            }, {
                "transportadora": {
                    "nome_fantasia": "Sulista",
                    "logo": "http://logo.fretebras.com.br/341675484/transporte-curitiba-pr-transportadora-sulista_p.jpg"
                },
                "status": "ATRASADO",
                "placa": "XYZ9876",
                "romaneio": "4591123",
                "tempo_aguardando": "11:23",
                "chegada_prevista": "13:30 - 13/10/2016",
                "mercadoria": "Litros de Cerveja",
                "motorista": "Seu Jair",
                "municipio_origem": "Curitiba/PR",
                "municipio_destino": "Ponta Grossa/PR",
                "embarcadora": "Heineken dos Deuses"
            }
        ],
        "tempo_consulta": "23 s",
        "mais_informacoes": true
    };

      console.log("Cargas Viagem: ");
      console.log(this.cargasViagem);
    });
  }

}
