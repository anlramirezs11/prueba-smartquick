import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Componenetes
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CoodinadorComponent } from './pages/coodinador/coodinador.component';

// Rutas
import { APP_ROUTING } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    CoodinadorComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
