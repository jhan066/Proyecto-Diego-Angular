export interface Solicitud {
  id_solicitud?: number;
  id_aprendiz: number;
  codigo_material: string;
  id_ficha: number;
  cantidad: number;
  fecha?: string;
  estado?: string;
  nombre_aprendiz?: string;
  nombre_material?: string;
  numero_ficha?: string;
}