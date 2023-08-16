import './App.css';
import React, { useEffect, useState, useRef, createContext } from 'react';
import Proyecto from './componentes/Proyecto';
import Enlace from './componentes/Enlace';
import Titulo from './componentes/Titulo';
import Skillset from './componentes/Skillset';
import Contact from './componentes/Contact';
import Navbar from './componentes/Navbar';
/*Datos*/
import proyectos from './Datos/proyectos';
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
    style('html5','tooltip1')
    style('css3','tooltip2')
    style('js','tooltip3')
    style('react','tooltip4')
    style('node.js','tooltip5')
    style('relationaldatabase','tooltip6')
    style('typescript','tooltip7')
    let a = document.getElementById('bloque').querySelector('h2');
    escribirFrase(a)
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 1000) {
        setNav(false)
      }
    })
  }, [])  
  const escribirFrase = (a) => {
    a.textContent += profesion.charAt(i); // 
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

  const style=(n,m)=>{
    let doc1=document.getElementById(n);
    let doc2=document.getElementById(m);
    doc1.addEventListener('mouseover',()=>{
      doc2.style='top:-235px;transition:500ms;opacity:1'
    });
    doc1.addEventListener('mouseout', () => {
      doc2.style='top:-220px;opactity:1;transition:500ms'
    })
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
            {proyectos.map((x,i)=><Proyecto key={i} src={x.src} href={x.href} alt={x.texto} />)}
         
          </div>
          <div id='enlace'>        
          <Enlace href='https://codepen.io/Fade-Out' text='Show all ' />
          </div>
        </section>        
        <section id='skills' ref={el => (elementsRef.current[2] = el)}>
          <p>SKILLSET</p>
          <hr className='hw' />
          <div>
          <Skillset texto='HTML' tooltip='tooltip1' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=740&t=st=1669328087~exp=1669328687~hmac=7d9f1baf3f744b23793fd984beb58aca6a52eac85c6ada01503db16ec383691e' id='html5' alt='html5' />
          <Skillset texto='CSS' tooltip='tooltip2' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' id='css3' alt='css3' />
          <Skillset texto='Javascript' tooltip='tooltip3' src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' id='js' alt='js' />
          <Skillset texto='React' tooltip='tooltip4' src='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' id='react' alt='react' />
          <Skillset texto='Node.js' tooltip='tooltip5' src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' id='node.js' alt='node.js' />
          <Skillset texto='Relational Database' tooltip='tooltip6' src='https://icon-library.com/images/relational-database-icon/relational-database-icon-5.jpg' id='relationaldatabase' alt='RDatabase' />
          <Skillset texto='TypeScript' tooltip='tooltip7' src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png' id='typescript' alt='typescript' />
          </div>
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
