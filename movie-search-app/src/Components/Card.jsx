import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import "../card.css";
import fallBackPoster from "../no-poster.png"
function Card({ data, openDetail }) {
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className='movie' onClick={(e) => { openDetail(data.id) }}>
                {data.title ? (
                    <>
                        <img src={data.backdrop_path ? img_path + data.backdrop_path : fallBackPoster} className='poster' />
                        <div className='movieDetails'>
                            <div className='box'>
                                <h4 className='title'>{data.title}</h4>
                                <p className='ratings' style={{ color: "black" }}>{data.vote_average > 0 ? data.vote_average.toFixed(1) : data.vote_average}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <Skeleton variant="rectangular" height={400} />
                )}

            </div>
        </>
    )
}

export default Card