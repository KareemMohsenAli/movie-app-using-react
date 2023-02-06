import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import userEvent from "@testing-library/user-event"



function Navbar(){
    const starnav = useSelector((state) => state.Star.Star) // true
    // starnav.map((item, index) =>
    //       <li key={index}>Index is: {index}. User is {item.name}</li>
    //     )
    //     console.log(starnav)


    return(

        <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Movies</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <i class="fa-solid fa-cart-shopping mt-3"></i><div className="mt-2 " >{starnav.length}</div>
                {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li> */}
             
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar