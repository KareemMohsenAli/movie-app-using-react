import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../component/Card"
import { Link } from "react-router-dom"


function Movies(){
    const [moviecarries, setComponies] = useState([])

    const [keyword, setKeyword] = useState("1")
    const[search,setsearch]=useState("a")

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
    // const[string,setsearch]=useState("a")

    return(
        <div className="container-fluid bg-black ">
             <input  onChange={(e)=>changesearch(e)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            
            <div className="row">
                
                {moviecarries.map((movies, index) => {
                 return (
                    <div className="col-lg-3 " key={index}>
                   <Link to={`/about/${movies.id}`}><Card key={index} img={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} desc={movies.original_title} name={movies.title} />
                   </Link>
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