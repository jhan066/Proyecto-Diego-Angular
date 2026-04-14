import { Observable } from 'rxjs';
import { Solicitud } from './solicitud.model';

export abstract class SolicitudRepository {
  abstract getAll(): Observable<Solicitud[]>;
  abstract getById(id: number): Observable<Solicitud>;
  abstract create(solicitud: Solicitud): Observable<Solicitud>;
  abstract update(id: number, solicitud: Solicitud): Observable<Solicitud>;
  abstract delete(id: number): Observable<any>;
}