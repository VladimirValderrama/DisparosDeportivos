# DisparosDeportivos
Sitio web dinámico con JavaScript de portafolio y venta de fotografías deportivas. 
Permite a los usuarios explorar galerías de imágenes, contactar al fotógrafo y solicitar servicios personalizados.


# 🛠️ Tecnologías utilizadas
    Frontend: HTML, CSS, JavaScript, Bootstrap 5
    Backend: Node.js con Express
    Base de Datos (pendiente de implementación): MongoDB / MySQL / Firebase
    Fetch API: Para manejar peticiones al backend
    Iconos: Bootstrap Icons
    Fuentes: Google Fonts (Poppins)

## 📂 Estructura del Proyecto

📁 DISPAROSDEPORTIVOS/
│── 📁 imagenmia/         # Carpeta con imágenes personales o de perfil
│   ├── 🖼️ yo.jpg
│── 📁 img/               # Carpeta para imágenes generales del sitio
│── 📁 models/            # Modelos de datos para la base de datos
│   ├── 📜 photo.js       # Modelo para manejar fotos en la BD
│── 📁 node_modules/      # Dependencias de Node.js (se genera con npm install)
│── 📁 uploads/           # Carpeta donde se almacenan imágenes subidas por usuarios (PENDIENTE)
│── 📁 venta-fotos/       # Posible módulo para la venta de fotos (PENDIENTE)
│── 📜 .env               # Variables de entorno (configuración sensible) 
│── 📜 about.html         # Página "Sobre mí"
│── 📜 albums.html        # Página de álbumes de fotos (DEPRECIADO)
│── 📜 confirmacion_pago.html  # Página de confirmación de pago exitoso
│── 📜 convertir-webp.js   # Script para convertir imágenes a formato WebP (USARIO APLICA)
│── 📜 detalle_albums.html # Página con detalles de los álbums, tiene botones de compra
│── 📜 error_pago.html     # Página de error en el pago
│── 📜 index.html          # Página principal
│── 📜 package.json        # Configuración de Node.js y dependencias
│── 📜 package-lock.json   # Archivo de bloqueo de dependencias
│── 📜 README.md           # Documentación del proyecto
│── 📜 script.js           # Lógica del frontend
│── 📜 server.js           # Servidor en Node.js (backend)
│── 📜 styles.css          # Estilos personalizados


🚀 Instalación y Configuración. Requisitos previos:

Antes de ejecutar el proyecto, asegúrate de tener instalado:
    Node.js (si usas un servidor)
    Un navegador moderno compatible

Clonar el repositorio
    git clone https://github.com/tuusuario/DisparosDeportivos.git
    cd DisparosDeportivos

Instalar dependencias (si tienes un backend)
    npm install

Ejecutar el servidor (si aplica)
    node server.js

Abrir el proyecto
    Si solo es frontend, basta con abrir index.html en un navegador.


📌 Funcionalidades

✔️ Galería de fotos con carrusel interactivo
✔️ Formulario de contacto con validación y envío de datos
✔️ Paginación de eventos deportivos
✔️ Diseño responsivo con Bootstrap 5


🔧 API (si aplicas backend)

Si tienes un backend con Node.js, detalla las rutas disponibles. Ejemplo:
POST /enviar-mensaje

    Descripción: Recibe los datos del formulario de contacto y los procesa.

    Parámetros:

{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "tipo_consulta": "evento",
  "mensaje": "Quisiera una sesión fotográfica."
}

Respuesta exitosa:

{ "message": "Mensaje enviado correctamente." }

Error:

{ "error": "No se pudo enviar el mensaje." }



🛠️ Mantenimiento y Mejoras Futuras

📌 Optimización de imágenes para mejorar tiempos de carga
📌 Implementar un sistema de reservas para sesiones fotográficas
📌 Agregar autenticación de usuarios para la compra de fotos




👨‍💻 Autor

📸 [Vladimir Valderrama Vega] – Fotógrafo y Desarrollador de Disparos Deportivos
🌎 [disparosdeportivos.cl / behance.net/disparosdeportivos]
📧 [visiondeportiva2024@gmail.com]











VS Code tiene extensiones como Markdown Preview para verlo con formato bonito.
Escribe primero en Markdown en VS Code. Luego, si necesitas un documento más formal, convierte el .md a PDF o Word con herramientas como Pandoc o simplemente copiando y pegando en Word.


- No es una SPA:
 1. No maneja rutas dinámicamente. Las secciones de la página (#about, #gallery, #contact) están en la misma página, pero no se usa un enrutador en el frontend para gestionar vistas dinámicamente.
 2. La página se carga completamente desde el servidor, sin actualizar solo partes específicas bajo demanda.
 3. No hay uso de JavaScript avanzado para navegación: Aunque usa JavaScript para el formulario de contacto y la paginación, no cambia la URL sin recargar la página (history.pushState)
 4. No hay uso de frameworks como React, Vue o Angular.


Tiene de SPA:
 1. Sección últimos Eventos que se actualiza sin recargar la página.
 2. El formulario de contacto usa fetch() para enviar datos sin recargar la página.
 3. La galería de fotos funciona dinámicamente con Bootstrap Carousel.

Para convertirla en una SPA:
 1. Usar un framework como React o Vue para gestionar el contenido dinámicamente.
 2. Implementar un router en JavaScript (como React Router o Vue Router) para manejar las secciones sin recargar.
 3. Hacer que la sección de "Últimos Eventos" cargue dinámicamente desde una API con AJAX o Fetch.
 4. Usar history.pushState() para cambiar la URL sin recargar.

