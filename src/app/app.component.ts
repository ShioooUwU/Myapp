import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
    { title: 'Servicios', url: '/servicios', icon: 'paper-plane' },
    { title: 'Ingreso', url: '/ingreso', icon: 'person' },
    
  ];
  constructor() {}
}
