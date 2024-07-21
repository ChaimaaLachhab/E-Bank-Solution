import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginUserDto} from "../../dto/login-user.dto";
import { RegisterUserDto } from "../../dto/register-user.dto";
import { LoginResponse } from "../../model/login-response/login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'token';

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  signup(registerUser: RegisterUserDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, registerUser);
  }

  login(loginUser: LoginUserDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginUser);
  }
}
