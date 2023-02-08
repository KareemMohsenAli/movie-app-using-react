
function Card(props) {
    // function Card({img, name, desc}) {
// 
    // console.log(props)


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

            </div>
        
        </>
    )
}


export default Card