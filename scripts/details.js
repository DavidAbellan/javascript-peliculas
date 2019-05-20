/* import peliculas from './films.js' */

window.addEventListener('load', load);

const RUTA = 'http://image.tmdb.org/t/p/w185/'
const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "?api_key=80a1695fec74ccf4bb37c6b5c03ab6ee"
const API_POPULAR_URL = 'movie/popular'

async function load() {
  let url = new URL(window.location.href);
  let idpelicula = url.searchParams.get('IDpelicula').valueOf();
   const RESULT = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
  let peliculas = RESULT.data.results
 
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