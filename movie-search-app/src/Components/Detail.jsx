import React from 'react'
import "../details.css"
function Detail({ selectedMovie }) {
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <div className='detail'>
            <h1>{selectedMovie.original_title}<a href={selectedMovie.homepage}/></h1>
            <div className='discription'>
                <div>
                    <img src={img_path + selectedMovie.poster_path} className='poster' />
                </div>
                <div>
                    <p>{selectedMovie.overview}</p>
                    <div className='details'>
                        <span>Release Date: {selectedMovie.release_date}</span>
                        <div className='company'>
                            <span>Production:</span>
                            {selectedMovie?.production_companies?.map((company, index) => (
                                <>
                                    <img key={index} src={img_path + company.logo_path} className='Production' />
                                    {/* <span>{company.name}</span> */}
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