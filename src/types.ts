export type EstadoFactura='PENDIENTE'|'EN_REVISION'|'OBSERVADA'|'APROBADA'|'RECHAZADA'|'PROGRAMADA_PAGO'|'PAGADA'|'VENCIDA';
export type RolUsuario='SOLICITANTE'|'TESORERIA'|'ADMIN';
export interface Historial {id:string;fecha:string;usuario:string;accion:string;comentario?:string;estadoAnterior?:EstadoFactura;estadoNuevo?:EstadoFactura}
export interface Factura {id:string;proveedor:string;rutProveedor:string;folio:string;fechaEmision:string;fechaVencimiento:string;montoNeto:number;iva:number;montoTotal:number;moneda:'CLP'|'UF'|'USD';estado:EstadoFactura;areaResponsable:string;centroCosto:string;responsable:string;archivoFacturaUrl?:string;archivoXmlUrl?:string;comprobantePagoUrl?:string;observacion?:string;historial:Historial[]}
export interface Proveedor {id:string;nombre:string;rut:string;correo:string;banco:string;tipoCuenta:string;numeroCuenta:string;activo:boolean}
