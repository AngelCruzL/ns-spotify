import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '@modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  sessionError = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.authService.sendCredentials$(email, password).subscribe(
      ({ data, tokenSession }) => {
        this.cookie.set(
          'tokenSession',
          tokenSession,
          environment.cookieExpiresDays,
          '/'
        );
      },
      error => {
        this.sessionError = true;
      }
    );
  }
}
