import './App.css';
import React from 'react';
import Proyecto from './componentes/Proyecto';
import Enlace from './componentes/Enlace';
import Titulo from './componentes/Titulo';
import Skillset from './componentes/Skillset';
import Contact from './componentes/Contact';
import Navbar from './componentes/Navbar';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      es: 0
    };     
  }
 
  componentDidMount() { 
    
    this.style('html5','tooltip1')
    this.style('css3','tooltip2')
    this.style('js','tooltip3')
    this.style('react','tooltip4')
    this.style('node.js','tooltip5')
    this.style('relationaldatabase','tooltip6')
  
  }

  style=(n,m)=>{
    let doc1=document.getElementById(n);
    let doc2=document.getElementById(m);
    doc1.addEventListener('mouseover',()=>{
      doc2.style='top:-235px;transition:500ms;opacity:1'
    });
    doc1.addEventListener('mouseout', () => {
      doc2.style='top:-220px;opactity:1;transition:500ms'
    })
  }

  expandir=()=>{
    let a = this.state.es;
    document.getElementById('fixed').style.transitionDuration='500ms'
    if(a===0) {
    document.getElementById('fixed').style.height='130px';
    document.getElementById('butosky').style.backgroundColor='black'
    this.setState({es:1})   
    };
    if(a===1) {
      document.getElementById('fixed').style.height='0px';
      document.getElementById('butosky').style.backgroundColor='rgb(129,31,31)'
      this.setState({es:0})
    }
  }
  
  render () {
    
    return (      
      <div id='todo'>        
        <Titulo id='titulo' name='Herless Oliver Ramos Espinoza' src='https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg' trabajo='Desarrollador Frontend' />
        <Navbar onClick={this.expandir} />     
        <div id='portafolio'>
          <p>PORTFOLIO</p>
          <hr id='he' />
          <div id='columnas'>
          <Proyecto src='https://i.imgur.com/Unnw5k1.png' text='Proyecto1' href='https://adrianhates.github.io/WebTour/' />
          <Proyecto src='https://i.imgur.com/3o1GD0q.png' text='Proyecto2' href='https://adrianhates.github.io/E-commerceEasyShop' />
          <Proyecto src='https://i.imgur.com/eIazWJO.png' text='Proyecto3' href='https://adrianhates.github.io/Tetris/' />
          <Proyecto src='https://i.imgur.com/CJCc27h.png' text='Proyecto4' href='https://codepen.io/Fade-Out/pen/VwdraWV' />
          <Proyecto src='https://i.imgur.com/mBLN4mR.png' text='Proyecto5' href='https://codepen.io/Fade-Out/pen/dyKGNJO' />
          <Proyecto src='https://i.imgur.com/aau1G4X.png' text='Proyecto6' href='https://codepen.io/Fade-Out/pen/PoaozoV' />
          <Proyecto src='https://i.imgur.com/nsc1SSF.png' text='Proyecto7' href='https://codepen.io/Fade-Out/full/MWBGrvd' />
          <Proyecto src='https://imgur.com/G0ebZTb.png' text='Proyecto8' href='https://codepen.io/Fade-Out/full/KKeOrEY' />
          <Proyecto src='https://i.imgur.com/aSj5djG.png' text='Proyecto9' href='https://codepen.io/Fade-Out/pen/VwdzLjO' />
          <Proyecto src='https://i.imgur.com/JXMdTmi.png' text='Proyecto10' href='https://codepen.io/Fade-Out/pen/MWXOZYL' />
          
         
          </div>
          <div id='enlace'>        
          <Enlace href='https://codepen.io/Fade-Out' text='Show all ' />
          </div>
        </div>        
        <div id='skills'>
          <p>SKILLSET</p>
          <hr className='hw' />
          <div>
          <Skillset texto='HTML' tooltip='tooltip1' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=740&t=st=1669328087~exp=1669328687~hmac=7d9f1baf3f744b23793fd984beb58aca6a52eac85c6ada01503db16ec383691e' id='html5' alt='html5' />
          <Skillset texto='CSS' tooltip='tooltip2' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' id='css3' alt='css3' />
          <Skillset texto='Javascript' tooltip='tooltip3' src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' id='js' alt='js' />
          <Skillset texto='React' tooltip='tooltip4' src='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' id='react' alt='react' />
          <Skillset texto='Node.js' tooltip='tooltip5' src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' id='node.js' alt='node.js' />
          <Skillset texto='Relational Database' tooltip='tooltip6' src='https://icon-library.com/images/relational-database-icon/relational-database-icon-5.jpg' id='relationaldatabase' alt='RDatabase' />
          </div>
        </div>
        <Contact id='contacto' />
        <footer>
        Developed and designed by Herless Oliver Ramos Espinoza. ©2022. All rights reserved.
        </footer>
      </div>
    )
  }
}


export default Portfolio;
