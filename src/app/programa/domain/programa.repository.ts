import { Observable } from 'rxjs';
import { Programa } from './programa.model';

export abstract class ProgramaRepository {
  abstract getAll(): Observable<Programa[]>;
  abstract getById(id: number): Observable<Programa>;
  abstract create(programa: Programa): Observable<Programa>;
  abstract update(id: number, programa: Programa): Observable<Programa>;
  abstract delete(id: number): Observable<any>;
}