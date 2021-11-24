import React from "react";
import TomaDoggyImage from "../images/tomadoggy.png";
import RecipeBuilder from "../images/recipebuilder.png";
import WorkdayPlanner from "../images/workdayplanner.png";
import PasswordGenerator from "../images/passwordgenerator.png";
import "../Portfolio.css";

function Portfolio() {
  return (
    // <!--Work section-->
    <section>
        <h1>Work</h1>
        <div>
            <div>
                <a href="https://toma-doggy.herokuapp.com/" target="_blank"><img className="img" src={TomaDoggyImage}></img></a>
                <div>
                    <h3>Toma-Doggy</h3>
                    <p>Adopt a virtual pet!</p>
                    
                    <p><a href="https://github.com/Toma-doggy/toma-doggy" target="_blank">Github repository link</a>
                    </p>
                </div>
            </div>   
            <div>
                <a href="https://samibyers.github.io/workday-planner/" target="_blank"><img className="img" src={WorkdayPlanner}></img></a>
                <div>
                    <h3>Worday Planner</h3>
                    <p>A simple planner for the work week</p>
                    
                    <p><a href="https://github.com/samibyers/workday-planner" target="_blank">Github repository link</a></p>
                </div>
            </div>
            <div>
                <a href="https://samibyers.github.io/random_password_generator/" target="_blank"><img className="img" src={PasswordGenerator}></img></a>
                <div>
                    <h3>Password Generator</h3>
                    <p>Build a custom random password</p>
                    
                    <p><a href="https://github.com/samibyers/random_password_generator" target="_blank">Github repository link</a></p>
                </div>
            </div>
            <div>
                <a href="https://recipebuilder.github.io/recipe-builder/" target="_blank"><img className="img" src={RecipeBuilder}></img></a>
                <div>
                    <h3>Recipe Builder</h3>
                    <p>A website for finding recipes</p>
                    
                    <p><a href="https://github.com/RecipeBuilder/recipe-builder" target="_blank">Github repository link</a></p>
                </div>
            </div>
            <div>
                <a href="https://samibyers.github.io/random_password_generator/" target="_blank"><img className="img" src={PasswordGenerator}></img></a>
                <div>
                    <h3>Password Generator</h3>
                    <p>Build a custom random password</p>
                    
                    <p><a href="https://github.com/samibyers/random_password_generator" target="_blank">Github repository link</a></p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;