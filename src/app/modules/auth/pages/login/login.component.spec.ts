import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return "invalid" when the form don\'t pass the validation', () => {
    const mockCredentials = {
      email: 'this is not an email',
      password: '123'
    };
    const emailFormValue = component.loginForm.get('email');
    const passwordFormValue = component.loginForm.get('password');

    emailFormValue?.setValue(mockCredentials.email);
    passwordFormValue?.setValue(mockCredentials.password);

    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should return "valid" when the form pass the validation', () => {
    const mockCredentials = {
      email: 'me@angelcruzl.dev',
      password: '123456'
    };
    const emailFormValue = component.loginForm.get('email');
    const passwordFormValue = component.loginForm.get('password');

    emailFormValue?.setValue(mockCredentials.email);
    passwordFormValue?.setValue(mockCredentials.password);

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should render the login button with the text "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const innerText = elementRef.nativeElement.innerText;

    expect(innerText).toEqual('Iniciar sesión');
  });
});
