import { useState, useEffect, useContext } from "react";
import { ElementsContext } from "../Portfolio";
import flecha from '../flecha.svg'
function Navegador( { logo, navDash } ) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [arrow, setArrow] = useState(false)
  const [link, setLink] = useState(null)
  const { elementsRef, nav } = useContext(ElementsContext)

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
  return(

    <>
    <nav id="navbar" className={`${nav?'toggle':''} ${isScrolled?'scrolled':''}`}>
      
      <ul>
        {navDash.map( (x,i) => <li key={i} >
            <a href={x.url} className={link===x.url.slice(1)?'active':''}>
              {x.texto}
            </a>
          </li>)}
      </ul>
    </nav>
    {
      arrow &&(<a href='#titulo' id='arrow'>
        <img src={flecha} alt ='flecha' style={{width:'100%', padding:'.5rem'}} />
      </a> )
    }
    </>
  )
}

export default Navegador;