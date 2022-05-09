import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './oidc/guards/auth.guard';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'protected',
        component:ProtectedComponent
      }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
