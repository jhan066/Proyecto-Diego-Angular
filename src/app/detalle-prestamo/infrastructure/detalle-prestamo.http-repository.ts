import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallePrestamo } from '../domain/detalle-prestamo.model';
import { DetallePrestamoRepository } from '../domain/detalle-prestamo.repository';

@Injectable({
  providedIn: 'root'
})
export class DetallePrestamoHttpRepository extends DetallePrestamoRepository {
  private apiUrl = 'http://localhost:3000/detalle-prestamo';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<DetallePrestamo[]> {
    return this.http.get<DetallePrestamo[]>(this.apiUrl);
  }

  getById(id: number): Observable<DetallePrestamo> {
    return this.http.get<DetallePrestamo>(`${this.apiUrl}/${id}`);
  }

  create(detalle: DetallePrestamo): Observable<DetallePrestamo> {
    return this.http.post<DetallePrestamo>(this.apiUrl, detalle);
  }

  update(id: number, detalle: DetallePrestamo): Observable<DetallePrestamo> {
    return this.http.put<DetallePrestamo>(`${this.apiUrl}/${id}`, detalle);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}