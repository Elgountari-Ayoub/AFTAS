import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from '../models/Competition';
import { PaginationModel } from '../models/PaginationModel';
import { Fish } from '../models/Fish';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class FishService {

  private baseUrl = 'http://localhost:8080/api/v1/fishes';

  private headers: HttpHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.headers = this.authService.getHeaders();
  }


  getAllFishes(): Observable<PaginationModel<Fish>> {
    return this.http.get<PaginationModel<Fish>>(`${this.baseUrl}` ,{ headers: this.headers });
  }
}