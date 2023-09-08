import React from 'react';
import { react, node, mongo, css, html, jquery, javascript } from '../Datos/svgs'
const Proyecto=( { href, src, texto, code, descripcion, tecnology } ) => {
  const grupo = {
    react,
    node,
    mongo,
    html,
    css,
    javascript,
    jquery,
  }
  
  return(
      <div className='proyecto proyecto-titulo' data-texto={texto}>
        <h6>{texto}</h6>

        <img className='proyecto-img' loading='lazy' alt={texto} src={src} />
        
        <div>
            <a href={code}>Ver Código</a>
            <a href={href} rel="noreferrer" target='_blank'>Ver Demo</a>
        </div> 
        <div>
          
        </div>
        <div>
        {tecnology && (
            tecnology.map((x,i) => <li key={i}>
              {grupo[x]}
            </li>))
          }
        </div>
      </div>                
    
  )
}

export default Proyecto;