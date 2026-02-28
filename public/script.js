document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente cargado");

// 🟢 FORMULARIO DE CONTACTO
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn"); // 🔧 Mejora: referencia al botón
const feedback = document.getElementById("form-feedback"); // 🔧 Mejora: div para feedback

// 🆕 Agregado: función para mostrar mensajes al usuario
function mostrarMensaje(mensaje, tipo = "success") {
    feedback.textContent = mensaje;
    feedback.style.color = tipo === "success" ? "green" : "red";
}

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre")?.value;
        const email = document.getElementById("email")?.value;
        const tipo_consulta = document.getElementById("tipo_consulta")?.value;
        const mensaje = document.getElementById("mensaje")?.value;

        console.log("Valores del formulario:", { nombre, email, tipo_consulta, mensaje });

        if (!nombre || !email || !tipo_consulta || !mensaje) {
            mostrarMensaje("Completa todos los campos del formulario.", "error"); // 🔧 Mejora: mensaje visible
            return;
        }

        // 🔧 Mejora: validación básica de email y largo del mensaje
        const emailValido = /\S+@\S+\.\S+/.test(email);
        if (!emailValido) {
            mostrarMensaje("Ingresa un email válido", "error");
            return;
        }

        if (mensaje.length < 10) {
            mostrarMensaje("El mensaje debe tener al menos 10 caracteres", "error");
            return;
        }
        mostrarMensaje("Enviando...", "success"); // 🔧 Mejora: feedback de carga

        const endpoint =
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'http://localhost:3000/enviar-mensaje'
          : 'https://backend-9awr.onrender.com/enviar-mensaje';
      

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, tipo_consulta, mensaje }),
            });

            const text = await response.text(); // 👈 cambiar de .json() a .text()

            try {
                const data = JSON.parse(text);
                console.log("Respuesta del servidor:", data);
                mostrarMensaje("Mensaje enviado correctamente. Gracias por contactarnos.", "success");
                form.reset();
            } catch (e) {
                console.error("Respuesta no es JSON válida:", text);
                mostrarMensaje("Respuesta inesperada del servidor.", "error");
            }

        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
            mostrarMensaje("Hubo un error al enviar el mensaje. Intenta más tarde.", "error"); // 🔧 Mejora
        } finally {
            submitBtn.disabled = false; // 🔧 Mejora: volver a habilitar botón
        }
    });
} else {
    console.error("Formulario no encontrado en el HTML");
}

    // 🟢 PAGINACIÓN DE NOTICIAS
    // Cargar eventos desde el archivo JSON
    async function cargarNoticias() {
        try {
            const response = await fetch('noticias/articulos.json');
            const noticias = await response.json();
            if (Array.isArray(noticias) && noticias.length > 0) {
                iniciarPaginacionNoticias(noticias);
            } else {
                console.error("No se encontraron noticias en el JSON");
            }
        } catch (error) {
            console.error("Error al cargar las noticias desde el archivo JSON:", error);
        }
    }

function iniciarPaginacionNoticias(noticias) {

    const noticiasPorPagina = 6;
    let paginaActual = 1;
    const totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);

    const container = document.getElementById("noticias-container");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageIndicator = document.getElementById("pageIndicator");

    function mostrarNoticias() {

        container.innerHTML = "";

        const inicio = (paginaActual - 1) * noticiasPorPagina;
        const fin = inicio + noticiasPorPagina;
        const noticiasPagina = noticias.slice(inicio, fin);

        noticiasPagina.forEach(noticia => {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        
                        <a href="articulo.html?id=${noticia.id}">
                            <img src="${noticia.imagen}" 
                                 class="card-img-top" 
                                 loading="lazy"
                                 alt="${noticia.titulo}">
                        </a>

                        <div class="card-body">
                            <h5 class="card-title">
                                <a href="articulo.html?id=${noticia.id}" 
                                   class="text-decoration-none text-dark">
                                    ${noticia.titulo}
                                </a>
                            </h5>

                            <p class="card-text">
                                <strong>${noticia.fecha}</strong> - ${noticia.lugar}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        });

        pageIndicator.textContent = `Página ${paginaActual} de ${totalPaginas}`;
        prevButton.disabled = paginaActual === 1;
        nextButton.disabled = paginaActual === totalPaginas;
    }

    prevButton.addEventListener("click", () => {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarNoticias();
        }
    });

    nextButton.addEventListener("click", () => {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            mostrarNoticias();
        }
    });

    mostrarNoticias();
}

cargarNoticias();


});
