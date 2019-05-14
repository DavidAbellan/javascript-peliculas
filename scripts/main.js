 import peliculas from './films.js'



window.addEventListener('load',() => { 
     console.log('document loaded')
     let cabecera = document.querySelector( '#cabecera' );
     cabecera.innerHTML = '<h1>Movies Bazar </h1>';
     let galeria = document.querySelector('#galeria');

    const RUTA = 'http://image.tmdb.org/t/p/w185/';
        
      for (let pelicula of peliculas){
        let {poster_path:imagen,title:titulo,vote_average:puntuacion,release_date:year}= pelicula;
        console.log(pelicula);
        console.log(titulo, year)
        let divPelicula = document.createElement('div');

         divPelicula.innerHTML =  `<img src=${RUTA}${imagen}>
                                   <p>${titulo}</p> 
                                   <p>${puntuacion}</p>
                                   <p>${year}</p>`
        galeria.appendChild(divPelicula);

         }
     

     
     
     

     

 });
 



