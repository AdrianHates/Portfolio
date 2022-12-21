import React from 'react';

const Proyecto=( { href, src,texto } ) => {
  return(
         
      <a className='proyecto proyecto-titulo' href={href} rel="noreferrer" target='_blank'>
        <img className='proyecto-img' alt='Proyecto' src={src} />
        <p className='proyecto-titulo'>
            <span>
              {texto}
            </span>
        </p>
      </a>                
    
  )
}

export default Proyecto;