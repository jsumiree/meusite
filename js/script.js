//el evento click es una constante, es fijo por eso usaremos const


const albumFot = document.getElementById('albumFotos');//se llamó getelementbyid porque es único
const albumCasament = document.getElementById('albumCasamento');
const buff = document.getElementById('buffet');
const foto1 = document.getElementById('fot1');
const movieFot = document.querySelector('.movieAlbum');
const movieCas = document.querySelector('.movieCasamento');
const movieBuff = document.querySelector('.movieBuff');//se escribe el .movieBuff porque es class
const imagemFoto1 = document.querySelector('.imagem3');




//primer evento Conteudo 1, al clickar en albumFot (albumFotos) se activa/desactiva movieFot(.movieAlbum)
albumFot.addEventListener("click",() => {
   // albumFot.classList.toggle('active'); //sin esta linea en el algoritmo del professor, el video aparece abierto al recargar
   //la pagina, en mi caso aparece cerrado, como deberia de ser
    movieFot.classList.toggle('active');//toggle=alternar, click abre click cierrra
})
//primer evento Conteudo 2
albumCasament.addEventListener("click",() => {
    // albumCasament.classList.toggle('active');
    movieCas.classList.toggle('active');
})
//primer evento Conteudo 3
buff.addEventListener("click",() => {
   // buff.classList.toggle('active');
    movieBuff.classList.toggle('active');
})
foto1.addEventListener("click",() => {
    // buff.classList.toggle('active');
     imagemFoto1.classList.toggle('active');
 })
 
