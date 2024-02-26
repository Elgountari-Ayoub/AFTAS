import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from '../models/Competition';
import { PaginationModel } from '../models/PaginationModel';
import { Ranking } from '../models/Ranking';
import { RankingId } from '../models/RankingId';
import { CompetitionRankings } from '../models/CompetitionRankings';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private baseUrl = 'http://localhost:8080/api/v1/competitions';
  private headers: HttpHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.headers = this.authService.getHeaders();
  }



  getAllCompetitions(): Observable<PaginationModel<Competition>> {
    console.log(this.headers);
    return this.http.get<PaginationModel<Competition>>(`${this.baseUrl}`,{ headers: this.headers });
  }

  getCompetitionByCode(code: string): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/${code}`,{ headers: this.headers });
  }

  createCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(`${this.baseUrl}`, competition,{ headers: this.headers });
  }

  updateCompetition(code: string, competition: Competition): Observable<Competition> {
    return this.http.put<Competition>(`${this.baseUrl}/${code}`, competition,{ headers: this.headers });
  }

  deleteCompetition(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${code}`,{ headers: this.headers });
  }

  getCompetitionMembers(code: string): Observable<CompetitionRankings> {
    return this.http.get<CompetitionRankings>(`${this.baseUrl}/${code}/members`,{ headers: this.headers });
  }

  getPassedCompetitions(): Observable<PaginationModel<Competition>> {
    return this.http.get<PaginationModel<Competition>>(`${this.baseUrl}/passed`,{ headers: this.headers });
  }

  getTodayCompetition(): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/today`,{ headers: this.headers });
  }

  getUpcomingCompetitions(): Observable<PaginationModel<Competition>> {
    return this.http.get<PaginationModel<Competition>>(`${this.baseUrl}/upcoming`,{ headers: this.headers });
  }

  joinCompetition(ranking: Ranking): Observable<void> {
    alert(ranking.id?.competitionCode + '' + ranking.id?.memberId);
    return this.http.post<void>(`${this.baseUrl}/join`, ranking,{ headers: this.headers }).pipe(
      catchError((error) => {
        console.error('Error joining competition:', error);
        throw error;
      })
    ); 
  }
}
