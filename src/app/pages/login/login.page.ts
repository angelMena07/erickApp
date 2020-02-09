import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
