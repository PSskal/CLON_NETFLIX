const apiKey = "ad5512039df6c4b5ab6c1e76d9584d54"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    "api_key": apiKey
  }
})

const API = "https://api.themoviedb.org/3"
const movie_id = 23



// console.log(banner Wrapper);


const truncatedString = (str, num) => {
  if(str?.length>num){
    return str.slice(0, num) + '...';
  }else{
    return str
  }
}


const getRandomMovies = async (urlAPI) => {
  const {data} = await axios.get(`${urlAPI}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,)
  // const data = await response.json()
  const movies = data.results
  const movie = movies[Math.floor(Math.random() * movies.length)];


  mainImage.setAttribute('src',`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`)
  title.textContent = movie?.title
  year.textContent = `Released: ${movie?.release_date}`
  description.textContent = truncatedString(movie?.overview, 150)

}  

const moviesView = (movies, titleClasification,container,prueba=false) => {
  const principal = document.createElement('div')
  principal.setAttribute("class", "relative flex items-center group");
  principal.setAttribute("id", `${titleClasification}`)


  const titleName = document.createElement('p')
  titleName.setAttribute("class", "text-white font-bold md:text-xl p-4")
  titleName.textContent= `${titleClasification}`
  container.appendChild(titleName)
  const wrapper = document.createElement("div")
  
  if(!prueba){
    wrapper.setAttribute("class", "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative")
  }else{
    wrapper.setAttribute("class", "w-full h-full md:px-12")
  }
  

  movies.map(movie=>{

    const moviesWrapper = document.createElement("div")
    moviesWrapper.setAttribute("class", "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2")
    moviesWrapper.addEventListener("click", ()=>{
      location.hash = `#movie=${movie.id}`
    })  

    const img = document.createElement("img")
    img.setAttribute("src",`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`)
    img.setAttribute("class", "w-full h-auto block")
    img.setAttribute("alt","jolos")
    
    const titleWraper = document.createElement("div")
    titleWraper.setAttribute("class", "absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white");
    
    const titleText = document.createElement("p")
    titleText.setAttribute("class", "white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center")
    titleText.textContent=`${movie?.title || movie?.name}` 
  
    titleWraper.appendChild(titleText)
    moviesWrapper.appendChild(img)
    moviesWrapper.appendChild(titleWraper)
    
    wrapper.appendChild(moviesWrapper)
  })
  principal.appendChild(wrapper)
  container.appendChild(principal)
}

const geTopRatedMovies = async (urlAPI) => {
  const {data} = await axios.get(`${urlAPI}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,)
  // const data = await response.json()
  const movies = data.results
  moviesView(movies, "TopRatedd",moviesContainer)
}  
const geTrendingMovies = async (urlAPI) => {
  const {data} = await axios.get(`${urlAPI}/movie/popular?api_key=${apiKey}&language=en-US&page=2`,)
  const movies = data.results
  moviesView(movies, "Trending",moviesContainer)
}  
const geHorrorMovies = async (urlAPI) => {
  const response = await fetch(`${urlAPI}/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1`,)
  const data = await response.json()
  const movies = data.results
  moviesView(movies, "Horror",moviesContainer)
  const horrorContainer = document.getElementById('Horror')
  console.log(horrorContainer);
} 
const getUpComingMovies = async (urlAPI) => {
  const {data} = await axios.get(`${urlAPI}/movie/upcoming?api_key=${apiKey}&language=en-US&&page=1`,)
  // const data = await response.json()
  console.log({"comming":data});
  const movies = data.results
  moviesView(movies, "UpComing",moviesContainer)
}  



const getTvShows = async (urlAPI) => {
  const {data} = await axios.get(`${urlAPI}/discover/tv?api_key=${apiKey}&page=1`,)
  // const data = await response.json()
  console.log({"tvshos":data});
  const movies = data.results
  moviesView(movies, "tvshows",tvShowsContainer, true)
}  

const getSearchMovie = async (urlAPI, query) => {
  const {data} = await axios.get(`${urlAPI}/search/movie`,{
    params: {
      api_key: apiKey,
      query,
      page: 1
    },
  })
  
  console.log({"search":data});
  const movies = data.results
  moviesView(movies, query, searchContainer, true)
}  



const getMovieDetail = async (urlAPI, movieId) => {
  const {data} = await axios.get(`${urlAPI}/movie/${movieId}?api_key=${apiKey}`,)
  // const data = await response.json()
  const movie = data
  console.log({"detail":movie});

  detailImage.setAttribute('src',`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`)
  detailTitle.textContent = movie?.title
  detailYear.textContent = `Released: ${movie?.release_date}`
  detailDescription.textContent = truncatedString(movie?.overview, 150)

}  
