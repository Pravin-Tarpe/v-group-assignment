import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  message : string;

  constructor( private cookieService : CookieService ) { }

  ngOnInit() {
  }

  onSubmit( form : NgForm) {

    if(form.value.password === form.value.confirmPassword) {

      this.cookieService.put('firstname', form.value.firstname);
      this.cookieService.put('lastname', form.value.lastname);
      this.cookieService.put('email', form.value.email);
      this.cookieService.put('password', form.value.password);
      this.cookieService.put('confirmPassword', form.value.confirmPassword);
      this.message ="User created successfully";

    }
    else{
      this.message = "password and confirm password does not match";
      form.reset();
    }
  }
}

