
import { useDispatch, useSelector } from "react-redux"
import Cardshow from "../component/Cardshow"

import { useState } from "react"
import { changeStar, deleteStar } from "../store/action/Star"

function Favorite() {
    const [displayButton,setDisplayButton]=useState(true)
    const arrayofstar = useSelector((state) => state.Star.Star) 
    const[deletehand,setDelete]=useState([])
    const disptach=useDispatch()

    // function Card({img, name, desc}) {
// 
    // console.log(props)
    // const[favitem,setfavitem] = useState([])
   
    // console.log(arrayofstar)
    // setfavitem(arrayofstar)

    // <div className="text-center container align-items-center mt-5 " style={{width: "18rem"}}>
    // {arrayofstar.map((favmov)=>{

    // })}

    // </div>
    const DeleteChangeHandler=(id)=>{
        setDelete([...deletehand, id]);

        disptach(deleteStar(id))
        // console.log(deletehand,'aa')
    }
    // const newdata = arrayofstar.filter((item) => !deletehand.includes(item.id));
    // disptach(changeStar(newdata))
    return(
        <div className="container-fluid bg-black ">
            <div className="row">
                
                {arrayofstar.map((movies, index) => {
                 return (
                    <div className="col-lg-3 col-md-6 position-relative " key={index}>
                   <Cardshow displayDelete={displayButton} onclick={DeleteChangeHandler} key={index} img={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} desc={movies.original_title} name={movies.title} id={movies.id} />
                    </div>
                 )
                //  <h1 key={index}> {company.name} </h1>
                
            })}

            </div>

        </div>

        
    )
}

export default Favorite