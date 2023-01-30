import React from 'react';

const Navbar = ( { onClick } ) => {
    return(
        <div id='navbar'>
              <div id='nombre'>
                <a href='/Portfolio/'>
                <span>
                  Herless Oliver Ramos Espinoza<small>Desarrollador Frontend</small>
                </span>
                </a>
                <button id='butosky' onClick={onClick}>☰</button>
              </div>
              <ul id='fixed'>
              <li><a href='#portafolio'>Portfolio</a></li>
              <li><a href='#skills'>Skillset</a></li>
              {/*<li><a>Experience</a></li>*/}
              <li><a href='#contacto'>Contact</a></li>
              </ul>
        </div>   
    )
}

export default Navbar