import React from "react";
import TomaDoggyImage from "../images/tomadoggy.png";
import RecipeBuilder from "../images/recipebuilder.png";
import WorkdayPlanner from "../images/workdayplanner.png";
import PasswordGenerator from "../images/passwordgenerator.png";
import Triptinerary from "../images/triptinerary.png";
import "../Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


function Portfolio() {
    
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

  return (
    <div id="flexing">   
       <div id="carouselspacing"> 
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <a href="https://toma-doggy.herokuapp.com/" target="_blank" rel="noreferrer"><img
            className="d-block w-100"
            src={TomaDoggyImage}
            alt="First slide"
            /></a>
            
            <Carousel.Caption>
            <div className="textbox">
            <h3>TomaDoggy</h3>
            <p>Adopt a virtual pet in this website inspired by the Tomagotchi.</p>
            <p>Utilizes JavaScript, Node.js, Express.js, Handlebars.js, MySQL, Sequelize.js</p>
            <a className="gitlink" href="https://github.com/Toma-doggy/toma-doggy" target="_blank" rel="noreferrer">Github repository</a>
            </div>
            </Carousel.Caption>
            </Carousel.Item>
        <Carousel.Item>
        <a href="https://recipebuilder.github.io/recipe-builder/" target="_blank" rel="noreferrer"><img
            className="d-block w-100"
            src={RecipeBuilder}
            alt="Second slide"
            /></a>
            <Carousel.Caption>
            <div className="textbox">  
            <h3>Recipe Builder</h3>
            <p>A website for discovering new recipes.</p>
            <p>Utilizes HTML, CSS, JavaScript, Materialize, Spoonacular API</p>
            <a className="gitlink" href="https://github.com/RecipeBuilder" target="_blank" rel="noreferrer">Github repository</a>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://samibyers.github.io/workday-planner/" target="_blank" rel="noreferrer"><img
            className="d-block w-100"
            src={WorkdayPlanner}
            alt="Third slide"
            /></a>
            <Carousel.Caption>
            <div className="textbox">  
            <h3>Workday Planner</h3>
            <p>A planner for the work week.</p>
            <p>Utilizes HTML, CSS, JavaScript</p>
            <a className="gitlink" href="https://github.com/samibyers/workday-planner" target="_blank" rel="noreferrer">Github repository</a>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://samibyers.github.io/random_password_generator/" target="_blank" rel="noreferrer"><img
            className="d-block w-100"
            src={PasswordGenerator}
            alt="Fourth slide"
            /></a>
            <Carousel.Caption>
            <div className="textbox">  
            <h3>Password Generator</h3>
            <p>A custom password generator.</p>
            <p>Utilizes HTML, CSS, JavaScript</p>
            <a className="gitlink" href="https://github.com/samibyers/random_password_generator" target="_blank" rel="noreferrer">Github repository</a>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://triptinerary.herokuapp.com/" target="_blank" rel="noreferrer"><img
            className="d-block w-100"
            src={Triptinerary}
            alt="Fifth slide"
            /></a>
            <Carousel.Caption>
            <div className="textbox">  
            <h3>Triptinerary</h3>
            <p>Create and explore custom itineraries from other users.</p>
            <p>Utilizes HTML, CSS, JavaScript, React.js, Node.js, MongoDB</p>
            <a className="gitlink" href="https://github.com/Triptinerary" target="_blank" rel="noreferrer"> Github repository</a>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
     </div>
    </div>

  );
}

export default Portfolio;