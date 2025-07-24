# 🌌 CV Web de Carlos Curiel

Una página de presentación profesional, moderna y completamente responsiva, construida con React y Vite. Este proyecto sirve como portafolio online para mostrar tu perfil como desarrollador web, combinando diseño oscuro, interactividad y una experiencia visual fluida.

---

## 🧩 Descripción del Proyecto

Este CV Web está pensado para desarrolladores/as que deseen mostrar su perfil profesional de forma elegante, destacando:

- Una foto de perfil circular con animación al pasar el cursor.
- Sección “Sobre mí” con texto destacado y animaciones suaves.
- Favicon personalizado y logo con acceso a Home.
- Tarjetas estilizadas para Educación y Habilidades.
- Bloque de contacto con enlaces directos a GitHub, LinkedIn y un botón de WhatsApp.
- Footer coherente con la estética dark, incluyendo derechos de autor.

---

## ✨ Características Principales

### 🎨 Estética & Animaciones

- **Modo Oscuro**: Fondo `#121212` con grises y fucsia `#ff0080` como acento.
- **Animaciones**:
  - Foto de perfil gira 360° al hacer hover.
  - “Sobre mí” aparece con animación `fade-in-up`.
  - Efectos sutiles al pasar por botones o enlaces.

### 🧱 Secciones Destacadas

- **Sobre mí**:

  - Layout en dos columnas: texto + imagen.
  - Texto enriquecido con `span.highlight` para resaltar palabras clave.
  - Botón "Contáctame" con ancla a sección de contacto.

- **Educación**:

  - Bloques verticales con fondo oscuro, sombra y bordes redondeados.

- **Habilidades**:

  - Tarjetas con íconos o texto, alternando colores y con efecto de elevación al pasar el cursor.

- **Contacto**:

  - Íconos clicables: GitHub, LinkedIn y botón verde de WhatsApp (`#25D366`, hover: `#1DA851`).
  - Diseño centrado con `flex`, tanto vertical como horizontal.

- **Footer**:
  - Texto centrado, paleta coherente con el diseño general.

---

## 🛠️ Tecnologías Utilizadas

- **Framework / Bundler**: [Vite](https://vitejs.dev/)
- **Librería principal**: [React](https://reactjs.org/)
- **Lenguajes**: HTML5, CSS3 (Flexbox & Grid), JavaScript ES6+
- **Fuentes**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Control de versiones**: Git + GitHub
- **Editor recomendado**: VS Code

Editor recomendado: Visual Studio Code (con extensiones de linting / formateo para JavaScript / CSS).

## 📁 Estructura del Proyecto

CV/
├─ index.html
├─ vite.config.js
├─ package.json
├─ public/
│ └─ favicon.ico (o carpeta con iconos de favicon)
├─ src/
│ ├─ main.jsx # Punto de entrada (React) o main.js (JS puro)
│ ├─ assets/
│ │ ├─ img/
│ │ │ ├─ perfil.png # Foto de perfil
│ │ │ ├─ 1-7d027107-removebg.png # Logo en esquina (marca de agua)
│ │ │ ├─ whatsappLogo.png # Logo de WhatsApp
│ │ │ └─ (otros iconos: github.svg, linkedin.svg, etc.)
│ │ └─ css/
│ │ └─ styles.css # Estilos globales
│ ├─ components/
│ │ ├─ Navbar.jsx # Componente de navegación
│ │ ├─ WhatsAppButton.jsx # Botón de WhatsApp (opcional en React)
│ │ └─ (otros componentes, si los hay)
│ └─ App.jsx # Componente raíz (opcional)
└─ README.md

Instalación y Ejecución Local
1.- Clonar el repositorio
git clone https://github.com/tuUsuario/tu-repo-cv-web.git
cd tu-repo-cv-web
2.- Instalar dependencias
Si usas React con Vite:
npm install
o con Yarn:
yarn install

3.-Ejecutar en modo desarrollo
npm run dev
o
yarn dev

Esto levantará un servidor local (por defecto en http://localhost:5173 o puerto configurado). Cada vez que guardes cambios en HTML/CSS/JS, Vite recargará la página automáticamente.
