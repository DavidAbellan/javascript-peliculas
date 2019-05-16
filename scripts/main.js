 import peliculas from './films.js'



 window.addEventListener('load', () => {
     console.log('document loaded')
     let cabecera = document.querySelector('#cabecera');
     cabecera.innerHTML = '<h1>Movies Bazar </h1>';
     let galeria = document.querySelector('#galeria');

     const RUTA = 'http://image.tmdb.org/t/p/w185/';
     imprimir(peliculas);

     function imprimir(peliculas) {
         document.querySelector('#galeria').innerHTML = '';
         for (let pelicula of peliculas) {
             let {
                 id : identificador,
                 poster_path: imagen,
                 title: titulo,
                 vote_average: puntuacion,
                 release_date: year,
                 overview: descripcion
             } = pelicula;

             let divPelicula = document.createElement('div');

             function estrellas(p) {
                 let numero = '';
                 for (let i = 0; i <= puntuacion / 2; i++) {
                     numero += '<i class="fas fa-star"></i>';
                 }
                 return numero;
             }
             let numeroEstrellas = estrellas(puntuacion);
             console.log(numeroEstrellas);
             let rotulo = ''
             if (titulo.length > 30) {
                 rotulo = 'h6';
             } else {
                 rotulo = 'h3';

             }
             console.log(rotulo.fontsize)

             divPelicula.innerHTML = `   
                                         <a href="/detalles.html?IDpelicula=${identificador}">
                                         <img title="${descripcion}" src="${RUTA}${imagen}">
                                         </a>
                                          <${rotulo}>${titulo}</${rotulo}> 
                                         <div>${numeroEstrellas}</div>
                                         <p id="fecha"> ${year} </p> `

             console.log(divPelicula);

             galeria.appendChild(divPelicula);
         }

     }
     let botonBuscar = document.querySelector('#btnBuscar');
     botonBuscar.addEventListener('click', buscar)


     function buscar() {
         let cajaTexto = document.querySelector('#busqueda');
         let busqueda = cajaTexto.value;
         busqueda = busqueda.toLowerCase();

         let peliculasEncontradas = peliculas.filter(a => {
             return a.title.toLowerCase().includes(busqueda)
         })
         imprimir(peliculasEncontradas);
     }

     // 






 });