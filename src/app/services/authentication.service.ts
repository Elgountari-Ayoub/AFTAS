import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/Auth';
import { JwtAuthenticationResponse } from '../models/JwtAuthenticationResponse';
import { SigninRequest } from '../models/SigninRequest';
import { SignUpRequest } from '../models/SignUpRequest';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private singUpUrl = 'http://localhost:8080/api/v1/auth/signup';
  private signInUrl = 'http://localhost:8080/api/v1/auth/signin';

  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = this.headers.set('Authorization', `Bearer ${token ? token : ''}`);
    this.headers = this.headers.append('Content-Type', 'application/json');


  }
  signUp(signUpRequest: SignUpRequest): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(
      `${this.singUpUrl}`,
      signUpRequest
    );
  }

  signIn(signInRequest: SigninRequest): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(
      `${this.signInUrl}`,
      signInRequest
    );
  }

  getAuthUser(): Auth | null {
    const token = this.getAuthToken();

    if (!token) return null;
    
    const auth: any = jwtDecode(token);
    console.log(auth);
    
    const authObj: Auth = {
      id: auth.id,
      name: auth.name,
      email: auth.sub,
      role: auth.role,
      password: auth.password,
    };
    return authObj;
  }

  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
    this.headers = this.headers.set('Authorization', `Bearer ${token ? token : ''}`);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  clearAuthToken(): void {
    window.localStorage.removeItem('token');
  }

  appendHeader(name: string, value: string): void {
    this.headers = this.headers.append(name, value);
  }
  setHeader(name: string, value: string): void {
    this.headers = this.headers.set(name, value);
  }
  getHeader(name: string): HttpHeaders {
    this.headers.get(name)
    return new HttpHeaders().set(name, this.headers.get(name) || '');
  }
  deleteHeader(name: string, value: string): void {
    this.headers = this.headers.delete(name, value);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  getHeaders(): HttpHeaders {
    return this.headers;
  }
}
