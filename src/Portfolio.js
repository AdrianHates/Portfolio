import './App.css';
import React, { useEffect, useState, useRef, createContext } from 'react';
import Proyecto from './componentes/Proyecto';
import Enlace from './componentes/Enlace';
import Titulo from './componentes/Titulo';
import Contact from './componentes/Contact';
import Navbar from './componentes/Navbar';
/*Datos*/
import proyectos from './Datos/proyectos';
import ScrollReveal from 'scrollreveal';
import SimpleSlider from './componentes/Slider';

export const ElementsContext = createContext()
const navDash = [ {
  texto: 'Inicio',
  url: '#titulo'
}, {
  texto: 'Portfolio',
  url: '#portfolio'
}, {
  texto: 'Skills',
  url: '#skills'
}, {
  texto: 'Contacto',
  url: '#contacto'
}
 ]

function Portfolio () {
  const elementsRef = useRef([]);
  const [profesion, setProfesion] = useState('Desarrollador Frontend')
  const [nav, setNav] = useState(false)

  let i = 0;
 
  useEffect(() => {

    ScrollReveal().reveal('section', { distance: '20px', origin: 'bottom', duration: 500 });

    let a = document.getElementById('bloque').querySelector('h2');
    escribirFrase(a)
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 1000) {
        setNav(false)
      }
    })
  }, [])  
  const escribirFrase = (a) => {
    a.textContent += profesion.charAt(i); 
    i++;
  
    if (i < profesion.length) { 
      setTimeout(() => escribirFrase(a), 100); 
    } else if (i === profesion.length) { 
      setTimeout(() => {
        a.textContent = "";
        i = 0;
        escribirFrase(a);
      }, 1500);
    }
  }
  
  function toggleFunction () {
    setNav(!nav)
  }
    return (
      <ElementsContext.Provider value={ { elementsRef, nav } }>      
      <div id='todo'>        
        <Titulo id='titulo' name='Herless Oliver Ramos Espinoza' src='https://img.freepik.com/foto-gratis/sistema-html-concepto-sitio-web_23-2150376744.jpg?w=900&t=st=1692088754~exp=1692089354~hmac=6814e4dc6f6c90f627a4b52fa9bc5a97713cac502fa6f5585135c87086bcde63' />
        <Navbar navDash={navDash}/>     
        <section id='portfolio' ref={el => (elementsRef.current[1] = el)}>
          <p>PORTFOLIO</p>
          <hr id='he' />
          <div id='columnas'>          
            {proyectos.map((x,i)=><Proyecto key={i} src={x.src} href={x.href} descripcion={x.descripcion} texto={x.texto} code={x.code} />)}
         
          </div>
          <div id='enlace'>        
          <Enlace href='https://codepen.io/Fade-Out' text='Show all ' />
          </div>
        </section>        
        <section id='skills' ref={el => (elementsRef.current[2] = el)}>
          <p>SKILLSET</p>
          <hr className='hw' />
          {/*<div className='prueba'>
          */}
          <SimpleSlider />
        </section>
        <Contact id='contacto' />
        <footer>
        Developed and designed by Herless Oliver Ramos Espinoza. ©2022. All rights reserved.
        </footer>
        <div id='toggle' onClick={toggleFunction}>☰</div>
      </div>
      </ElementsContext.Provider>
    )
  
}


export default Portfolio;
