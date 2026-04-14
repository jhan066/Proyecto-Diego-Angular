import { Observable } from 'rxjs';
import { Prestamo } from './prestamo.model';

export abstract class PrestamoRepository {
  abstract getAll(): Observable<Prestamo[]>;
  abstract getById(id: number): Observable<Prestamo>;
  abstract create(prestamo: Prestamo): Observable<Prestamo>;
  abstract update(id: number, prestamo: Prestamo): Observable<Prestamo>;
  abstract delete(id: number): Observable<any>;
}