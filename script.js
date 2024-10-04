const search = document.getElementById('searchBar');
const movie = document.querySelectorAll('.movie-card')

search.addEventListener('input', function(){
  const searchValue = search.value.toLowerCase()
  movie.forEach(item => {
    const film = item.querySelector('h3').textContent.toLowerCase();
    if(film.includes(searchValue)){
      item.style.display = 'block'
    }else {
      item.style.display = 'none'
    }


  })
})