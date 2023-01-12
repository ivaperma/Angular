import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    //cuando entre al path carga a sus hijos, que viene de auth.module, cuando cargue en memoria
    //entonces carga el m.AuthModule.
    //Estamos haciendo un LAZYLOAD
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    
  },
   {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
   },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
