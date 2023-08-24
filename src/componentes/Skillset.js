import React, { useState } from 'react';

const Skillset = ( { src,id,alt,tooltip,texto } ) => {
    const[ isHovered, setIsHovered ] = useState(false)

    function handleHover () {
        setIsHovered(true)
    }
    function handleOut () {
        setIsHovered(false)
    }

    return(
    <div>
    <img onMouseEnter={handleHover} onMouseLeave={handleOut} id={id} target='_blank' src={src} rel='noreferrer' alt={alt} />
    <span className={isHovered?'ver-span':''} id={tooltip}>{texto}</span>
    </div>
    )
}               

export default Skillset;