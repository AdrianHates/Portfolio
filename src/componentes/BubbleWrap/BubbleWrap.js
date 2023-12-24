import './BubbleWrap.css'
import React from 'react'

export default function BubbleWrap ( { object } ) {
  return (
    <>
      {
        object && <div className='bubble-wrap'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>  
      }
    </>

    
  )
}