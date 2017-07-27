import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Decorador ES7 
@Component({
  selector: 'hola-angular',
  template: '<h1> {{saldo}} </h1>'
})

class HolaAngularComponent{
  saldo: string;
  constructor(){
    this.saludo = 'lalalala';
  }
}

bootstrap(HolaAngularComponent);
