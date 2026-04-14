import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programa } from '../domain/programa.model';
import { ProgramaRepository } from '../domain/programa.repository';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  constructor(private programaRepository: ProgramaRepository) {}

  getAll(): Observable<Programa[]> {
    return this.programaRepository.getAll();
  }

  getById(id: number): Observable<Programa> {
    return this.programaRepository.getById(id);
  }

  create(programa: Programa): Observable<Programa> {
    return this.programaRepository.create(programa);
  }

  update(id: number, programa: Programa): Observable<Programa> {
    return this.programaRepository.update(id, programa);
  }

  delete(id: number): Observable<any> {
    return this.programaRepository.delete(id);
  }
}