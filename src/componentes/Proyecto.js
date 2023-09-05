import React from 'react';

const Proyecto=( { href, src, texto, code, descripcion, tecnology } ) => {
  return(
      <div className='proyecto proyecto-titulo' data-texto={texto}>
        <h6>{texto}</h6>

        <img className='proyecto-img' loading='lazy' alt={texto} src={src} />
        
        <div>
            <a href={code}>Ver Código</a>
            <a href={href} rel="noreferrer" target='_blank'>Ver Demo</a>
        </div> 
        <div>
          {tecnology && (
            tecnology.map((x,i) => <li key={i}>
              {x}
            </li>))
          }
        </div>
      </div>                
    
  )
}

export default Proyecto;