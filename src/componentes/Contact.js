import React, { useContext } from 'react';
import Red from './Red';
import { ElementsContext } from '../Portfolio';

const Contact = ( { id } ) => {
  const { elementsRef } = useContext(ElementsContext)

  return(
  <div id={id} ref={el => (elementsRef.current[3] = el)}>
      <p>CONTACT</p>
      <hr className='hw' />
      <form action="https://formsubmit.co/kurono1807@gmail.com" method="POST" aria-labelledby='datos-contacto'>
        <div>
          <label htmlFor='email'>Email:*</label><br />
          <input type='email' placeholder='Enter your email' name='email' required></input>
        </div>
        <div>
          <label htmlFor='mensaje'>Message:</label><br />
          <textarea name='mensaje' type='text' rows='5' cols='24' required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div>
      <Red src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png' href='https://www.facebook.com/HerlessOliverRamosEspinoza/'></Red>
      <Red src='https://www.xaviro.com/assets/e7a394e7937e0063e9d7.png' href='https://www.linkedin.com/in/herless-oliver-ramos-espinoza-08b237256/'></Red>
      <Red src='https://www.xaviro.com/assets/d5126c01a9950836e627.png' href='https://github.com/AdrianHates'></Red>
      <Red src='https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg' href='https://www.freecodecamp.org/herlessoliver'></Red>
      <Red src='https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png' href='https://wa.me/+51914315964'></Red>
      </div>
  </div>
  )
}

export default Contact;