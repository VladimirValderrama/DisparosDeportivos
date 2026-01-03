fetch('articulos.json')
  .then(response => response.json())
  .then(noticias => {
    const container = document.getElementById('noticias-container');

    noticias.forEach(noticia => {
      container.insertAdjacentHTML('beforeend', `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            
            <a href="articulo.html?id=${noticia.id}">
              <img src="../${noticia.imagen}" 
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

              <a href="articulo.html?id=${noticia.id}" 
                 class="btn btn-primary btn-sm">
                Ver artículo
              </a>
            </div>
          </div>
        </div>
      `);
    });
  })
  .catch(error => console.error('Error cargando noticias:', error));
