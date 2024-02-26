import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationModel } from '../models/PaginationModel';
import { User } from '../models/User';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1/manager';
  private headers: HttpHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.headers = this.authService.getHeaders();
  }

  getAllUsers(): Observable<PaginationModel<User>> {
    console.log(this.headers);
    return this.http.get<PaginationModel<User>>(`${this.baseUrl}/users`, {
      headers: this.headers,
    });
  }
  getById(id: number | null | undefined): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`, {
      headers: this.headers,
    });
  }

  validate(id: number): Observable<boolean> {
    let user: User = {
      id: id,
    };
    return this.http.put<boolean>(`${this.baseUrl}/validate`, user, {
      headers: this.headers,
    });
  }
  refuse(id: number): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/refuse`, id, {
      headers: this.headers,
    });
  }

  deleteUser(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${code}`, {
      headers: this.headers,
    });
  }
}
