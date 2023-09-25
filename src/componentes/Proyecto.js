import React, { useContext } from 'react';
import { ElementsContext } from '../Portfolio';
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
  
  const { idioma } = useContext(ElementsContext)
  return(
      <div className='proyecto proyecto-titulo' data-texto={texto}>
        <h6>{texto}</h6>

        <img className='proyecto-img' loading='lazy' alt={texto} src={src} />
        
        <div>
            <a href={code}>{idioma==='ES'?'Ver Código':'View Code'}</a>
            <a href={href} rel="noreferrer" target='_blank'>{idioma==='ES'?'Ver Demo':'Live Demo'}</a>
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