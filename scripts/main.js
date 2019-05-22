 /* import peliculas from './films.js' */

 let peliculas;
 const API_URL = "https://api.themoviedb.org/3/"
 const API_KEY = "?api_key=80a1695fec74ccf4bb37c6b5c03ab6ee"
 const API_POPULAR_URL = 'movie/popular'
 const RUTA = 'http://image.tmdb.org/t/p/w185/'



 let cabecera = document.querySelector('#cabecera');
 let galeria;

 document.querySelector('#btnRate').addEventListener('click', ordenarPorRate);
 document.querySelector('#btnAlf').addEventListener('click', ordenarPorNombre);
 document.querySelector('#btnLan').addEventListener('click', ordenarPorFecha);
 document.querySelector('#btnBuscar').addEventListener('click', buscar);


 window.addEventListener('load', load)

 async function load() {
  


    cabecera.innerHTML = '<h1>Movies Bazar </h1>';
     let result = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
     peliculas = result.data.results
     galeria = document.querySelector('#galeria');
     imprimir(peliculas)



 }

 function ordenarPorRate() {

     let peliculasFiltradas = [];



     peliculasFiltradas = peliculas.sort((p1, p2) => {
         return p2.vote_average - p1.vote_average
     })


     imprimir(peliculasFiltradas);


 }


    

      
    

 

 function ordenarPorNombre() {

     let peliculasFiltradas = [];

     peliculasFiltradas = peliculas.sort((p1, p2) => {
         if (p1.title > p2.title) {
             return 1;
         } else if (p1.title < p2.title) {
             return -1;
         }
         return 0;
     })
     console.log(peliculasFiltradas);

     imprimir(peliculasFiltradas);


 }

 function ordenarPorFecha() {

     let peliculasFiltradas = [];

     peliculasFiltradas = peliculas.sort((p1, p2) => {
         if (p1.release_date > p2.release_date) {
             return 1;
         } else if (p1.release_date < p2.release_date) {
             return -1;
         }
         return 0;
     })
     console.log(peliculasFiltradas);

     imprimir(peliculasFiltradas);
 }

 function imprimir(peliculas) {
     document.querySelector('#galeria').innerHTML = '';
     for (let pelicula of peliculas) {
         let {
             id: identificador,
             poster_path: imagen,
             title: titulo,
             vote_average: puntuacion,
             release_date: year,
             overview: descripcion
         } = pelicula;
        
    let corazon = ''
    
    if (localStorage.getItem('array') !== null){
      let ident = JSON.parse(localStorage.getItem('array'))
        for (let campo of ident){
       if (campo == identificador){
           corazon ='<i class="fas fa-heart" id="meGusta" style="margin-left:3em;position:absolute;color:red;transform:scale(5);"></i>'
       } }

    }
/*      
 */       
             /* let id = JSON.parse(localStorage)
             console.log(id);  */
             /*  if (localStorage.getItem(titulo)== id){
                corazon =  }} */
 
        
        
         let divPelicula = document.createElement('div');

         function estrellas(p) {
             let numero = '';
             for (let i = 0; i <= puntuacion / 2; i++) {
                 numero += '<i class="fas fa-star"></i>';
             }
             return numero;
         }
         let numeroEstrellas = estrellas(puntuacion);

         let rotulo = ''
         if (titulo.length > 30) {
             rotulo = 'h6';
         } else {
             rotulo = 'h3';

         }

         divPelicula.innerHTML = `   
                                         <a href="/detalles.html?IDpelicula=${identificador}">
                                         <img title="${descripcion}" src="${RUTA}${imagen}">
                                        
                                         </a>
                                         ${corazon}
                                          <${rotulo}>${titulo}</${rotulo}> 
                                         <div>${numeroEstrellas}</div>
                                          <p id="fecha"> ${year} </p> `



         galeria.appendChild(divPelicula);
     }
 }

 function buscar() {
     let cajaTexto = document.querySelector('#busqueda');
     let busqueda = cajaTexto.value;
     busqueda = busqueda.toLowerCase();

     let peliculasEncontradas = peliculas.filter(a => {
         return a.title.toLowerCase().includes(busqueda)
     })
     imprimir(peliculasEncontradas);}
 