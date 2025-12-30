fetch('articulos.json')
  .then(response => response.json())
  .then(noticias => {
    const container = document.getElementById('noticias-container')

    noticias.forEach(noticia => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="img/${noticia.imagen}" class="card-img-top" loading="lazy">
            <div class="card-body">
              <h5 class="card-title">${noticia.titulo}</h5>
              <p class="card-text">
                <strong>${noticia.fecha}</strong> - ${noticia.lugar}
              </p>
              <a href="articulo.html?id=${noticia.id}" class="btn btn-primary btn-sm">
                Ver artículo
              </a>
            </div>
          </div>
        </div>
      `
    })
  })
  .catch(error => {
    console.error('Error cargando noticias:', error)
  })
