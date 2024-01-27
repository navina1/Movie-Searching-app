import React from 'react'
import NoresultImg from "../../public/no-results.png";
function NoResults() {
  return (
    <div>
        <h1 className="text-center">No Results Found</h1>
        <img src='NoresultImg' alt='no results'/>
    </div>
  )
}

export default NoResults