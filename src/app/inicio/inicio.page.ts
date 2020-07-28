import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  palavras = ["Adorável", "Alumbramento", "Amizade", "Amor", "Caminhos", "Chuva"];
  descricao = [
    //Adorável
    "Algo que merece ser adorado, que encanta; encantador; muito estimável.",
    //Alumbramento
    "Experiências que passamos e que parecem não ser “deste mundo”. Momentos singulares, impregnados de algo maravilhoso que, de repente, nos toca e encanta. Uma espécie de encantamento faz-nos sentir “estrangeiros” e, ao mesmo tempo, plenamente nós mesmos, totalmente protegidos em algo familiar. Nestes instantes, desembaraçados dos poderes quotidianos, experimentamos uma impressão de extraordinária liberdade.",
    //Amizade
    "Afeição por uma pessoa; estima, simpatia, camaradagem, companheirismo, cumplicidade, entendimento, compreensão, dedicação, bondade.",
    //Amor
    "Sentimento que induz a aproximar, a proteger ou a conservar a pessoa pela qual se sente afeição ou atracção; grande afeição ou afinidade forte por outra pessoa.",
    //Caminhos
    "Vias de comunicação que levam a um destino. Também utilizado para falar das várias possibilidades no nosso destino e que a vida nos coloca à frente.",
    //Chuva
    "Água que resulta da condensação das nuvens. Andar à chuva é um sentimento único e revigorante e óptimo para quem está apaixonado, seja por alguém ou pela própria vida."

  ];
  palavra: number;

  constructor(private vibration: Vibration, public alertCtrl: AlertController) { 

  }

  ngOnInit() {

  }

  Sortear(){
    this.palavra = Math.floor(Math.random() * (this.palavras.length - 1));
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: this.palavras[this.palavra],
      message: this.descricao[this.palavra],
      buttons: ['OK'],
    });
  
    await alert.present();
    
  }

  Vibrar(){
    this.vibration.vibrate(1000);
    this.Sortear();
    this.presentAlert();
  }
  
  

}
