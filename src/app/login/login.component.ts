import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allowAccess : boolean = false;
  message: string ='';

  constructor( private authService : AuthService,
               private router : Router) { }

  ngOnInit() {
  }

  onLogin(form : NgForm) {
    this.allowAccess = this.authService.login(form.value.email, form.value.password);
    form.reset();
    if( this.allowAccess) {
      this.router.navigate(['/dashboard']);
    }
    else
      this.message = "User does not exist"
  }

  onHandleError() {
    this.message = null;
  }
}
