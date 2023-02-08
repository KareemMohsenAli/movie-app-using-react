
import { useSelector } from "react-redux"
import Card from "../component/Card"

function Favorite() {
    // function Card({img, name, desc}) {
// 
    // console.log(props)
    // const[favitem,setfavitem] = useState([])
    const arrayofstar = useSelector((state) => state.Star.Star) 
    // console.log(arrayofstar)
    // setfavitem(arrayofstar)

    // <div className="text-center container align-items-center mt-5 " style={{width: "18rem"}}>
    // {arrayofstar.map((favmov)=>{

    // })}

    // </div>
    return(
        <div className="container-fluid bg-black ">
            <div className="row">
                
                {arrayofstar.map((movies, index) => {
                 return (
                    <div className="col-lg-3 col-md-6 position-relative " key={index}>
                   <Card key={index} img={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} desc={movies.original_title} name={movies.title} />
                    </div>
                 )
                //  <h1 key={index}> {company.name} </h1>
                
            })}

            </div>

        </div>

        
    )
}

export default Favorite