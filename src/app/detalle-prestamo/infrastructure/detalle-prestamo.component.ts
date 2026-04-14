import { Component, OnInit } from '@angular/core';
import { DetallePrestamo } from '../domain/detalle-prestamo.model';
import { DetallePrestamoService } from '../application/detalle-prestamo.service';

@Component({
  selector: 'app-detalle-prestamo',
  template: `
    <h2>Detalle de Prestamos</h2>
    <ul>
      <li *ngFor="let detalle of detalles">
        {{ detalle.id_detalle_prestamo }} - {{ detalle.id_prestamo }} - 
        {{ detalle.cantidad_prestada }} - {{ detalle.estado_material }}
      </li>
    </ul>
  `
})
export class DetallePrestamoComponent implements OnInit {
  detalles: DetallePrestamo[] = [];

  constructor(private detallePrestamoService: DetallePrestamoService) {}

  ngOnInit(): void {
    this.detallePrestamoService.getAll().subscribe({
      next: (data) => this.detalles = data,
      error: (err) => console.error('Error al obtener detalles de prestamo', err)
    });
  }
}