document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente cargado");

    // 🟢 FORMULARIO DE CONTACTO
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre")?.value;
            const email = document.getElementById("email")?.value;
            const tipo_consulta = document.getElementById("tipo_consulta")?.value;
            const mensaje = document.getElementById("mensaje")?.value;

            console.log("Valores del formulario:", { nombre, email, tipo_consulta, mensaje });

            if (!nombre || !email || !tipo_consulta || !mensaje) {
                console.error("Faltan campos en el formulario");
                return;
            }

            try {
                const response = await fetch("http://localhost:3000/enviar-mensaje", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nombre, email, tipo_consulta, mensaje }),
                });

                const data = await response.json();
                console.log("Respuesta del servidor:", data);
            } catch (error) {
                console.error("Error al conectar con el servidor:", error);
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
        const eventosPorPagina = 3;
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
