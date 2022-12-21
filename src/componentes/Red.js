import React from 'react';

const Red = ( { href, src } ) => {
    return(
        <a
      href={href}
      target="_blank"
      rel="noreferrer"
      ><img src={src} alt='icono' /></a>
    )
}

export default Red;