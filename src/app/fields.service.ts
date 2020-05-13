import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor(private http: HttpClient) { }

  getResult(empDetails): Observable<any> {
    return this.http.post<any>('http://localhost:8080/getExamResult', empDetails);
  }
}
