export interface DetallePrestamo {
  id_detalle_prestamo?: number;
  id_prestamo: number;
  id_material: number;
  cantidad_prestada: number;
  estado_material: string;
}