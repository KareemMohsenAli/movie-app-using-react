import { useState } from "react";

function Cardshow(props) {
  // function Card({img, name, desc}) {
  //
  // console.log(props)
  const deletedHander = () => {
    props.onclick(props.id);
  };

  return (
    <>
      <div
        className="card text-center bg-primary container align-items-center mt-5 "
        style={{ width: "18rem" }}
      >
        <div className="image">
          <img src={props.img} className="card-img-top" alt="..." />
        </div>
        {/* <img src={img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>
          {/* <h5 className="card-title"> {name} </h5> */}

          <p className="card-text"> {props.desc} </p>
          {/* <p className="card-text"> {desc} </p> */}
          <button className="btn btn-danger" onClick={deletedHander}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Cardshow;
