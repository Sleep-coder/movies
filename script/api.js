const API_KEY = "3eebb3b3";
// Function to fetch movie data from the OMDB API
async function fetchMovies(query) {
  const apiUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search || [];
    } else {
      console.error("Error fetching movies:", data.Error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
}
