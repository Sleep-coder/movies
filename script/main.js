// main.js

// Main entry point, event listeners, and coordination
document.getElementById('searchButton').addEventListener('click', searchMovies);
document.getElementById('favoritesButton').addEventListener('click', showFavorites);

async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput !== '') {
        const searchResults = await fetchMovies(searchInput);
        renderSearchResults(searchResults);
        // Store the search results in a variable
        window.searchResults = searchResults;
    }
}

function renderSearchResults(movies) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    movies.forEach((movie) => {
        const isFavorite = getFavoritesFromStorage().some((favMovie) => favMovie.imdbID === movie.imdbID);
        const movieCard = createMovieCard(movie, isFavorite);
        searchResultsContainer.appendChild(movieCard);
    });
}

function showFavorites() {
    const favorites = getFavoritesFromStorage();
    renderFavorites(favorites);
}
