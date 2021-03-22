import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './dashboard/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch : 'full'},
  { path: 'signup', component : SignupComponent},
  { path: 'login', component :LoginComponent},
  { path: 'dashboard', canActivate: [AuthGuard], component : DashboardComponent},
  { path: '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
