import { Component, OnInit } from '@angular/core';
import { Programa } from '../domain/programa.model';
import { ProgramaService } from '../application/programa.service';

@Component({
  standalone: false,
  selector: 'app-programa',
  template: `
    <h2>Programas</h2>
    <ul>
      <li *ngFor="let programa of programas">
        {{ programa.codigo }} - {{ programa.nombre_programa }} - {{ programa.estado }}
      </li>
    </ul>
  `
})
export class ProgramaComponent implements OnInit {
  programas: Programa[] = [];

  constructor(private programaService: ProgramaService) {}

  ngOnInit(): void {
    this.programaService.getAll().subscribe({
      next: (data) => this.programas = data,
      error: (err) => console.error('Error al obtener programas', err)
    });
  }
}