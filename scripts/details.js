import peliculas from './films.js'

window.addEventListener('load', load);

function load() {
    const RUTA = 'http://image.tmdb.org/t/p/w185/';
    let url = new URL(window.location.href);
    let idpelicula = url.searchParams.get('IDpelicula').valueOf();
    let pelicula = peliculas.find(a => idpelicula == a.id);
    let divPelicula = document.querySelector('#contenedor');
    let containerinfo = document.createElement('div');
    containerinfo.innerHTML = `<img src="${RUTA}${pelicula.poster_path}"/> 
                               <div>
                              <h1>${pelicula.original_title}</h1 >
                              <p> ${pelicula.overview}</p> 
                               </div>
                               <div>
                              <h2> Valoración : ${pelicula.vote_average}</h2>
                             <p id="fecha"> Fecha de Lanzamiento : ${pelicula.release_date}</p>
                               </div>`

    divPelicula.appendChild(containerinfo);


}