import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from '../models/Member';
import { PaginationModel } from '../models/PaginationModel';
import { Hunting } from '../models/Hunting';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private baseUrl = 'http://localhost:8080/api/v1/huntings';


  private headers: HttpHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.headers = this.authService.getHeaders();
  }


  save(hunting: Hunting): Observable<void> {
    console.log(hunting);
    
    return this.http.post<void>(`${this.baseUrl}` ,{}, { headers: this.headers });
  }
}
