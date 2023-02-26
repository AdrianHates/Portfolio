import React from 'react';

const Proyecto=( { href, src, texto, tecnologias } ) => {
  return(
         
      <a className='proyecto proyecto-titulo' data-texto={texto} data-tecnologias={tecnologias} href={href} rel="noreferrer" target='_blank'>
        <img className='proyecto-img' alt='Proyecto' src={src} />
      </a>                
    
  )
}

export default Proyecto;