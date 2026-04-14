import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePrestamoComponent } from './detalle-prestamo.component';

const routes: Routes = [
  { path: 'detalle-prestamo', component: DetallePrestamoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePrestamoRoutingModule {}