import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { CanActivate } from "@angular/router";
import { CookieService } from "ngx-cookie";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService : AuthService,
               private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
        if( this.authService.token)
            return true;
        this.router.navigate(['/login']);
  }
}
