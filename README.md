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

- **Colores:**
  - Primario: `#0F172A`
  - Secundario: `#2563EB`
  - Acento: `#22C55E`
  - Fondo: `#F8FAFC`
  - Texto: `#020617`

- **Tipografía:** Inter (Google Fonts)

- **Enfoque:** Mobile-first, responsive, mucho espacio en blanco

## 📄 Páginas

- `/` - Landing page principal
- `/privacy` - Política de privacidad y términos

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

