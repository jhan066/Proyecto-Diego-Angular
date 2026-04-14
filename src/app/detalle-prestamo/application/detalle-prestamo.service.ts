import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePrestamo } from '../domain/detalle-prestamo.model';
import { DetallePrestamoRepository } from '../domain/detalle-prestamo.repository';

@Injectable({
  providedIn: 'root'
})
export class DetallePrestamoService {
  constructor(private detallePrestamoRepository: DetallePrestamoRepository) {}

  getAll(): Observable<DetallePrestamo[]> {
    return this.detallePrestamoRepository.getAll();
  }

  getById(id: number): Observable<DetallePrestamo> {
    return this.detallePrestamoRepository.getById(id);
  }

  create(detalle: DetallePrestamo): Observable<DetallePrestamo> {
    return this.detallePrestamoRepository.create(detalle);
  }

  update(id: number, detalle: DetallePrestamo): Observable<DetallePrestamo> {
    return this.detallePrestamoRepository.update(id, detalle);
  }

  delete(id: number): Observable<any> {
    return this.detallePrestamoRepository.delete(id);
  }
}