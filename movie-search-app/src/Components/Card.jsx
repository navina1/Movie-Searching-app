import React from 'react'
import "../card.css"
function Card() {
  return (
    <>
        <div className='movie'>
            <img src='../../poster.jpg' className='poster'/>
            <div className='movieDetails'>
                <div className='box'>
                    <h4 className='title'>Titlerttygrfvdvcdscscssscs</h4>
                    <p className='ratings'>9.7</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card