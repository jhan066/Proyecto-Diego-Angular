import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudRoutingModule } from './solicitud.routes';
import { SolicitudRepository } from '../domain/solicitud.repository';
import { SolicitudHttpRepository } from './solicitud.http-repository';
import { SolicitudService } from '../application/solicitud.service';

@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SolicitudRoutingModule
  ],
  providers: [
    SolicitudService,
    {
      provide: SolicitudRepository,
      useClass: SolicitudHttpRepository
    }
  ]
})
export class SolicitudModule {}