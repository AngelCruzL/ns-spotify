import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '@modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  sessionError = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
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
