import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../domain/solicitud.model';
import { SolicitudService } from '../application/solicitud.service';

@Component({
  selector: 'app-solicitud',
  template: `
    <h2>Solicitudes</h2>
    <ul>
      <li *ngFor="let solicitud of solicitudes">
        {{ solicitud.id_solicitud }} - {{ solicitud.nombre_aprendiz }} - 
        {{ solicitud.nombre_material }} - {{ solicitud.cantidad }} - 
        {{ solicitud.estado }}
      </li>
    </ul>
  `
})
export class SolicitudComponent implements OnInit {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.solicitudService.getAll().subscribe({
      next: (data) => this.solicitudes = data,
      error: (err) => console.error('Error al obtener solicitudes', err)
    });
  }
}