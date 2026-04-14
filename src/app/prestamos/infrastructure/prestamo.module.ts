import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrestamoComponent } from './prestamo.component';
import { PrestamoRoutingModule } from './prestamo.routes';
import { PrestamoRepository } from '../domain/prestamo.repository';
import { PrestamoHttpRepository } from './prestamo.http-repository';
import { PrestamoService } from '../application/prestamo.service';

@NgModule({
  declarations: [PrestamoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PrestamoRoutingModule
  ],
  providers: [
    PrestamoService,
    {
      provide: PrestamoRepository,
      useClass: PrestamoHttpRepository
    }
  ]
})
export class PrestamoModule {}