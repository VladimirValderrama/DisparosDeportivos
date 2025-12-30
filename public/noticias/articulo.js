fetch('articulos.json')
  .then(response => response.json())
  .then(noticias => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const noticia = noticias.find(n => n.id === id)

    if (!noticia) {
      document.body.innerHTML = '<h2>Artículo no encontrado</h2>'
      return
    }

    document.getElementById('titulo').innerText = noticia.titulo
    document.getElementById('meta').innerText = `${noticia.fecha} - ${noticia.lugar}`
    document.getElementById('imagen').src = `img/${noticia.imagen}`
    document.getElementById('contenido').innerHTML = noticia.contenido
  })
  .catch(error => {
    console.error('Error cargando artículo:', error)
  })
