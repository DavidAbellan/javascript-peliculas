/* import peliculas from './films.js' */
window.addEventListener('load', load);

const RUTA = 'http://image.tmdb.org/t/p/w185/'
const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "?api_key=80a1695fec74ccf4bb37c6b5c03ab6ee"
const API_POPULAR_URL = 'movie/popular'
let idpelicula;
let pelicula ;


function gustar() {
  let arrayF=JSON.parse(localStorage.getItem('array')) 
  
 if (localStorage.getItem('array') == null){
   arrayF=[]
  arrayF.push(idpelicula)
 localStorage.setItem('array',JSON.stringify(arrayF))
 
  }
  else {
  
     if (arrayF.find(a => idpelicula == a)){
      let pos = arrayF.indexOf(idpelicula);
      arrayF.splice(pos ,1)
      localStorage.setItem('array',JSON.stringify(arrayF))
       
      
      } else {
      arrayF.push(idpelicula);
      localStorage.setItem('array',JSON.stringify(arrayF))}
     
    }

   load()
  }
  
  
function meGusta() {
  if (localStorage.getItem('array') !== null) {
    let af = [];
    af = JSON.parse(localStorage.getItem('array'));    
    console.log(af);
    if (af.find(a => a===idpelicula)){
      return true
    }
      return false 

  } else {
    return false;
  }

}




async function load() {

  
  let url = new URL(window.location.href);
  idpelicula = url.searchParams.get('IDpelicula').valueOf();

  const RESULT = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
  let peliculas = RESULT.data.results
  pelicula = peliculas.find(a => idpelicula == a.id);

   console.log(pelicula);
  let grafico;

  if (meGusta()) {

    grafico = '<i class="fas fa-heart" id="meGusta"></i>'
  } else {
    grafico = '<i class="far fa-heart" id="meGusta"></i>'
  }



  let divPelicula = document.querySelector('#contenedor');
  divPelicula.innerHTML = '';
  let containerinfo = document.createElement('div');

  containerinfo.innerHTML = `<img src="${RUTA}${pelicula.poster_path}"/> 
                               <div>
                              <h1>${pelicula.original_title}</h1 >
                              <p> ${pelicula.overview}</p> 
                               </div> <div>
                              
                              <h2> Valoración : ${pelicula.vote_average}</h2>
                              <p id="fecha"> Fecha de Lanzamiento : ${pelicula.release_date}</p>
                              ${grafico}
                               </div>`

  divPelicula.appendChild(containerinfo);
  document.querySelector("#meGusta").addEventListener('click', gustar);



}