import React, { useContext } from 'react';
import { ElementsContext } from '../Portfolio';
import { react, node, mongo, css, html, jquery, javascript, liquid, python, typescript, postgresql } from '../Datos/svgs'
const Proyecto=( { href, src, texto, code, descripcion, tecnology } ) => {
  const grupo = {
    react,
    node,
    mongo,
    html,
    css,
    javascript,
    jquery,
    liquid,
    python,
    typescript,
    postgresql
  }
  
  const { idioma } = useContext(ElementsContext)
  return(
      <div className='proyecto proyecto-titulo' data-texto={texto}>
        <h6>{texto}</h6>

        <img className='proyecto-img' loading='lazy' alt={texto} src={src} />
        
        <div>
            {/*<a href={code} style={{background: !code?'linear-gradient(to right, #f3f3f3, #c0c0c0)':'', color: !code?'gray':''}} >{idioma==='ES'?'Ver Código':'View Code'}</a>*/}
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