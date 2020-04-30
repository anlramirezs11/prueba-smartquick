import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  usuarios: Usuario[];
  usuarioEntrante: any;
  // Patron Observable
  private usuario = new BehaviorSubject([]);
  public usuario$ = this.usuario.asObservable();


  constructor() {
    this.usuarios = [
      {
        correo: 'admi@correo.co',
        clave: '123645',
        tipoUsuario: 'administrador',
        nombre: 'Andrea Ramirez'
      },
      {
        correo: 'coordinador@correo.co',
        clave: '9638',
        tipoUsuario: 'coordinador',
        nombre: 'Liliana Silva'
      },
      {
        correo: 'administrador@correo.co',
        clave: '123645',
        tipoUsuario: 'administrador',
        nombre: 'Cristian Rodriguez'
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
    this.usuario.next(this.usuarioEntrante);
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
  nombre: string;
}