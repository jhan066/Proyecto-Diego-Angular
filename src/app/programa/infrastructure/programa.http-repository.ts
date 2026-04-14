import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from '../domain/programa.model';
import { ProgramaRepository } from '../domain/programa.repository';

@Injectable({
  providedIn: 'root'
})
export class ProgramaHttpRepository extends ProgramaRepository {
  private apiUrl = 'http://localhost:3000/programas';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Programa[]> {
    return this.http.get<Programa[]>(this.apiUrl);
  }

  getById(id: number): Observable<Programa> {
    return this.http.get<Programa>(`${this.apiUrl}/${id}`);
  }

  create(programa: Programa): Observable<Programa> {
    return this.http.post<Programa>(this.apiUrl, programa);
  }

  update(id: number, programa: Programa): Observable<Programa> {
    return this.http.put<Programa>(`${this.apiUrl}/${id}`, programa);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}