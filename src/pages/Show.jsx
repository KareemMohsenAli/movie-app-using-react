import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cardshow from '../component/Cardshow'

export default function Show(props) {

    const [moviecarries, setComponies] = useState({})

    const params = useParams()
 const Cid = params.id
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${Cid}`, {
            params: {

                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })
        .then((data) => setComponies(data.data))

        .catch((err) => console.log(err))
    },[])
    
  return (
    <>
    {/* {console.log(props)} */}
     <Cardshow img={`https://image.tmdb.org/t/p/w500/${moviecarries.poster_path}`} desc={moviecarries.original_title} name={moviecarries.title} />   

    </>
  )
}

