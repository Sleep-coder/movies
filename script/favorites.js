// favorites.js

// Function to toggle a movie as a favorite
function toggleFavorite(imdbID) {
  const searchResults = getSearchResults();
  const favorites = getFavoritesFromStorage();
  const index = favorites.findIndex((movie) => movie.imdbID === imdbID);

  if (index !== -1) {
    favorites.splice(index, 1);
  } else {
    const movieToAdd = searchResults.find((movie) => movie.imdbID === imdbID);
    if (movieToAdd) {
      favorites.push(movieToAdd);
    }
  }

  saveFavoritesToStorage(favorites);
  renderFavorites(favorites);
}

// Function to retrieve search results
function getSearchResults() {
  return window.searchResults || [];
}

// Function to retrieve favorite movies from browser storage
function getFavoritesFromStorage() {
  const storedFavorites =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  return storedFavorites;
}

// Function to save favorite movies to browser storage
function saveFavoritesToStorage(favorites) {
  localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
}
