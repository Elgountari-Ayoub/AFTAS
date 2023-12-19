import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from '../models/Member';
import { PaginationModel } from '../models/PaginationModel';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://localhost:8080/api/v1/members';

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<PaginationModel<Member>> {
    return this.http.get<PaginationModel<Member>>(`${this.baseUrl}`);
  }

  getMemberByNumber(num: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/${num}`);
  }

  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}`, member);
  }

  updateMember(num: number, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/${num}`, member);
  }

  deleteMember(num: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${num}`);
  }

}
