import React from 'react'
import "../card.css"
function Card({data,openDetail}) {
    let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <>
        <div className='movie' onClick={(e)=>{openDetail(data.id)}}>
            <img src={img_path+data.backdrop_path} className='poster'/>
            <div className='movieDetails'>
                <div className='box'>
                    <h4 className='title'>{data.title}</h4>
                    <p className='ratings' style={{color:"black"}}>{data.vote_average > 0?data.vote_average.toFixed(1):data.vote_average}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card