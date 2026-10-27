import { Routes } from '@angular/router';

//Aqui se declaran las rutas de la aplicacion, se puede usar lazy loading para cargar modulos de manera diferida
// Cada que se agregue una ruta se apunta a un modulo que contenga sus componentes y rutas hijas, esto permite una mejor 
// organizacion del codigo y una carga mas rapida de la aplicacion

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadChildren: () => import('./modulos/login/login-module').then(m => m.LoginModule)},
    {path: '**', redirectTo: 'login'}
];
