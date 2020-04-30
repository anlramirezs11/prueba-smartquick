import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  usuarios: Usuario[];
  usuarioEntrante: any;
  constructor() {
    this.usuarios = [
      {
        correo: 'admi@correo.co',
        clave: '123645',
        tipoUsuario: 'administrador'
      },
      {
        correo: 'coordinador@correo.co',
        clave: '9638',
        tipoUsuario: 'coordinador'
      },
      {
        correo: 'administrador@correo.co',
        clave: '123645',
        tipoUsuario: 'administrador'
      }
    ];
    this.usuarioEntrante = {};
  }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuario(correo) {
    this.usuarios.forEach(usuario => {
      if (usuario.correo === correo) {
        this.usuarioEntrante = usuario;
      }
    });
    return this.usuarioEntrante;
  }

  validarUsuario(correo, pass) {
    this.getUsuario(correo);
    if (this.usuarioEntrante) {
      if (this.usuarioEntrante.clave === pass) {
        return 'Usuario y Contraseña Correcta';
      } else {
        return 'Contraseña incorrecta';
      }
    } else {
      return 'Usuario incorrecto';
    }

  }





}


interface Usuario {
  correo: string;
  clave: string;
  tipoUsuario: string;
}