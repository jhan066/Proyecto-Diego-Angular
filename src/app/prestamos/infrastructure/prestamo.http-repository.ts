import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../domain/prestamo.model';
import { PrestamoRepository } from '../domain/prestamo.repository';

@Injectable({
  providedIn: 'root'
})
export class PrestamoHttpRepository extends PrestamoRepository {
  private apiUrl = 'http://localhost:3000/prestamos';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  getById(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`${this.apiUrl}/${id}`);
  }

  create(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }

  update(id: number, prestamo: Prestamo): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.apiUrl}/${id}`, prestamo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}