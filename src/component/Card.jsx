import { useDispatch, useSelector } from "react-redux"
import { changeStar } from "../store/action/Star"
function Card(props) {
    // function Card({img, name, desc}) {
// 
    // console.log(props)
    const star = useSelector((state) => state.Star.Star) // true
    const dispath=useDispatch()
    const fav =(e)=>{
        // console.log(e.target.className)
        dispath(changeStar(e))
        e.target.className=`fa-solid fa-2x text-warning fa-regular fa-star position-absolute`
    }

    return(
        <>
            <div className="card text-bg-primary " style={{width: "18rem"}}>
                <img  src={props.img} className="card-img-top" alt="..." />
                {/* <img src={img} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title"> {props.name} </h5>
                    {/* <h5 className="card-title"> {name} </h5> */}

                    <p className="card-text"> {props.desc} </p>
                    {/* <p className="card-text"> {desc} </p> */}
                </div>
                <div className="d-flex justify-content-center">
                <i onClick={()=>fav()} className="fa-regular fa-star fa-2x "/>
                </div>

            </div>
        
        </>
    )
}


export default Card