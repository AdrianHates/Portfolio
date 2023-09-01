import React, { useContext } from 'react';
import { ElementsContext } from "../Portfolio";
const Titulo = ({ id, name, src }) => {
  const { elementsRef } = useContext(ElementsContext)

    return(
        <div id={id} ref={el => (elementsRef.current[0] = el)}>
            <div id='bloque'>
              <div>
                <p><i>Bienvenido, me llamo</i></p>
                <h3>{name}</h3>
              
                <div>Soy<h2></h2><span id="cursor">|</span></div>
              
              <p> especializado en el desarrollo frontend. Mi enfoque se centra en crear experiencias de usuario excepcionales a través del diseño y la programación.</p>

              </div>

            </div>
            <div>
              <img target='_blank' src={src} rel='noreferrer' alt='imagen animada' />
            </div>
        </div>
    )
}

export default Titulo;