
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CoodinadorComponent } from './pages/coodinador/coodinador.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';

const APP_ROUTES: Routes = [
 {path: 'home', component: LoginComponent},
 {path: 'coordinador', component: CoodinadorComponent},
 {path: 'administrador', component: AdministradorComponent},
 {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
