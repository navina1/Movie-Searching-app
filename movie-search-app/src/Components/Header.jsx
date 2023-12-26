import React from 'react';
import "../header.css";
import Card from './Card';
const apiKey = process.env.REACT_APP_API_KEY;
const base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+apiKey;
function Header() {
    
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