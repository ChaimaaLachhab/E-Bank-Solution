import { Component } from '@angular/core';
import { AuthService } from "../../core/service/auth/auth-service.service";
import {Router, RouterOutlet} from '@angular/router';
import { RegisterUserDto } from "../../core/dto/register-user.dto";
import {FormsModule} from "@angular/forms";
import {OverlayService} from "../../core/service/overlay/overlay.service";
import {LoginUserDto} from "../../core/dto/login-user.dto";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet
  ],
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  fullName: string = '';

  constructor(private overlayService: OverlayService, private authService: AuthService, private router: Router) {}

  register() {
    const registerUser : RegisterUserDto = new RegisterUserDto(this.email, this.password, this.fullName);
    const loginUser:LoginUserDto = new LoginUserDto(this.email, this.password);
    this.authService.signup(registerUser).subscribe(
      {
        next: (response) => {
          console.log('Registration successful:', response);
          this.overlayService.hide();
          this.authService.login(loginUser).subscribe(
            {
              next: (response) => {
                console.log('Login successful:', response);
                localStorage.setItem('token', response.token);
                console.log('Token expires in:', response.expiresIn);
                this.overlayService.hide();
                this.router.navigate(['/dashboard']);
              },
              error: (err) => {
                console.error('Login failed:', err);
              },
              complete: () => {
                console.log('You are login successfully.');
              }
            }
          );
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
}
