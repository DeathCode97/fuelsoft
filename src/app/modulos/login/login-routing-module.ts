import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesion } from './inicio-sesion/inicio-sesion';


const routes: Routes = [
  {path: '', component: InicioSesion},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
