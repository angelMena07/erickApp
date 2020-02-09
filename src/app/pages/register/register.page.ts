import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  nombreUsuario = '';
  usuario = '';
  password = '';

  constructor() { }

  ngOnInit() {
    console.log('hola mundo');
  }

  login() {
    console.log('el usuario es ', this.usuario);
    console.log('la password es ', this.password);
  }
}
