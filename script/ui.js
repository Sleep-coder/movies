// ui.js

// Function to create a movie card
function createMovieCard(movie, isFavorite = false) {
  const card = document.createElement("div");
  card.className = "card";

  // Add movie details to the card
  card.innerHTML = `
      <img src="${movie.Poster}" alt="${
    movie.Title
  } Poster" style="width: 100%">
      <h3>${movie.Title}</h3>
      <p>Year: ${movie.Year}</p>
      <p>Type: ${movie.Type}</p>
      <p>IMDB ID: ${movie.imdbID}</p>
      <span class="favorite-icon ${isFavorite ? "favorited" : ""}" data-id="${
    movie.imdbID
  }" onclick="toggleFavorite('${movie.imdbID}')">❤️</span>
  `;

  return card;
}

function renderFavorites(favorites) {
  const favoritesContainer = document.getElementById("favorites");
  favoritesContainer.innerHTML = "";

  favorites.forEach((favMovie) => {
    const movieCard = createMovieCard(favMovie, true);
    favoritesContainer.appendChild(movieCard);
  });
}
