const apiKey = 'a2b07930';
const moviesContainer = document.getElementById('movies-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchButton2 = document.getElementById('search-button2');
const searchButton3 = document.getElementById('search-button3');
const movieModal = document.getElementById('movie-modal');
const closeButton = document.querySelector('.close-button');
const movieTitle = document.getElementById('movie-title');
const moviePoster = document.getElementById('movie-poster');
const movieYear = document.getElementById('movie-year');
const movieRating = document.getElementById('movie-rating');
const movieGenre = document.getElementById('movie-genre');
const moviePlot = document.getElementById('movie-plot');
let currentPage = 1;
searchButton.addEventListener('click', searchMovies);
searchButton2.addEventListener('click', searchMovies2);
closeButton.addEventListener('click', closeModal);
function searchMovies() {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() === '') {
        return;
    }
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
                if (data.totalResults > 10 && data.Search.length === 10) {
                    currentPage++;
                }
            } else {
                searchButton2.style.display = 'none';
                alert('Фильм не найден.');

            }
        })
        .catch(error => console.error('Ошибка:', error));
}
function searchMovies2() {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() === '') {
        return;
    }
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
                if (data.totalResults > 10 && data.Search.length === 10) {
                    currentPage--;
                    if(currentPage<=0)
                    {
                        currentPage=1;
                    }
                }
            } else {
                searchButton2.style.display = 'none';
                alert('Фильм не найден.');
            }
        })
        .catch(error => console.error('Ошибка:', error));
}
searchButton.addEventListener('click', searchMovies);
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
          `;
        movieDiv.addEventListener('click', () => {
            getMovieDetails(movie.imdbID);
        });
        moviesContainer.appendChild(movieDiv);
    });

}
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
        searchButton.textContent = 'Искать';
        searchButton2.style.display = 'none';
    }
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() != '') {
            searchButton.textContent = 'Далее';
            searchButton2.style.display = 'block';
        }
    });
});
function addLoadButton(totalResults) {
    const loadButton = document.createElement('button');
    loadButton.textContent = 'Загрузить больше';
    loadButton.addEventListener('click', () => {
        currentPage++;
        if (currentPage * 10 <= totalResults) {
            isLoading = true;
            fetchMovies(searchInput.value, currentPage);
            loadButton.disabled = true;
        } else {
            loadButton.textContent = 'Больше нет фильмов';
            loadButton.disabled = true;
        }
    });
    moviesContainer.appendChild(loadButton);
}
function getMovieDetails(imdbID) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                movieTitle.textContent = data.Title;
                moviePoster.src = data.Poster;
                movieYear.textContent = data.Year;
                movieRating.textContent = data.imdbRating;
                movieGenre.textContent = data.Genre;
                moviePlot.textContent = data.Plot;
                movieModal.style.display = 'block';
            } else {
                alert('Информация о фильме недоступна.');
            }
        })
        .catch(error => console.error('Ошибка:', error));
}
function closeModal() {
    movieModal.style.display = 'none';
}