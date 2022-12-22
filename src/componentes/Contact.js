import React from 'react';
import Red from './Red';

const Contact = ( { id } ) => {
  return(
  <div id={id}>
      <p>CONTACT</p>
      <hr className='hw' />
      <form id='formulario' action="https://formsubmit.co/kurono1807@gmail.com" method="POST" aria-labelledby='datos-contacto'>
        <div>
          <label htmlFor='email'>Email:*</label><br />
          <input type='email' placeholder='Enter your email' name='email' required></input>
        </div>
        <div>
          <label htmlFor='mensaje'>Message:</label><br />
          <textarea name='mensaje' type='text' rows='5' cols='24' required></textarea>
        </div>
        <button type="submit" value='Enviar'>Send</button>
      </form>
      <div>
      <Red src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png' href='https://www.facebook.com/HerlessOliverRamosEspinoza/'></Red>
      <Red src='https://www.xaviro.com/assets/e7a394e7937e0063e9d7.png' href='https://www.linkedin.com/in/herless-oliver-ramos-espinoza-08b237256/'></Red>
      <Red src='https://www.seekpng.com/png/full/119-1191363_share-button-how-to-twitter-symbol-in-circle.png' href='https://twitter.com/IoriYag81098860'></Red>
      <Red src='https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg' href='https://www.freecodecamp.org/herlessoliver'></Red>
      </div>
  </div>
  )
}

export default Contact;