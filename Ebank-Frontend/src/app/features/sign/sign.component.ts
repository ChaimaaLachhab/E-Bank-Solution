import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from "../../core/service/auth/auth-service.service";
import { Router, RouterOutlet } from '@angular/router';
import { RegisterUserDto } from "../../core/dto/register-user.dto";
import { LoginUserDto } from "../../core/dto/login-user.dto";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-sign',
  standalone: true,
  templateUrl: './sign.component.html',
  imports: [
    FormsModule,
    RouterOutlet
  ],
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements AfterViewInit {
  // Registration fields
  registerEmail: string = '';
  registerPassword: string = '';
  registerFullName: string = '';

  // Login fields
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");

    sign_up_btn?.addEventListener("click", () => {
      container?.classList.add("sign-up-mode");
    });

    sign_in_btn?.addEventListener("click", () => {
      container?.classList.remove("sign-up-mode");
    });

    sign_up_btn2?.addEventListener("click", () => {
      container?.classList.add("sign-up-mode2");
    });

    sign_in_btn2?.addEventListener("click", () => {
      container?.classList.remove("sign-up-mode2");
    });
  }

  register() {
    const registerUser: RegisterUserDto = new RegisterUserDto(this.registerEmail, this.registerPassword, this.registerFullName);
    this.authService.signup(registerUser).subscribe(
      {
        next: (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
        },
        complete: () => {
          console.log('Registration process completed.');
        }
      }
    );
  }

  login() {
    const loginUser: LoginUserDto = new LoginUserDto(this.loginEmail, this.loginPassword);
    this.authService.login(loginUser).subscribe(
      {
        next: (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token);
          console.log('Token expires in:', response.expiresIn);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Login failed:', err);
        },
        complete: () => {
          console.log('You are logged in successfully.');
        }
      }
    );
  }
}
