import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario: any;
  suscription: Subscription;

  constructor(private authServiceService: AuthServiceService, private router: Router) {
    this.usuario = {};
  }

  ngOnInit() {
    // Patron Observable: Observer
    // Patron Redux: El store.subscribe notifica los cambios realizados en el estado.
    this.suscription = this.authServiceService.usuario$.subscribe((response: any) => {
      if (response) {
        this.usuario = response;
      }
    });
  }

  logOut() {
    this.router.navigate(['home']);
    this.suscription.unsubscribe();
  }

}
