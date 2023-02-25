const mainImage = document.getElementById('main_image')
const title = document.getElementById('title')
const year = document.getElementById('date')
const description = document.getElementById('description')
const moviesContainer = document.getElementById('movies-container')
const bannerWrapper = document.getElementById('bannerWrap')

const detailImage = document.getElementById('main_image_details')
console.log(detailImage);
const detailTitle = document.getElementById('title_detail')
const detailYear = document.getElementById('date_details')
const detailDescription = document.getElementById('description_details')
const detailBannerWrapper = document.getElementById('movieDetails')

// moviesContanier

const tvShowsContainer = document.getElementById('tvshows-container')
const logoNetflix = document.getElementById('neflix')
logoNetflix.addEventListener("click", backHome)

//butoon navbar
const homebutton = document.getElementById('home-button')
homebutton.addEventListener("click",backHome);

const tvShowsButoon = document.getElementById('tv-shows')
tvShowsButoon.addEventListener("click",backTvShows);

const moviesButton = document.getElementById('movies-button')
moviesButton.addEventListener("click",backMovies);

const newPopularButton = document.getElementById('new-popular-movies')
newPopularButton.addEventListener("click",backNewPopular);

const myListButton = document.getElementById('my-list')
myListButton.addEventListener("click",backMylist)

const searchButton = document.getElementById('searchBtn')
console.log(searchButton);
searchButton.addEventListener("click", searchMovies)

const searchContainer = document.getElementById('search-container')
const searchFormInput = document.getElementById('searchForm')