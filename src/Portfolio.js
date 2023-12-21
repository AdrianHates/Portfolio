import './App.css';
import React, { useEffect, useState, useRef, createContext } from 'react';
import Proyecto from './componentes/Proyecto';
import Enlace from './componentes/Enlace';
import Titulo from './componentes/Titulo/Titulo';
import Contact from './componentes/Contact';
import Navbar from './componentes/Navbar';
/*Datos*/
import { proyectos } from './Datos/datos';
import ScrollReveal from 'scrollreveal';
import SimpleSlider from './componentes/Slider';
export const ElementsContext = createContext()

const navDashEs = [ {
  texto: 'Inicio',
  url: '#titulo'
}, {
  texto: 'Portafolio',
  url: '#portafolio'
}, {
  texto: 'Habilidades',
  url: '#habilidades'
}, {
  texto: 'Contacto',
  url: '#contacto'
}
 ]

 const navDashEn = [ {
  texto: 'Home',
  url: '#home'
}, {
  texto: 'Portfolio',
  url: '#portfolio'
}, {
  texto: 'Skills',
  url: '#skills'
}, {
  texto: 'Contact',
  url: '#contact'
}
 ]
function Portfolio () {
  const elementsRef = useRef([]);
  const [profesion, setProfesion] = useState( 'Herless Oliver Ramos Espinoza')
  const [nav, setNav] = useState(false)
  const [idioma, setIdioma] = useState('ES')
  const [modo, setModo] = useState('Dark')
  const [filtro, setFiltro] = useState('all')
  const name = 'Herless Oliver Ramos Espinoza'
  let i = 0;
  let direction = 'derecha'
 
  useEffect(() => {

    ScrollReveal().reveal('section', { distance: '20px', origin: 'bottom', duration: 1000 });

    let a = document.getElementById('bloque').querySelector('p > span');
    escribirFrase(a)
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 1000) {
        setNav(false)
      }
    })
  }, [])  

  const escribirFrase = (a) => {
    if (i < profesion.length && direction === 'derecha') { 
      a.textContent += profesion.charAt(i); 
      i++;
      setTimeout(() => escribirFrase(a), 100); 
    } else if (i >= profesion.length && direction === 'derecha') {
      direction = 'izquierda'
      setTimeout(() => {          
        escribirFrase(a);
      }, 1000);
    } else if(direction === 'izquierda' && i >= 0) {
      a.textContent = a.textContent.slice(0, i)
      i--;
      setTimeout(() => escribirFrase(a), 100); 
    } else if(direction === 'izquierda' && i < 0) {
      direction = 'derecha'
      setTimeout(() => {          
        escribirFrase(a);
      }, 1000);
    }
  }
  
  function toggleFunction () {
    setNav(!nav)
  }

  function filterProyects(array) {
    if(filtro === 'all') {
      return array
    } else {
      return array.filter(x=> x.categoria === filtro)
    }     
  }
  function establecerFiltro(filtro) {
    setFiltro(filtro)
  }
    return (
      <ElementsContext.Provider value={ { elementsRef, nav, idioma, setIdioma, modo, setModo } }>      
      <div id='todo'>
        <Titulo id={`${idioma==='ES'?'titulo':'home'}`} name={name} src='https://img.freepik.com/foto-gratis/sistema-html-concepto-sitio-web_23-2150376744.jpg?w=900&t=st=1692088754~exp=1692089354~hmac=6814e4dc6f6c90f627a4b52fa9bc5a97713cac502fa6f5585135c87086bcde63' />
        <Navbar navDashEs={navDashEs} navDashEn={navDashEn} />    
        <section id={`${idioma==='ES'?'portafolio':'portfolio'}`} ref={el => (elementsRef.current[1] = el)}>
          <p>{idioma==='ES'?'PORTAFOLIO':'PORTFOLIO'}</p>
          <hr id='he' />
          <div>
            <div style={filtro==='all'? {color: 'white', backgroundColor:'var(--c-dorado-fino)', borderBottom: '2px solid var(--c-dorado-fino)'}:{}} onClick={()=>{establecerFiltro('all')}}>{idioma==='ES'?'Todo':'All'}</div>
            <div style={filtro==='web'? {color: 'white', backgroundColor:'var(--c-dorado-fino)', borderBottom: '2px solid var(--c-dorado-fino)'}:{}}  onClick={()=>{establecerFiltro('web')}}>{idioma==='ES'?'Web':'Web'}</div>
            <div style={filtro==='game'? {color: 'white', backgroundColor:'var(--c-dorado-fino)', borderBottom: '2px solid var(--c-dorado-fino)'}:{}}  onClick={()=>{establecerFiltro('game')}}>{idioma==='ES'?'Juego':'Game'}</div>
            <div style={filtro==='app'? {color: 'white', backgroundColor:'var(--c-dorado-fino)', borderBottom: '2px solid var(--c-dorado-fino)'}:{}}  onClick={()=>{establecerFiltro('app')}}>{idioma==='ES'?'Aplicación':'App'}</div>

          </div>
          <div id='columnas'>          
            {filterProyects(proyectos).map((x,i)=><Proyecto key={i} src={x.src} href={x.href} descripcion={x.descripcion} texto={x.texto} code={x.code} tecnology={x.tecnology}/>)}
          </div>
          {/*<div id='enlace'>        
          <Enlace href='https://codepen.io/Fade-Out' text={idioma==='ES'?'Mostrar':'Show All'} />
          </div>*/}
        </section>        
        <section id={`${idioma==='ES'?'habilidades':'skills'}`} ref={el => (elementsRef.current[2] = el)}>
          <p>{idioma==='ES'?'HABILIDADES':'SKILLSET'}</p>
          <hr className='hw' />
          {/*<div className='prueba'>
          */}
          <SimpleSlider />
        </section>
        <Contact id={`${idioma==='ES'?'contacto':'contact'}`} />
        <footer>
        {idioma==='ES'?`Desarrollado y diseñado por ${name}. ©2022. Todos los derechos reservados.`:`Developed and designed by ${name}. ©2022. All rights reserved.`}
        </footer>
        <div id='toggle' onClick={toggleFunction}>☰</div>
      </div>
      </ElementsContext.Provider>
    )
  
}

export default Portfolio;
