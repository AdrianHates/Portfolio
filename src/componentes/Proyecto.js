import React from 'react';

const Proyecto=( { href, src, texto, code, descripcion } ) => {
  return(
         
      <div className='proyecto proyecto-titulo' data-texto={texto}>
        <img className='proyecto-img' alt={texto} src={src} />
        <div>
          <h6>{texto}</h6>
          <p>{descripcion}</p>
          <div>
            <a href={code}>View Code</a>
            <a href={href} rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>                
    
  )
}

export default Proyecto;