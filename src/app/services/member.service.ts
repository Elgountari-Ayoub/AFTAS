import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from '../models/Member';
import { PaginationModel } from '../models/PaginationModel';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:8080/api/v1/members';

  
  private headers: HttpHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.headers = this.authService.getHeaders();
  }

  getAllMembers(): Observable<PaginationModel<Member>> {
    return this.http.get<PaginationModel<Member>>(`${this.baseUrl}` ,{ headers: this.headers });
  }

  getMemberByNumber(num: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/${num}`,{ headers: this.headers });
  }

  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}`, member,{ headers: this.headers });
  }

  updateMember(num: number, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/${num}`, member,{ headers: this.headers });
  }

  deleteMember(num: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${num}`,{ headers: this.headers });
  }

}
