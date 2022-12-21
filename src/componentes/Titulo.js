import React from 'react';

const Titulo = ({ id, name, trabajo,src }) => {
    return(
        <div id={id}>
        <div id='bloque'>
        <h1>{name}</h1>
        <hr id='hr' />
        <h3>{trabajo}</h3>
        </div>
        <img target='_blank' src={src} rel='noreferrer' alt='imagen animada' />
        </div>
    )
}

export default Titulo;