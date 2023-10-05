import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-auto',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe: redirectUnauthorizedToHome},
    loadChildren: () => import('./pages/registro-auto/registro-auto.module').then( m => m.RegistroAutoPageModule)
  },
  {
    path: 'pagina-principal',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe: redirectUnauthorizedToHome},
    loadChildren: () => import('./pages/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'reestablecer-pass',
    loadChildren: () => import('./pages/reestablecer-pass/reestablecer-pass.module').then( m => m.ReestablecerPassPageModule)
  },
  {
    path: 'tomar-viaje',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe: redirectUnauthorizedToHome},
    loadChildren: () => import('./pages/tomar-viaje/tomar-viaje.module').then( m => m.TomarViajePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
