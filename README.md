Descripción del Proyecto:
Este CV Web es una página de presentación profesional que combina un diseño oscuro, tipografía legible y elementos interactivos para brindar una experiencia de usuario moderna. Está pensada para desarrolladores web que desean mostrar:

Una foto de perfil circular con animación al pasar el cursor.

Una sección “Sobre mí” con texto destacado y animaciones suaves.

Un menú de navegación (Navbar) sticky en la parte superior, con enlaces a cada sección (Sobre mí, Estudios, Habilidades, Contacto).

Un favicon personalizado y un pequeño logo en la esquina (que redirige a Home).

Secciones de Educación y Habilidades estilizadas como tarjetas.

Un bloque de Contacto con enlaces a redes sociales (GitHub, LinkedIn, WhatsApp) y un botón directo para iniciar chat en WhatsApp.

Un footer con derechos de autor, manteniendo la coherencia en la paleta de colores oscuros.

El objetivo es presentar la información de manera concisa, con un diseño responsivo que se adapte a pantallas de escritorio y dispositivos móviles.

Características Principales
Diseño Dark Mode: Fondo oscuro (#121212), con secciones de gris/negro alternadas y detalles en color fucsia (#ff0080).

Navbar Sticky: Barra de navegación fija en la parte superior que resalta el enlace activo con una línea fucsia.

Animaciones CSS:

La foto de perfil rota 360° al pasar el cursor.

La sección “Sobre mí” aparece con animación de desvanecimiento y desplazamiento (fadeInUp).

Hover minimalista en enlaces del nav y botones resaltados con cambio de fondo gris oscuro.

Favicon & Logo: Conjunto de íconos para favicon (16×16, 32×32, 180×180, .ico) y un logo circular en la esquina inferior derecha como marca de agua (opacidad baja).

Sección “Sobre mí”:

Estructura en dos columnas (texto + foto).

Texto con fragmentos destacados con span.highlight.

Botón “Contáctame” que enlaza a la sección de Contacto.

Sección “Educación”: Lista vertical de bloques con fondo gris oscuro, bordes redondeados y sombra.

Sección “Habilidades”: Tarjetas con íconos (o texto), fondo alterno y efecto hover de elevación.

Sección “Contacto”:

Iconos de GitHub, LinkedIn y botón de WhatsApp.

Botón de WhatsApp (btn-whatsapp) con color oficial #25D366 y hover #1DA851.

Los enlaces se alinean vertical y horizontalmente usando flex.

Footer: Texto centrado con derechos de autor y estilo coherente con el tema oscuro.

Tecnologías Utilizadas
Framework / Bundler: Vite (configuración mínima para React).

Librería UI: React (para componentes, en caso de usarse).

Lenguajes: HTML5, CSS3 moderno (Flexbox, Grid), JavaScript ES6+.

Tipografía: Inter (Google Fonts).

Control de versiones: Git / GitHub.

Editor recomendado: Visual Studio Code (con extensiones de linting / formateo para JavaScript / CSS).


Estructura de Carpetas
CV/
├─ index.html
├─ vite.config.js
├─ package.json
├─ public/
│  └─ favicon.ico   (o carpeta con iconos de favicon)
├─ src/
│  ├─ main.jsx            # Punto de entrada (React) o main.js (JS puro)
│  ├─ assets/
│  │  ├─ img/
│  │  │  ├─ perfil.png               # Foto de perfil
│  │  │  ├─ 1-7d027107-removebg.png  # Logo en esquina (marca de agua)
│  │  │  ├─ whatsappLogo.png         # Logo de WhatsApp
│  │  │  └─ (otros iconos: github.svg, linkedin.svg, etc.)
│  │  └─ css/
│  │     └─ styles.css                # Estilos globales
│  ├─ components/
│  │  ├─ Navbar.jsx                   # Componente de navegación
│  │  ├─ WhatsAppButton.jsx           # Botón de WhatsApp (opcional en React)
│  │  └─ (otros componentes, si los hay)
│  └─ App.jsx                         # Componente raíz (opcional)
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

