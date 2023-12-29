import React, { useEffect, useState } from 'react';
import "../header.css";
import Card from './Card';
import axios from "axios";
import Detail from './Detail';
let apiKey = process.env.REACT_APP_API_KEY;
let base_url="https://api.themoviedb.org/3";
let url=base_url+`/movie/popular?language=en-US&page=1/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;

function Header() {
    const [urlData,setUrlData]=useState(url);
    const [movieData,setMovieData]=useState([]);
    const [selectedMovie,setSelectedMovie]=useState();
    const [search,setSearch]=useState();
    const getData=(movieType)=>{
        setSelectedMovie("");
        setSearch(" ");
        if(movieType=="Popular")
        {
            url=base_url+`/movie/popular?language=en-US&page=1/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;
        }
        if(movieType=="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b";
        }
        if(movieType=="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b";
        }
        if(movieType=="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b";
        }
        if(movieType=="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b";
        }
        setUrlData(url)
    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=`https://api.themoviedb.org/3/search/movie?api_key=6e28fbfb04fe94d0a43b42b1b34a374b&query=${search}`;
            setUrlData(url);
        }
    }
    const getMovie=()=>{
        //console.log(apiKey)
        //console.log(url)
        fetch(urlData).then(res=>res.json())
        .then(data=>setMovieData(data))
    }
    const openDetail=(id)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`)
        .then((data) => {
            console.log(data.data)
            setSelectedMovie(data?.data)
        })
    }
    useEffect(()=>{
       getMovie()
    },[urlData])
    return (
        <>
            <div className='header'>
                <nav>
                    <ul>
                        <li><a href='#' name={"Popular"} onClick={(e)=>{getData(e.target.name)}}>Popular</a></li>
                        <li><a href='#' name={"Theatre"} onClick={(e)=>{getData(e.target.name)}}>Theatre</a></li>
                        <li><a href='#' name={"Kids"} onClick={(e)=>{getData(e.target.name)}}>Drama</a></li>
                        <li><a href='#' name={"Drama"} onClick={(e)=>{getData(e.target.name)}}>Kids</a></li>
                        <li><a href='#' name={"Comedie"} onClick={(e)=>{getData(e.target.name)}}>Comedie</a></li>
                    </ul>
                </nav>
                <form>
                    <div className='search'>
                        <input type='text' placeholder='Enter movie name' className='search-input' value={search} onKeyPress={searchMovie} onChange={(e)=>{setSearch(e.target.value)}}>
                        </input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className='container'>
                {selectedMovie ? <Detail selectedMovie={selectedMovie}/>
                : (movieData.length === 0 ? <p className="notfound">Not Found</p>
                    : movieData?.results.map((data, index) => (
                    <Card key={index} data={data} openDetail={openDetail} />
                    ))
                )
                }
            </div>

        </>
    )
}

export default Header