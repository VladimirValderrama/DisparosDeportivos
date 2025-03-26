# DisparosDeportivos
Sitio web dinámico con JavaScript de portafolio y venta de fotografías.


## 🛠️ Tecnologías utilizadas
- HTML, CSS, JavaScript
- Bootstrap 5
- Fetch API para peticiones
- Servidor en Node.js

## 📂 Estructura del Proyecto

📁 src/ → Código fuente
📁 public/ → Archivos estáticos
📄 index.html → Página principal
📄 script.js → Lógica del cliente

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

