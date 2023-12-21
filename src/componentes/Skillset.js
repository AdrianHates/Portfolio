import React from "react";
import Skill from "./Skill";
export default function Skillset () {
  
    return (
      <div>
          <Skill texto='HTML' tooltip='tooltip1' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=740&t=st=1669328087~exp=1669328687~hmac=7d9f1baf3f744b23793fd984beb58aca6a52eac85c6ada01503db16ec383691e' id='html5' alt='html5' />
          <Skill texto='CSS' tooltip='tooltip2' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' id='css3' alt='css3' />
          <Skill texto='Javascript' tooltip='tooltip3' src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' id='js' alt='js' />
          <Skill texto='Python' tooltip='tooltip4' src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' id='python' alt='python' />
          <Skill texto='React' tooltip='tooltip5' src='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' id='react' alt='react' />
          <Skill texto='Node.js' tooltip='tooltip6' src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' id='node.js' alt='node.js' />
          <Skill texto='Relational Database' tooltip='tooltip7' src='https://icon-library.com/images/relational-database-icon/relational-database-icon-5.jpg' id='relationaldatabase' alt='RDatabase' />
          <Skill texto='TypeScript' tooltip='tooltip8' src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png' id='typescript' alt='typescript' />
      </div>
    )
  }
