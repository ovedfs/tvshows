const btnSearch = document.querySelector('.btn-search')
const inputSearch = document.querySelector('.input-search')
const items = document.querySelector('.items')

btnSearch.addEventListener('click', () => {
  const text = inputSearch.value;

  if(text == '') {
    alert('Ingresa una serie o pelicula para buscar')
    return
  }

  getShows(text)
})

async function getShows(text) {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=' + text)
  const shows = await response.json()
  console.log(shows);
  display(shows)
}

function display(shows) {
  items.innerHTML = ''

  shows.forEach(item => {
    items.innerHTML += `
    <article class="card">
      <img src="${item.show.image.medium}" alt="" />
      <h3>${item.show.name}</h3>
      <div>${item.show.summary}</div>
    </article>
    `
  });
}