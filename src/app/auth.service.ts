import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService : CookieService) { }

  login(email: string, password : string) {

    if(email === this.cookieService.get('email') && password === this.cookieService.get('password')) {
      this.cookieService.put('token', 'allow_access');
      return true;
    }
    else {
      console.log('User does not exist');
      return false;
    }
  }

  get token() {
    return this.cookieService.get('token');
  }
}
