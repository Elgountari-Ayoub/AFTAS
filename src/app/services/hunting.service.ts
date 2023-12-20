import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from '../models/Member';
import { PaginationModel } from '../models/PaginationModel';
import { Hunting } from '../models/Hunting';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  private baseUrl = 'http://localhost:8080/api/v1/huntings';

  constructor(private http: HttpClient) {}


  save(hunting: Hunting): Observable<void> {
    console.log(hunting);
    
    return this.http.post<void>(`${this.baseUrl}`, hunting);
  }
}
