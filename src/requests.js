const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=vi`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRate: `/movie/top_rated?api_key=${apiKey}&language=vi`,
  fetchActionMovie: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchRomanceMovie: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
}

export default requests