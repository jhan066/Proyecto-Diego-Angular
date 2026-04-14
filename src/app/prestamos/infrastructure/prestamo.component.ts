import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../domain/prestamo.model';
import { PrestamoService } from '../application/prestamo.service';

@Component({
  standalone: false,
  selector: 'app-prestamo',
  template: `
    <h2>Prestamos</h2>
    <ul>
      <li *ngFor="let prestamo of prestamos">
        {{ prestamo.id_prestamo }} - {{ prestamo.nombre_material }} - 
        {{ prestamo.fecha_prestamo }} - {{ prestamo.estado }}
      </li>
    </ul>
  `
})
export class PrestamoComponent implements OnInit {
  prestamos: Prestamo[] = [];

  constructor(private prestamoService: PrestamoService) {}

  ngOnInit(): void {
    this.prestamoService.getAll().subscribe({
      next: (data) => this.prestamos = data,
      error: (err) => console.error('Error al obtener prestamos', err)
    });
  }
}