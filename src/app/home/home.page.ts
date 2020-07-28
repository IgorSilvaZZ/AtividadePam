import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  email: string = "";
  password: string = "";
  disableButton;

  constructor(private router: Router, private toastCtrl: ToastController, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private storage: Storage, public navCtrl: NavController) {}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disableButton = false;
  }

  async Registrar(){
    if(this.email == ""){
      this.presentToast('Insira o Email');
    }else if(this.password == ""){
      this.presentToast('Insira a Senha');
    }else{
      this.disableButton = true;
      this.navCtrl.navigateRoot(['/inicio']);
      
    }
  }

  async presentToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: "top"
    })
    toast.present();
  }

} 
