import React from 'react';

const Proyecto=( { href, src, texto } ) => {
  return(
         
      <a className='proyecto proyecto-titulo' data-texto={texto} href={href} rel="noreferrer" target='_blank'>
        <img className='proyecto-img' alt={texto} src={src} />
      </a>                
    
  )
}

export default Proyecto;