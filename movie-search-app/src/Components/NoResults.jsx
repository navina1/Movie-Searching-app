import React from 'react'
import NoresultImg from "./no-results.png";
import "../noresult.css"
function NoResults() {
  return (
    <div className='main-container'>
        <h4 className="text-center">No Results Found</h4>
        <img className='poster-container' src={NoresultImg} alt='no results'/>
    </div>
  )
}

export default NoResults