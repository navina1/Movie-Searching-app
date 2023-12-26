import React, { useEffect, useState } from 'react';
import "../header.css";
import Card from './Card';
let apiKey = process.env.REACT_APP_API_KEY;
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/movie/popular?language=en-US&page=1/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b";
function Header() {
    const [urlData,setUrlData]=useState(url);
    const [movieData,setMovieData]=useState([]);
    const getMovie=()=>{
        console.log(apiKey)
        console.log(url)
        fetch(url).then(res=>res.json())
        .then(json=>console.log(json))
    }
    useEffect(()=>{
       getMovie()
    },[])
    return (
        <>
            <div className='header'>
                <nav>
                    <ul>
                        <li><a href='#'>Popular</a></li>
                        <li><a href='#'>Theatre</a></li>
                        <li><a href='#'>Drama</a></li>
                        <li><a href='#'>Kids</a></li>
                        <li><a href='#'>Comedie</a></li>
                    </ul>
                </nav>
                <form>
                    <div className='search'>
                        <input type='text' placeholder='Enter movie name' className='search-input'>
                        </input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className='container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Header