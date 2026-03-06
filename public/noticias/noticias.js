
     // 🟢 PAGINACIÓN DE EVENTOS
    // Cargar eventos desde el archivo JSON
    async function cargarEventos() {
        try {
            const response = await fetch('/eventos.json');
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
        const eventosPorPagina = 9;
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
                                    <source srcset="../${evento.img}.webp" type="image/webp">
                                    <img src="../${evento.img}.webp" class="card-img" alt="${evento.titulo}" loading="lazy">
                                </picture>
                                <div class="card-img-overlay d-flex align-items-end">
                                    <a href="../${evento.enlace}" class="stretched-link text-white text-decoration-none">
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

     // 🟢 PAGINACIÓN DE EVENTOS
    // Cargar eventos desde el archivo JSON
    async function cargarEventos() {
        try {
            const response = await fetch('/eventos.json');
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
        const eventosPorPagina = 9;
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
                                    <source srcset="../${evento.img}.webp" type="image/webp">
                                    <img src="../${evento.img}.webp" class="card-img" alt="${evento.titulo}" loading="lazy">
                                </picture>
                                <div class="card-img-overlay d-flex align-items-end">
                                    <a href="../${evento.enlace}" class="stretched-link text-white text-decoration-none">
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

