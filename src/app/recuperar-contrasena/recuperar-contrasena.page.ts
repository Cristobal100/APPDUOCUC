import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  username: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async recuperarContrasena() {
    if (this.username.trim() === '') {
      await this.mostrarAlerta('Error', 'Ingresa el nombre de usuario');
    } else {
      console.log('Recuperando contraseña para', this.username);

      
      await this.mostrarAlerta('Éxito', 'Has recuperado la contraseña con éxito.');
      this.router.navigateByUrl('/login');
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
