import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../component/Card"
import { Link } from "react-router-dom"
import Show from "./Show"
import { useDispatch, useSelector } from "react-redux"
import { changeStar } from "../store/action/Star"


function Movies(){
    const [moviecarries, setComponies] = useState([])


    const [keyword, setKeyword] = useState("1")
    const[search,setsearch]=useState("a")

    // pagenation
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
                page: keyword,
                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })
        .then((data) => setComponies(data.data.results))
        .catch((err) => console.log(err))
    }, [keyword])

    //search
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "9b743af1d4fde1d65af33c40dcccce87",
                query: search
            }
        })
        .then((data) => setComponies(data.data.results))
        .catch((err) => console.log(err))
    }, [search])

    useEffect(()=>{
        window.scrollTo({top: 0});
    },[keyword])


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
        .then((info) => setComponies(info.data.results))
        .catch((err) => console.log(err))

    },[])

    const change = (e) => {
        
        setKeyword(e.target.text)
    }
    
    const changesearch = (e) => {
        
       console.log(setsearch(e.target.value))
       
    }
    const star = useSelector((state) => state.Star.Star) // true
     
    const dispath=useDispatch()
    console.log(star)
    const fav =(movies)=>{
        // console.log(e.target.className)
        dispath(changeStar(movies))
        
        // e.target.className=`fa-solid fa-2x text-warning fa-regular fa-star position-absolute`
    }
    // const[string,setsearch]=useState("a")

    return(
        <div className="container-fluid bg-black ">
             <input  onChange={(e)=>changesearch(e)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            
            <div className="row">
                
                {moviecarries.map((movies, index) => {
                 return (
                    <div className="col-lg-3 col-md-6 position-relative " key={index}>
                   <Card movies={movies} key={index} id={movies.id} img={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} desc={movies.original_title} name={movies.title} />
                   {/* <div onClick={()=>fav(movies)} className="position-absolute top-0 "><i  className="fa-regular fa-star fa-2x "/></div> */}
                  <Link to={`/about/${movies.id}`}> <div className=" w-75  d-flex justify-content-center  "> <button className="btn btn-primary"> Details  </button> </div>  </Link>
                    </div>
                 )
                //  <h1 key={index}> {company.name} </h1>
                
            })}

            </div>
            <nav aria-label="Page navigation example" >
  <ul className="pagination d-flex justify-content-center">
    
    <Link  className="page-item p-3" onClick={(e)=>change(e)}>1</Link>
    <Link className="page-item p-3" onClick={(e)=>change(e)}>2</Link>
    <Link className="page-item p-3" onClick={(e)=>change(e)}>3</Link>
  </ul>
</nav>
        </div>

        
    )
}

export default Movies