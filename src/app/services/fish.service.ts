import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from '../models/Competition';
import { PaginationModel } from '../models/PaginationModel';
import { Fish } from '../models/Fish';


@Injectable({
  providedIn: 'root'
})
export class FishService {

  private baseUrl = 'http://localhost:8080/api/v1/fishes';

  constructor(private http: HttpClient) { }

  getAllFishes(): Observable<PaginationModel<Fish>> {
    return this.http.get<PaginationModel<Fish>>(`${this.baseUrl}`);
  }
}