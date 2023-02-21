// const API = "https://api.themoviedb.org/3"
const backHome = () => {
  location.hash = "home";
  console.log("qecars");
  homebutton.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  tvShowsButoon.setAttribute("class", null)
  moviesButton.setAttribute("class", null)
  newPopularButton.setAttribute("class", null)
  myListButton.setAttribute("class", null)
}
const backTvShows = () => {
  location.hash = "tvshows";
  tvShowsButoon.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  moviesButton.classList("class",null)
  newPopularButton.classList("class",null)
  myListButton.classList("class",null)
  homebutton.classList("class",null)
} 
const backMovies = () => {
  location.hash = "movies";
  moviesButton.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  homebutton.setAttribute("class", null);
  tvShowsButoon.setAttribute("class", null)
  newPopularButton.setAttribute("class", null)
  myListButton.setAttribute("class", null)
}
const backNewPopular = () => {
  location.hash = "new-popular";
  newPopularButton.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  homebutton.setAttribute("class", null);
  tvShowsButoon.setAttribute("class", null)
  moviesButton.setAttribute("class", null)
  myListButton.setAttribute("class", null)
}
const backMylist = () => {
  location.hash = "my-list";
  myListButton.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  homebutton.setAttribute("class", null)
  moviesButton.setAttribute("class", null)
  newPopularButton.setAttribute("class", null)
}



const navigate = () => {
  if(location.hash.startsWith("#tvshows")){
    tvShowsPage()
  }else if(location.hash.startsWith("#search=")){
    searchPage()
  }else if(location.hash.startsWith("#movie=")){
    moviePage()
  }else if(location.hash.startsWith("#movies")){
    moviesPage()
  }else{
    homePage()

  }
}

function homePage() {
  console.log("home");

  getRandomMovies(API)
  geTopRatedMovies(API)
  geTrendingMovies(API)
  geHorrorMovies(API)
  getUpComingMovies(API)
  bannerWrapper.classList.remove("hidden");
  moviesContainer.classList.remove("pt-12");
  moviesContainer.classList.remove("hidden");
  tvShowsContainer.classList.add("hidden");
}
function moviesPage() {
  console.log("moviespage");
  moviesContainer.classList.remove("hidden");
  bannerWrapper.classList.add("hidden");
  moviesContainer.classList.add("pt-12"); 
}
function moviePage() {
  console.log("movie");
}
function searchPage() {
  console.log("search");
}
function tvShowsPage() {
  getTvShows(API)
  console.log("trends");
  tvShowsContainer.classList.remove("hidden");
  bannerWrapper.classList.add("hidden");
  moviesContainer.classList.add("pt-12");
  moviesContainer.classList.add("hidden");
  // trendingContainer.classList.add("hidden");
  // upCommingContainer.classList.add("hidden");
  // topRatedContainer.classList.add("hidden");
}

window.addEventListener("hashchange", navigate,false)
window.addEventListener("DOMContentLoaded", navigate,false)


