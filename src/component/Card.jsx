
function Card(props) {
    // function Card({img, name, desc}) {
// 
    // console.log(props)
    // const id =props.id
    // const star = useSelector((state) => state.Star.Star)
    // const filterres = star.filter(item => item.id == id);
    // const isFav= filterres.length > 0 ? "solid" : "regular";

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
                </div>
                {/* <i className={fa-${isFav} fa-3x fa-star}> */}

            </div>
        
        </>
    )
}


export default Card