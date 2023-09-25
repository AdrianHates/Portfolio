import React, { useContext } from 'react';
import Red from './Red';
import { ElementsContext } from '../Portfolio';

const Contact = ( { id } ) => {
  const { elementsRef, idioma } = useContext(ElementsContext)

  return(
  <section id={id} ref={el => (elementsRef.current[3] = el)}>
      <p>{idioma==='ES'?'CONTACTO':'CONTACT'}</p>
      <hr className='hw' />
      <form action="https://formsubmit.co/kurono1807@gmail.com" method="POST" aria-labelledby='datos-contacto'>
        <div>
          <label htmlFor='email'>{idioma==='ES'?'Correo electrónico':'email'}:*</label><br />
          <input type='email' placeholder='Enter your email' name='email' required></input>
        </div>
        <div>
          <label htmlFor='mensaje'>{idioma==='ES'?'Mensaje':'Message'}:</label><br />
          <textarea name='mensaje' type='text' rows='5' cols='24' required></textarea>
        </div>
        <button type="submit">{idioma==='ES'?'Enviar':'Send'}</button>
      </form>
      <div>
      <Red src='https://i.imgur.com/oK8u0F1.png' href='https://www.facebook.com/HerlessOliverRamosEspinoza/'></Red>
      <Red src='https://www.xaviro.com/assets/e7a394e7937e0063e9d7.png' href='https://www.linkedin.com/in/herless-oliver-ramos-espinoza-08b237256/'></Red>
      <Red src='https://www.xaviro.com/assets/d5126c01a9950836e627.png' href='https://github.com/AdrianHates'></Red>
      <Red src='https://i.imgur.com/E4OCXOA.png' href='https://www.freecodecamp.org/herlessoliver'></Red>
      <Red src='https://static.vecteezy.com/system/resources/previews/010/892/357/non_2x/telephone-transparent-free-png.png' href='https://wa.me/+51914315964'></Red>
      </div>
  </section>
  )
}

export default Contact;