import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {
  username: string;
  ProgresoAsistencia: boolean = false; 

  constructor(private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner) {
    this.username = '';
  }

  async scanQRCode() {
    const options = {
      prompt: 'Escanea el codigo qr',
      formats: 'QR_CODE',
    };

    this.barcodeScanner
      .scan(options)
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          const qrCodeData = barcodeData.text;

          if (!this.ProgresoAsistencia) {
            this.iniciarAsistencia(qrCodeData);
          } else {
            this.finalizarAsistencia(qrCodeData);
          }
        }
      })
      .catch(error => {
        console.error('Error al escanear el codigo qr:', error);
      });
  }

  iniciarAsistencia(qrCodeData: string) {
    this.ProgresoAsistencia = true;
    console.log('Registro de asistencia Iniciado', qrCodeData);
  }

  finalizarAsistencia(qrCodeData: string) {
    this.ProgresoAsistencia = false;
    console.log('Registro de asistencia finalizado', qrCodeData);
  }
}
