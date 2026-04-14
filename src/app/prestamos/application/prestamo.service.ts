import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../domain/prestamo.model';
import { PrestamoRepository } from '../domain/prestamo.repository';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  constructor(private prestamoRepository: PrestamoRepository) {}

  getAll(): Observable<Prestamo[]> {
    return this.prestamoRepository.getAll();
  }

  getById(id: number): Observable<Prestamo> {
    return this.prestamoRepository.getById(id);
  }

  create(prestamo: Prestamo): Observable<Prestamo> {
    return this.prestamoRepository.create(prestamo);
  }

  update(id: number, prestamo: Prestamo): Observable<Prestamo> {
    return this.prestamoRepository.update(id, prestamo);
  }

  delete(id: number): Observable<any> {
    return this.prestamoRepository.delete(id);
  }
}