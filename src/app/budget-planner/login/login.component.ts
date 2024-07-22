import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  toggleForm(form: 'login' | 'register' ) {
    this.activeForm = form;
  }
  login(){
    // login logic
    if (this.loginForm.valid) {
      console.log(this.loginForm.value, "login form value");
      this.router.navigate(['/budget-planner/dashboard']);
    }else{
      this.snackBar.open('Invalid email or password', 'Close', { duration: 3000 });
    }
  }

  //register
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value, "register form value");
      this.router.navigate(['/budget-planner/dashboard']);
    }else{
      this.snackBar.open('Invalid email or password', 'Close', { duration: 3000 });
    }
  }
}
