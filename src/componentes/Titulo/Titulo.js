import React, { useContext } from 'react';
import { ElementsContext } from "../../Portfolio";
import { description } from '../../Datos/datos';
import './Titulo.css'

const Titulo = ({ id, name, src }) => {
  const { elementsRef, idioma } = useContext(ElementsContext)

    return(
        <div id={id} ref={el => (elementsRef.current[0] = el)}>
            <div id='bloque'>
              <div>
                <p>{idioma==='ES'?'Hola, mi nombre es ':'Hello my name is '}<span></span><span id="cursor">|</span></p>
                
                <p>{idioma==='ES'? description.es[0]:description.en[0]}</p>
                <p>{idioma==='ES'? description.es[1]:description.en[1]}</p>
             

              </div>

            </div>
        </div>
    )
}

export default Titulo;