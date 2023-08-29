import React from 'react';

const Proyecto=( { href, src, texto, code, descripcion } ) => {
  return(
      <div className='proyecto proyecto-titulo' data-texto={texto}>
        <h6>{texto}</h6>

        <img className='proyecto-img' alt={texto} src={src} />
        
          <div>
            <a href={code}>View Code</a>
            <a href={href} rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        
      </div>                
    
  )
}

export default Proyecto;