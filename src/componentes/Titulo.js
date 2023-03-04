import React from 'react';

const Titulo = ({ id, name, src }) => {

    return(
        <div id={id}>
        <div id='bloque'>
        <h1><i style={{fontSize:'20px', fontWeight:'400'}}>Bienvenido, me llamo</i><br></br>{name}</h1>
        <hr id='hr' />
        <div>
            <h3></h3><span id="cursor">|</span>
        </div>
        </div>
        <img target='_blank' src={src} rel='noreferrer' alt='imagen animada' />
        </div>
    )
}

export default Titulo;