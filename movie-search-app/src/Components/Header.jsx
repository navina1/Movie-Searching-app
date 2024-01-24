import React, { useEffect, useState } from 'react';
import { toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../header.css";
import Card from './Card';
import axios from "axios";
import Detail from './Detail';
import { Toogle } from './Toogle'
import { Skeleton } from '@mui/material';
import Skelton from './Skelton';
let apiKey = process.env.REACT_APP_API_KEY;
let base_url = "https://api.themoviedb.org/3";
let url = base_url + `/movie/popular?language=en-US&page=1/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;

function Header() {
    const [urlData, setUrlData] = useState(url);
    const [movieData, setMovieData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();
    const [search, setSearch] = useState();
    const [isDark, setIsDark] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const getData = (movieType) => {
        setSelectedMovie("");
        setSearch();
        setCurrentPage(1);
        if (movieType == "Popular") {
            url = base_url + `/movie/popular?language=en-US&page=${currentPage}/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;
        }
        if (movieType == "Theatre") {
            url = base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b";
        }
        if (movieType == "TopRated") {
            url = base_url + `/movie/top_rated?language=en-US&page=${currentPage}/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;
        }
        if (movieType == "Upcoming") {
            url = base_url + `/movie/upcoming?language=en-US&page=${currentPage}/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;
        }
        if (movieType == "NowPlaying") {
            url = base_url + `/movie/now_playing?language=en-US&page=${currentPage}/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`;
        }
        setUrlData(url)
    }
    // const searchMovie = (evt) => {
    //     setCurrentPage(1);
    //     if (search) {
    //         if (evt.key === "Enter") {
    //             url = `https://api.themoviedb.org/3/search/movie?api_key=6e28fbfb04fe94d0a43b42b1b34a374b&page=${currentPage}&query=${search}`;
    //             setUrlData(url);
    //         }
    //     } else {
    //         alert("Please enter a movie name!");
    //     }
    // }
    const searchMovie = (evt) => {
        setCurrentPage(1);
        if (search && evt.key === "Enter") {
            const newUrl = `https://api.themoviedb.org/3/search/movie?api_key=6e28fbfb04fe94d0a43b42b1b34a374b&page=${currentPage}&query=${search}`;
            setUrlData(newUrl);
        }
    };
    // const searchMovies = () => {
    //     setCurrentPage(1);
    //     if (search) {
    //         url = `https://api.themoviedb.org/3/search/movie?api_key=6e28fbfb04fe94d0a43b42b1b34a374b&page=${currentPage}&query=${search}`;
    //         setUrlData(url);
    //     } else {
    //         alert("Please enter a movie name!");
    //     }
    // }
    const searchMovies = () => {
        setCurrentPage(1);
        if (search) {
            const newUrl = `https://api.themoviedb.org/3/search/movie?api_key=6e28fbfb04fe94d0a43b42b1b34a374b&page=${currentPage}&query=${search}`;
            setUrlData(newUrl);
        } else {
           // alert("Please enter a movie name!");
           toast.error('Please enter a movie name!');
        }
    };
    const getMovie = async () => {
        //console.log(apiKey)
        //console.log(url)
        // fetch(urlData).then(res=>res.json())
        // .then(data=>setMovieData(data))
        try {
            const response = await axios.get(urlData);
            const results = response.data;
            setMovieData(results);
            setTotalPages(results?.total_pages);
        } catch (error) {
            //console.error('Error fetching data:', error);
            toast.error('An error occurred. Please try again later.');
        }
    }
    const openDetail = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US/&api_key=6e28fbfb04fe94d0a43b42b1b34a374b`)
            .then((data) => {
                //console.log(data.data)
                setSelectedMovie(data?.data)
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
                toast.error('An error occurred while fetching movie details. Please try again later.'
                );
            });
    }
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            setUrlData((prevUrl) => {
                // Replace the existing page number in the URL with the new page number
                return prevUrl.replace(/&page=\d+/, `&page=${newPage}`);
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    useEffect(() => {
        getMovie()
    }, [urlData])
    console.log(movieData)
    return (
        <div className='sample' data-theme={isDark ? "dark" : "light"}>
                <ToastContainer />
            <div className='header' data-theme={isDark ? "dark" : "light"}>
                <nav>
                    <ul>
                        <li><a href='#' name={"Popular"} onClick={(e) => { getData(e.target.name) }}>Popular</a></li>
                        {/* <li><a href='#' name={"Theatre"} onClick={(e)=>{getData(e.target.name)}}>Theatre</a></li> */}
                        <li><a href='#' name={"TopRated"} onClick={(e) => { getData(e.target.name) }}>Top-Rated</a></li>
                        <li><a href='#' name={"Upcoming"} onClick={(e) => { getData(e.target.name) }}>Upcoming</a></li>
                        <li><a href='#' name={"NowPlaying"} onClick={(e) => { getData(e.target.name) }}>Now-Playing</a></li>
                    </ul>
                </nav>
                <form onSubmit={(e) => { e.preventDefault(); searchMovies(); }}>
                    <div className='search'>
                        <input type='text' placeholder='Enter movie name' className='search-input' value={search} onKeyPress={searchMovie} onChange={(e) => { setSearch(e.target.value) }}>
                        </input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <Toogle ischecked={isDark} handleChange={() => setIsDark(!isDark)} />
            </div>
            <div className='container' data-theme={isDark ? "dark" : "light"}>
                {selectedMovie ? <Detail selectedMovie={selectedMovie} />
                    : (movieData.length === 0 ? <Skelton/>
                        : movieData?.results?.map((data, index) => (
                            <Card key={index} data={data} openDetail={openDetail} />
                        ))
                    )
                }
            </div>
            {!selectedMovie &&
            <div className='Pagination'> 
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
            }
         
        </div>
    )
}

export default Header