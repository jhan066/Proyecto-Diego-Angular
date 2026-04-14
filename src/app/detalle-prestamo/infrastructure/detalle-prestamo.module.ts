import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetallePrestamoComponent } from './detalle-prestamo.component';
import { DetallePrestamoRoutingModule } from './detalle-prestamo.routes';
import { DetallePrestamoRepository } from '../domain/detalle-prestamo.repository';
import { DetallePrestamoHttpRepository } from './detalle-prestamo.http-repository';
import { DetallePrestamoService } from '../application/detalle-prestamo.service';

@NgModule({
  declarations: [DetallePrestamoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DetallePrestamoRoutingModule
  ],
  providers: [
    DetallePrestamoService,
    {
      provide: DetallePrestamoRepository,
      useClass: DetallePrestamoHttpRepository
    }
  ]
})
export class DetallePrestamoModule {}