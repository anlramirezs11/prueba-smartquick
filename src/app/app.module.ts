import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

// Componenetes
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CoodinadorComponent } from './pages/coodinador/coodinador.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { ResumenComponent } from './components/resumen/resumen.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    CoodinadorComponent,
    HeaderComponent,
    TableComponent,
    ResumenComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
