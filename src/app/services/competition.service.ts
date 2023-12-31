import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from '../models/Competition';
import { PaginationModel } from '../models/PaginationModel';
import { Ranking } from '../models/Ranking';
import { RankingId } from '../models/RankingId';
import { CompetitionRankings } from '../models/CompetitionRankings';


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

  getCompetitionMembers(code: string): Observable<CompetitionRankings> {
    return this.http.get<CompetitionRankings>(`${this.baseUrl}/${code}/members`);
  }

  getPassedCompetitions():  Observable<PaginationModel<Competition>> {
    return this.http.get<PaginationModel<Competition>>(`${this.baseUrl}/passed`);
  }

  getTodayCompetition(): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/today`);
  }

  getUpcomingCompetitions(): Observable<PaginationModel<Competition>> {
    return this.http.get<PaginationModel<Competition>>(`${this.baseUrl}/upcoming`);
  }

  joinCompetition(ranking: Ranking): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/join`, ranking).pipe(
      catchError((error) => {
        console.error('Error joining competition:', error);
        throw error;
      })
    );
  }
}
