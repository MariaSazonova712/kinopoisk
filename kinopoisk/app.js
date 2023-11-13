// https://kinopoiskapiunofficial.tech/profile
// 35f0a9f6-2935-4acd-9dc1-b84fae46a866

const API_KEY = "35884510-659c-4cda-b7b9-ad684a4e9d64"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1"

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': API_KEY,
        },
    })
    const respData = await resp.json()
    console.log(respData)
    showMovies(respData)
    
}

getMovies(API_URL_POPULAR)

function getClassByRate(vote) {
    if (vote >= 7) {
        return "green"
    } else if (vote > 5) {
        return "orange"
    } else {
        return "red"
    }
}

function getRating(vote){
    if (vote !== null) {
        return vote
    } else {
        return "*"
    }
}

function showMovies(data) {
    const moviesEl = document.querySelector(".movies")
    data.items.forEach(movie => {
        const movieEl = document.createElement('div')
        movieEl.classList.add("movie")
        movieEl.innerHTML = `
        <div class="movie__cover">
        <img src="${movie.posterUrl}" 
        alt="${movie.nameRu}">
    </div>
    <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map((elem) => ` ${elem.genre}`)}</div>
        <div class="movie__average movie__average--${getClassByRate(movie.ratingImdb)}">
        ${getRating(movie.ratingImdb)}</div>
    </div>
        `
        moviesEl.appendChild(movieEl)
    });
}

document.getElementById ('searchButton').addEventListener('click' , function() {
function performSearch() {
    var searchQuery = document.getElementById('searchInput').value;
}
});