export interface Prestamo {
  id_prestamo?: number;
  id_solicitud: number;
  fecha_prestamo: string;
  fecha_devolucion_esperada: string;
  fecha_devolucion_real?: string;
  entregado_por: string;
  id_recibido_por: number;
  estado?: string;
  nombre_material?: string;
  recibido_por?: string;
}