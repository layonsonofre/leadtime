import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { /*AbstractControl, */FormBuilder, Validators } from '@angular/forms';
/*import { Storage } from '@ionic/storage';*/
//import { CustomValidators } from '../validators/CustomValidators';
import { Home } from '../home/home';


@Component({
  templateUrl: 'login.html',
  selector: 'login',
  providers: [DataService]
})

export class Login {

  public form: any;
  public autenticado: false;
  private email: any;
  private estrangeiro: any;
  private cuit: any;

  constructor(public navCtrl: NavController, private dataService: DataService, public loadingCtrl: LoadingController, private fb: FormBuilder, public toastCtrl: ToastController/*, public storage: Storage*/) {
     /*this.storage = new Storage();*/
     this.form = fb.group({
        'email': ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
        'estrangeiro': [false],
        'cuit': ['', Validators.compose([Validators.required, Validators.minLength(10)])]
     });

     this.email = this.form.controls['email'];
     this.estrangeiro = this.form.controls['estrangeiro'];
     this.cuit = this.form.controls['cuit'];
  }

  ionViewDidLoad() {
     var loading = this.loadingCtrl.create({
        content: "Carregando..."
     });
     loading.present();
     loading.dismiss();
     /*this.storage.get('token').then((val) => {
        if (val)
            loading.dismiss().then(() => {
               this.navCtrl.setRoot(Home);
            })
         else
            loading.dismiss();
     })*/
  }

  mostrarToast(msg) {
     let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
     });
     toast.present();
 }

  acessar(value) {
     if (value.estrangeiro) {
        value.estrangeiro = 1;
        value.cuit = value.cuit.replace(/[.-]/g, "");
     } else {
        value.estrangeiro = 0;
        value.cpf = value.cpf.replace(/[.-]/g, "");
     }

     var loading = this.loadingCtrl.create({
        content: "Carregando..."
     });
     loading.present();
     loading.dismiss();
     this.navCtrl.setRoot(Home);
     /*this.dataService.primeiroAcesso(value).then((data: any) => {
        if (data.success) {
            this.storage.set('email', value.email);
            this.storage.set('estrangeiro', value.estrangeiro);
            this.mostrarToast("Código de acesso gerado e enviado por e-mail");
        } else {
           this.mostrarToast("Não foi possível gerar o código de acesso. Tente novamente mais tarde");
        }
        loading.dismiss();
     });*/
  }

    /*inserirCodigo() {
       this.navCtrl.push(Codigo);
    }*/
}
