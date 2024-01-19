// Obtenemos la lista de películas
const peliculas = document.querySelector('#peliculas');

// Obtenemos el botón de filtro
const filtro = document.querySelector('#filtrar');

// Creamos un evento para el botón de filtro
filtro.addEventListener('click', function() {
  // Obtenemos el género seleccionado
  const genero = prompt('Genero-Pelicula');

  // Filtramos la lista de películas
  peliculas.querySelectorAll('li').forEach(function(li) {
    if (li.querySelector('p.genero').textContent === genero) {
      li.classList.add('visible');
    } else {
      li.classList.remove('visible');
    }
  });
});
