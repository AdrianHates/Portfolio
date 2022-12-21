import React from 'react'

const Enlace = ( { href, text } ) => {
    return(     
        <a className='btn-show-all' href={href} rel='noreferrer noopener' target='_blank'>
          {text}<i className="fas fa-chevron-right"></i>
        </a>     
    )
  }

  export default Enlace;