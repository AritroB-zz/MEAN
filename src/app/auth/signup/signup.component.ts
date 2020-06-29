import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;

  constructor(public authService: AuthService, private router: Router) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      console.log("incorrect form");
      return;
    }
    this.isLoading = true;
    console.log("isLoading is true");
    this.authService.createUser(form.value.email, form.value.password);
    this.router.navigate(['/login']);
  }
}
