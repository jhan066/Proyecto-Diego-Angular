import { Observable } from 'rxjs';
import { DetallePrestamo } from './detalle-prestamo.model';

export abstract class DetallePrestamoRepository {
  abstract getAll(): Observable<DetallePrestamo[]>;
  abstract getById(id: number): Observable<DetallePrestamo>;
  abstract create(detalle: DetallePrestamo): Observable<DetallePrestamo>;
  abstract update(id: number, detalle: DetallePrestamo): Observable<DetallePrestamo>;
  abstract delete(id: number): Observable<any>;
}