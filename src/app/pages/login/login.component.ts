import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: any[];
  correo: string;
  password: string;
  advertencia: string;
  usuarioEntrante: any;

  constructor(private authServiceService: AuthServiceService, private router: Router) {
    this.correo = '';
    this.password = '';
    this.advertencia = '';
    this.usuarioEntrante = null;
  }
  ngOnInit() {
    this.usuarios = this.authServiceService.getUsuarios();
  }

  ingresarVistas() {
    this.advertencia = this.authServiceService.validarUsuario(this.correo, this.password);
    this.usuarioEntrante = this.authServiceService.getUsuario(this.correo);
    if (this.usuarioEntrante) {
      console.log();
      this.router.navigate([this.usuarioEntrante.tipoUsuario]);
    }
  }


}
