import React from 'react';

const Skillset = ( { src,id,alt,tooltip,texto } ) => {

    return(
    <div>
    <img id={id} target='_blank' src={src} rel='noreferrer' alt={alt} />
    <span id={tooltip}>{texto}</span>
    </div>
    )
}               

export default Skillset;