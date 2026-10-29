import { Routes } from '@angular/router';
import { InicioSesion } from './modulos/login/inicio-sesion/inicio-sesion';

//Aqui se declaran las rutas de la aplicacion, se puede usar lazy loading para cargar modulos de manera diferida
// Cada que se agregue una ruta se apunta a un modulo que contenga sus componentes y rutas hijas, esto permite una mejor 
// organizacion del codigo y una carga mas rapida de la aplicacion

export const routes: Routes = [
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    // {path: 'login', loadChildren: () => import('./modulos/login/login-module').then(m => m.LoginModule)},
    // {path: '**', redirectTo: 'login'}

    // ruta publica, la que no tiene navbar.
    {path: 'login', component: InicioSesion},
    // Redireccion por defecto cuando escriben otra chingadera en la url ja
    { path: '**', redirectTo: 'login' },
    // Rutas protegidas (Con navbar gracias al MainLayout)
//   {
//     path: '',
//     component: MainLayoutComponent,
//     canActivate: [authGuard], // <--- Aquí aplicas el protector a todo el grupo
//     children: [
//       { path: 'inicio', component: InicioComponent },
//       { path: 'usuarios', component: UsuariosComponent },
//       { path: '', redirectTo: 'inicio', pathMatch: 'full' }
//     ]
//   },


];
