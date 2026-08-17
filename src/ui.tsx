import {EstadoFactura} from './types';
export const money=(n:number)=>new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:0}).format(n);
export const date=(s:string)=>new Intl.DateTimeFormat('es-CL',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(s+'T12:00:00'));
export const labels:Record<EstadoFactura,string>={PENDIENTE:'Enviada a Tesorería',EN_REVISION:'En revisión',OBSERVADA:'Requiere corrección',APROBADA:'Aceptada',RECHAZADA:'Rechazada',PROGRAMADA_PAGO:'Pago programado',PAGADA:'Pagada',VENCIDA:'Vencida'};
export function Badge({status}:{status:EstadoFactura}){return <span className={`badge ${status}`}>{labels[status]}</span>}
export function Empty({children}:{children:React.ReactNode}){return <div className="empty">{children}</div>}
export function Modal({title,onClose,children}:{title:string,onClose:()=>void,children:React.ReactNode}){return <div className="overlay" onMouseDown={onClose}><div className="modal" onMouseDown={e=>e.stopPropagation()}><div className="modal-head"><h2>{title}</h2><button className="icon-btn" onClick={onClose}>×</button></div>{children}</div></div>}
