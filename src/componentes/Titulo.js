import React, { useContext } from 'react';
import { ElementsContext } from "../Portfolio";
const Titulo = ({ id, name, src }) => {
  const { elementsRef, idioma } = useContext(ElementsContext)

    return(
        <div id={id} ref={el => (elementsRef.current[0] = el)}>
            <div id='bloque'>
              <div>
                <p>{idioma==='ES'?'Hola, mi nombre es':'Hello my name is'}</p>              
                <div><h3></h3><span id="cursor">|</span></div>
              
              <p>{idioma==='ES'?'Soy desarrollador frontend especializado en el desarrollo web. Mi enfoque se centra en la mejora continua de mis habilidades, siempre buscando oportunidades para innovar y crear soluciones excepcionales.':'I am a frontend developer specialized in web development. My focus is on continuous improvement of my skills, always looking for opportunities to innovate and create exceptional solutions.'}</p>

              </div>

            </div>
            <div>
              <img target='_blank' src={src} rel='noreferrer' alt='imagen animada' />
            </div>
        </div>
    )
}

export default Titulo;