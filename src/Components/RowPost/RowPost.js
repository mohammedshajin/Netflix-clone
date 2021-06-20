import React, {useEffect,useState} from 'react'
import {imageUrl} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovie(response.data.results)
 
        }).catch(err=>{
            // alert('Network  Error')
        })
    }, [])
    return (
        <div className="row">
            <br />
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj)=>
                    <img src={`${imageUrl+obj.backdrop_path}`} alt="posters" className={props.isSmall ? "smallPoster":'poster'} />

                )}
            </div>
        </div>
    )
}

export default RowPost
