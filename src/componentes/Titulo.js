import React, { useContext } from 'react';
import { ElementsContext } from "../Portfolio";
import { description } from '../Datos/datos';
const Titulo = ({ id, name, src }) => {
  const { elementsRef, idioma } = useContext(ElementsContext)

    return(
        <div id={id} ref={el => (elementsRef.current[0] = el)}>
            <div id='bloque'>
              <div>
                <p>{idioma==='ES'?'Hola, mi nombre es':'Hello my name is'}</p>              
                <div><h3></h3><span id="cursor">|</span></div>
              
              <p>{idioma==='ES'? description.es:description.en}</p>

              </div>

            </div>
        </div>
    )
}

export default Titulo;