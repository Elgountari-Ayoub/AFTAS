import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationModel } from '../models/PaginationModel';
import { User } from '../models/User';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
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
    return this.http.get<PaginationModel<User>>(`${this.baseUrl}/users`, { headers: this.headers });
  }

  validate(id: number, isAccepted: boolean): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/validate`, id, { headers: this.headers });
  }
  refuse(id: number, isAccepted: boolean): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/refuse`, id, { headers: this.headers });
  }

  deleteUser(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${code}`, { headers: this.headers });
  }
}