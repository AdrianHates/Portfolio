import { useState, useEffect, useContext } from "react";
import { ElementsContext } from "../Portfolio";

function Navegador( { logo, navDash } ) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [link, setLink] = useState(null)
  const { elementsRef, nav } = useContext(ElementsContext)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      elementsRef.current.forEach(section=> {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollY = window.scrollY;
        
        
        if(scrollY >= sectionTop && scrollY < sectionBottom) {
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


    <nav id="navbar" className={`${nav?'toggle':''} ${isScrolled?'scrolled':''}`}>
      
      <ul>
        {navDash.map( (x,i) => <li key={i} >
            <a href={x.url} className={link===x.url.slice(1)?'active':''}>
              {x.texto}
            </a>
          </li>)}
      </ul>
    </nav>
  )
}

export default Navegador;