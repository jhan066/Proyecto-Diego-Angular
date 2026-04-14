import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../domain/solicitud.model';
import { SolicitudRepository } from '../domain/solicitud.repository';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  constructor(private solicitudRepository: SolicitudRepository) {}

  getAll(): Observable<Solicitud[]> {
    return this.solicitudRepository.getAll();
  }

  getById(id: number): Observable<Solicitud> {
    return this.solicitudRepository.getById(id);
  }

  create(solicitud: Solicitud): Observable<Solicitud> {
    return this.solicitudRepository.create(solicitud);
  }

  update(id: number, solicitud: Solicitud): Observable<Solicitud> {
    return this.solicitudRepository.update(id, solicitud);
  }

  delete(id: number): Observable<any> {
    return this.solicitudRepository.delete(id);
  }
}