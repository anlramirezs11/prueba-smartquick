import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario[];

  constructor() {
    this.usuario = [
      {
        correo: 'administrador@correo.co',
        clave: '123645',
        tipoUsuario: 'administrador'
      },
      {
        correo: 'coordinador@correo.co',
        clave: '9638',
        tipoUsuario: 'coordinador'
      }
    ]
  }

  ngOnInit() {
  }

}

interface Usuario {
  correo: string;
  clave: string;
  tipoUsuario: string;
}