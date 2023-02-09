const apiKey = "ad5512039df6c4b5ab6c1e76d9584d54"

const API = "https://api.themoviedb.org/3"
const movie_id = 23

const mainImage = document.getElementById('main_image')
const title = document.getElementById('title')
const year = document.getElementById('date')
const description = document.getElementById('description')
const moviesContainer = document.getElementById('movies-container')
console.log(moviesContainer);


const truncatedString = (str, num) => {
  if(str?.length>num){
    return str.slice(0, num) + '...';
  }else{
    return str
  }
}


const getRandomMovies = async (urlAPI) => {
  const response = await fetch(`${urlAPI}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,)
  const data = await response.json()
  const movies = data.results
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie)


  mainImage.setAttribute('src',`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`)
  title.textContent = movie?.title
  year.textContent = `Released: ${movie?.release_date}`
  description.textContent = truncatedString(movie?.overview, 150)

}  

const moviesView = (movies, titleClasification) => {
  const principal = document.createElement('div')
  principal.setAttribute("class", "relative flex items-center group");


  const titleName = document.createElement('p')
  titleName.setAttribute("class", "text-white font-bold md:text-xl p-4")
  titleName.textContent= `${titleClasification}`
  moviesContainer.appendChild(titleName)
  const wrapper = document.createElement("div")
  //w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative
  wrapper.setAttribute("class", "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative")
  
  movies.map(movie=>{

    const moviesWrapper = document.createElement("div")
    moviesWrapper.setAttribute("class", "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2")
  
    const img = document.createElement("img")
    img.setAttribute("src",`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`)
    img.setAttribute("class", "w-full h-auto block")
    img.setAttribute("alt","jolos")
    
    const titleWraper = document.createElement("div")
    titleWraper.setAttribute("class", "absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white");
    
    const titleText = document.createElement("p")
    titleText.setAttribute("class", "white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center")
    titleText.textContent=`${movie?.title}`
  
    titleWraper.appendChild(titleText)
    moviesWrapper.appendChild(img)
    moviesWrapper.appendChild(titleWraper)
    
    wrapper.appendChild(moviesWrapper)
  })
  principal.appendChild(wrapper)
  moviesContainer.appendChild(principal)
}

const geTopRatedMovies = async (urlAPI) => {
  const response = await fetch(`${urlAPI}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,)
  const data = await response.json()
  const movies = data.results
  moviesView(movies, "TopRatedd")
}  
const geTrendingMovies = async (urlAPI) => {
  const response = await fetch(`${urlAPI}/movie/popular?api_key=${apiKey}&language=en-US&page=2`,)
  const data = await response.json()
  const movies = data.results
  moviesView(movies, "Trending")
}  
const geHorrorMovies = async (urlAPI) => {
  const response = await fetch(`${urlAPI}/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1`,)
  const data = await response.json()
  const movies = data.results
  moviesView(movies, "Horror")
} 
const getUpComingMovies = async (urlAPI) => {
  const response = await fetch(`${urlAPI}/movie/upcoming?api_key=${apiKey}&language=en-US&&page=1`,)
  const data = await response.json()
  const movies = data.results
  moviesView(movies, "UpComing")
}  

getRandomMovies(API)

geTopRatedMovies(API)
geTrendingMovies(API)
geHorrorMovies(API)
getUpComingMovies(API)



