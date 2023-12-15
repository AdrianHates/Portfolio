import { useState, useEffect, useContext } from "react";
import { ElementsContext } from "../Portfolio";
import flecha from '../flecha.svg'
function Navegador( { logo, navDashEs, navDashEn } ) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [arrow, setArrow] = useState(false)
  const [link, setLink] = useState(null)
  const { elementsRef, nav, idioma, setIdioma, modo, setModo } = useContext(ElementsContext)

  useEffect(() => {
    const handleScroll = () => {
      const Yscroll = window.scrollY
      if ( Yscroll > 0) {
        setIsScrolled(true);
        setArrow(true)
      } else {
        setIsScrolled(false);
        setArrow(false)
      }

      elementsRef.current.forEach(section=> {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollY = window.scrollY;
        
        
        if(scrollY >= sectionTop - 60 && scrollY < sectionBottom) {
          setLink(section.id)
        }
      })
    };
    
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function Idioma() {
    if(idioma==='ES') {
      setIdioma('EN')
    }
    if(idioma === 'EN') {
      setIdioma('ES')
    }
  }

  function Modo() {
    const root = document.documentElement
    if(modo==='Dark') {
      setModo('Light')
      root.style.setProperty('--c-fondo-sky', "black")
      root.style.setProperty('--c-blanco', "black")
      root.style.setProperty('--c-navegador-letter', 'white')
    }
    if(modo === 'Light') {
      setModo('Dark')
      root.style.setProperty('--c-fondo-sky', "#316e8c")
      root.style.setProperty('--c-blanco', "white")
      root.style.setProperty('--c-navegador-letter', 'black')

    }
  }

  return(

    <>
    <nav id="navbar" className={`${nav?'toogle':''} ${isScrolled?'scrolled':''}`}>
      
      <div>
        <label htmlFor='change-language'style={{color:`white`}}>{idioma==='ES'? 'Idioma':'Language'}</label><button id='change-language' onClick={Idioma}>{idioma}</button>
      </div>
      <ul>
        {(idioma === 'ES'? navDashEs : navDashEn).map( (x,i) => <li key={i} >
            <a href={x.url} className={link===x.url.slice(1)?'active':''}>
              {x.texto}
            </a>
          </li>)}
      </ul>
    </nav>
    {
      arrow &&(<a href={idioma==='ES'?'#titulo':'#home'} id='arrow'>
        <img src={flecha} alt ='flecha' style={{width:'100%', padding:'.5rem'}} />
      </a> )
    }
    </>
  )
}

export default Navegador;