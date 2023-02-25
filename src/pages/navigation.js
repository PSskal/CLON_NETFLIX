// const API = "https://api.themoviedb.org/3"

function smoothscroll(){
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
       window.requestAnimationFrame(smoothscroll);
       window.scrollTo (0,currentScroll - (currentScroll/5));
  }
};

const backHome = () => {
  location.hash = "home";
  // window.scrollTo(0, 0);
  smoothscroll();
  homebutton.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  tvShowsButoon.setAttribute("class", null)
  moviesButton.setAttribute("class", null)
  newPopularButton.setAttribute("class", null)
  myListButton.setAttribute("class", null)
}
const backTvShows = () => {
  location.hash = "tvshows";
  tvShowsButoon.setAttribute("class", "headerLink cursor-default font-semibold text-white hover:text-white");
  moviesButton.setAttribute("class",null)
  newPopularButton.setAttribute("class",null)
  myListButton.setAttribute("class",null)
  homebutton.setAttribute("class",null)
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
  location.hash = "mods";
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
const searchMovies = () => {
  (searchFormInput.value !== "" )
  ? location.hash = `search=${searchFormInput.value}`
  :e.preventDefault()
  homebutton.setAttribute("class", null)
  moviesButton.setAttribute("class", null)
  newPopularButton.setAttribute("class", null)
  myListButton.setAttribute("class", null)

  
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
  searchContainer.classList.add("hidden");
  detailBannerWrapper.classList.add("hidden");
}
function moviesPage() {
  console.log("moviespage");
  moviesContainer.classList.remove("hidden");
  bannerWrapper.classList.add("hidden");
  moviesContainer.classList.add("pt-12"); 
  tvShowsContainer.classList.add("hidden");
  searchContainer.classList.add("hidden");
  detailBannerWrapper.classList.add("hidden");
}
function moviePage() {
  console.log("movie");
  tvShowsContainer.classList.add("hidden");
  bannerWrapper.classList.add("hidden");
  moviesContainer.classList.add("hidden");
  searchContainer.classList.add("hidden");
  detailBannerWrapper.classList.remove("hidden");

  const [_,movieId] = location.hash.split("=")
  getMovieDetail(API,movieId)
}
function searchPage() {
  
  console.log("search");
  searchContainer.classList.remove("hidden");
  searchContainer.innerHTML=""
  searchContainer.classList.add("pt-20");
  moviesContainer.classList.add("hidden");
  bannerWrapper.classList.add("hidden");
  tvShowsContainer.classList.add("hidden");
  detailBannerWrapper.classList.add("hidden");
  const [_,query] = location.hash.split("=")
  getSearchMovie(API,query)

}
function tvShowsPage() {
  getTvShows(API)
  console.log("trends");
  tvShowsContainer.classList.remove("hidden");
  bannerWrapper.classList.add("hidden");
  moviesContainer.classList.add("pt-12");
  moviesContainer.classList.add("hidden");
  searchContainer.classList.add("hidden");
  detailBannerWrapper.classList.add("hidden");
  // trendingContainer.classList.add("hidden");
  // upCommingContainer.classList.add("hidden");
  // topRatedContainer.classList.add("hidden");
}

window.addEventListener("hashchange", navigate,false)
window.addEventListener("DOMContentLoaded", navigate,false)


