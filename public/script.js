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

    // 🟢 PAGINACIÓN DE EVENTOS
    // Cargar eventos desde el archivo JSON
    async function cargarEventos() {
        try {
            const response = await fetch('eventos.json');
            const eventos = await response.json();
            if (Array.isArray(eventos) && eventos.length > 0) {
                iniciarPaginacion(eventos);
            } else {
                console.error("No se encontraron eventos en el JSON");
            }
        } catch (error) {
            console.error("Error al cargar los eventos desde el archivo JSON:", error);
        }
    }

    // 🟢 INICIAR Paginación
    function iniciarPaginacion(eventos) {
        const eventosPorPagina = 6;
        let paginaActual = 1;
        const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);

        const eventosContainer = document.getElementById("eventosContainer");
        const prevButton = document.getElementById("prevPage");
        const nextButton = document.getElementById("nextPage");
        const pageIndicator = document.getElementById("pageIndicator");

        if (eventosContainer && prevButton && nextButton && pageIndicator) {
            function mostrarEventos() {
                eventosContainer.innerHTML = "";
                const inicio = (paginaActual - 1) * eventosPorPagina;
                const fin = inicio + eventosPorPagina;
                const eventosPagina = eventos.slice(inicio, fin);

                eventosPagina.forEach(evento => {
                    eventosContainer.innerHTML += `
                        <div class="col-md-4 mb-4">
                            <div class="card bg-dark text-white">
                                <picture>
                                    <source srcset="${evento.img}.webp" type="image/webp">
                                    <img src="${evento.img}.jpg" class="card-img" alt="${evento.titulo}" loading="lazy">
                                </picture>
                                <div class="card-img-overlay d-flex align-items-end">
                                    <a href="${evento.enlace}" class="stretched-link text-white text-decoration-none">
                                        <h5 class="card-title bg-dark bg-opacity-50 p-2">${evento.titulo}</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                });

                // Actualizar la paginación
                pageIndicator.textContent = `Página ${paginaActual} de ${totalPaginas}`;
                prevButton.disabled = paginaActual === 1;
                nextButton.disabled = paginaActual === totalPaginas;
            }

            prevButton.addEventListener("click", () => {
                if (paginaActual > 1) {
                    paginaActual--;
                    mostrarEventos();
                }
            });

            nextButton.addEventListener("click", () => {
                if (paginaActual < totalPaginas) {
                    paginaActual++;
                    mostrarEventos();
                }
            });

            // Cargar la primera página de eventos
            mostrarEventos();
        } else {
            console.error("Elementos de paginación no encontrados en el HTML");
        }
    }

    // Iniciar la carga de eventos desde el archivo JSON
    cargarEventos();
});
