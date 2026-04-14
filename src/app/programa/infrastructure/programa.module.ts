import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProgramaComponent } from './programa.component';
import { ProgramaRoutingModule } from './programa.routes';
import { ProgramaRepository } from '../domain/programa.repository';
import { ProgramaHttpRepository } from './programa.http-repository';
import { ProgramaService } from '../application/programa.service';

@NgModule({
  declarations: [ProgramaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProgramaRoutingModule
  ],
  providers: [
    ProgramaService,
    {
      provide: ProgramaRepository,
      useClass: ProgramaHttpRepository
    }
  ]
})
export class ProgramaModule {}