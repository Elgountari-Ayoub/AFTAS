import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from '../models/Competition';
import { PaginationModel } from '../models/PaginationModel';

interface RankingDTO {
}

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8080/api/v1/competitions';

  constructor(private http: HttpClient) { }

  getAllCompetitions(): Observable<PaginationModel<Competition>> {
    return this.http.get<PaginationModel<Competition>>(`${this.baseUrl}`);
  }

  getCompetitionByCode(code: string): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/${code}`);
  }

  createCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(`${this.baseUrl}`, competition);
  }

  updateCompetition(code: string, competition: Competition): Observable<Competition> {
    return this.http.put<Competition>(`${this.baseUrl}/${code}`, competition);
  }

  deleteCompetition(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${code}`);
  }

  getCompetitionMembers(code: string): Observable<RankingDTO> {
    return this.http.get<RankingDTO>(`${this.baseUrl}/${code}/members`);
  }

  getPassedCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.baseUrl}/passed`);
  }

  getTodayCompetition(): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/today`);
  }

  getUpcomingCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.baseUrl}/upcoming`);
  }

  joinCompetition(rankingDTO: RankingDTO): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/join`, rankingDTO).pipe(
      catchError((error) => {
        console.error('Error joining competition:', error);
        throw error;
      })
    );
  }
}
