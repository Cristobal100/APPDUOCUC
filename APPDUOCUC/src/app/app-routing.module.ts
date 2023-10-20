import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a la página de inicio de sesión por defecto
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'recuperar-contrasena', loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaPageModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
