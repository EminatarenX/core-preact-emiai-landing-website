# EMI - Landing Page

Landing page profesional para EMI, una plataforma de agentes conversacionales por WhatsApp para negocios.

## 🚀 Tecnologías

- **Preact** - Framework JavaScript ligero y rápido
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de utilidades CSS
- **Preact Router** - Enrutamiento del lado del cliente

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
emiaisolutions-client/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   └── Privacy.jsx
│   ├── app.jsx          # Componente raíz con router
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales con Tailwind
├── index.html
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
└── vite.config.js       # Configuración de Vite
```

## 🎨 Diseño

El diseño sigue principios minimalistas inspirados en Stripe, Linear y Vercel:

- **Colores:** `ink` (texto y banda oscura), `paper` (fondo), `line` (bordes) y `sky` (acento), en `tailwind.config.js`.

- **Tipografía:** Fraunces (títulos) y Outfit (texto), servidas localmente desde `public/fonts/`.

- **Enfoque:** Mobile-first, responsive, mucho espacio en blanco

## 📄 Páginas

- `/` - Sitio de EmiCorp con una sección por app (Emi y Eko)
- `/legal` - Índice de documentos legales por app

Los documentos legales son HTML estáticos en `public/` (Meta los lee sin JavaScript):

| App | Privacidad | Términos |
|-----|------------|----------|
| Emi | `/privacy` | `/terms` |
| Eko | `/eko/privacy` | `/eko/terms` |

**No cambies las URLs de Emi (`/privacy`, `/terms`)**: están registradas en la app de Meta de Emi AI. Las rutas se declaran en `public/_redirects`, antes del `/*` del SPA.

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el frontend estático.

### Personalización

Los colores y estilos se pueden modificar en `tailwind.config.js`.

## 📝 Notas

- El proyecto está optimizado para producción
- No incluye backend ni autenticación
- Compatible con políticas de Meta y WhatsApp Business
- Listo para desplegar en cualquier hosting estático (Vercel, Netlify, etc.)

