import React, { Component } from "react";
import Slider from "react-slick";
import Skillset from "./Skillset";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
     
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 150,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 4,
            }
          },{
            breakpoint: 450,
            settings: {
              slidesToShow: 3,
            }
          }
        ]


      };
    return (
      <div>
        <Slider {...settings}>
          <Skillset texto='HTML' tooltip='tooltip1' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=740&t=st=1669328087~exp=1669328687~hmac=7d9f1baf3f744b23793fd984beb58aca6a52eac85c6ada01503db16ec383691e' id='html5' alt='html5' />
          <Skillset texto='CSS' tooltip='tooltip2' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' id='css3' alt='css3' />
          <Skillset texto='Javascript' tooltip='tooltip3' src='https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png' id='js' alt='js' />
          <Skillset texto='Python' tooltip='tooltip4' src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' id='python' alt='python' />
          <Skillset texto='React' tooltip='tooltip5' src='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' id='react' alt='react' />
          <Skillset texto='Node.js' tooltip='tooltip6' src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' id='node.js' alt='node.js' />
          <Skillset texto='Relational Database' tooltip='tooltip7' src='https://icon-library.com/images/relational-database-icon/relational-database-icon-5.jpg' id='relationaldatabase' alt='RDatabase' />
          <Skillset texto='TypeScript' tooltip='tooltip8' src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png' id='typescript' alt='typescript' />

        </Slider>
      </div>
    );
  }
}
