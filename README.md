# BK Facturas

Maqueta frontend para el ingreso y seguimiento interno de facturas entre áreas solicitantes y Tesorería.

## Funcionalidades

- Portal diferenciado para Área solicitante, Tesorería y Administrador.
- Ingreso simulado de facturas y documentos.
- Bandeja con búsqueda, filtros y estados.
- Solicitud de correcciones y reenvío a Tesorería.
- Programación y registro simulado de pagos.
- Historial de seguimiento por factura.
- Datos locales de demostración, sin backend.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`.

## Despliegue

En Vercel, Netlify o un servicio equivalente:

- Build command: `npm run build`
- Output directory: `dist`

En AWS, el contenido de `dist/` puede publicarse en S3 y distribuirse mediante CloudFront. La aplicación usa React Router, por lo que el hosting debe redirigir rutas desconocidas a `index.html`.

La maqueta también se publica automáticamente mediante GitHub Pages:

<https://igozze.github.io/invoice/>

## Alcance

Esta versión es una maqueta. Los cambios se mantienen solo en memoria y se reinician al recargar. No incluye autenticación, base de datos, almacenamiento real de archivos ni API.
