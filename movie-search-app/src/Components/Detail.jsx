import React from 'react'
import "../details.css"
function Detail({ selectedMovie }) {
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <div className='detail'>
            <h1>{selectedMovie.original_title}<a href={selectedMovie.homepage} /></h1>
            <div className='discription'>
                <div className='poster-container'>
                    <img className="poster" src={img_path + selectedMovie.poster_path} className='poster' />
                </div>
                <div className='content-center'>
                    <div className='overview-container'>
                        <p>{selectedMovie.overview}</p>
                    </div>
                    <div className='details'>
                        <div className="company">
                            <span>Release Date: {selectedMovie.release_date}</span>
                        </div>
                        
                        <div className='company'>
                            <span>Production:</span>
                            {selectedMovie?.production_companies?.map((company, index) => (
                                <>
                                    <img key={index} src={img_path + company.logo_path} className='Production' />

                                </>
                            ))}
                        </div>
                        <div className="company">
                            <span>Rating:</span>{selectedMovie.vote_average}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detail