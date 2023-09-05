import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage {
  constructor(private navCtrl: NavController) {}

  openAsistenciasPage() {
    // Agrega la lógica para abrir la página de asistencias
    this.navCtrl.navigateForward('/asistencias');
  }

  openCalificacionesPage() {
    // Agrega la lógica para abrir la página de calificaciones
    this.navCtrl.navigateForward('/calificaciones');
  }

  openAjustesPage() {
    // Agrega la lógica para abrir la página de ajustes
    this.navCtrl.navigateForward('/ajustes');
  }
}

