import React from "react";
import  "../AboutMe.css";

function AboutMe() {
  return (
    // <!--About me section-->
    <section className="body">
        <div className="h1">About me</div>
        <div id="card">
            <p>I am a Full Stack Web Developer with a background in Molecular Biology and professional experience in healthcare. I recently earned a certificate from the University of Washington in Full Stack Web Development, where I developed skills in JavaScript, CSS, React.js, responsive web design, and more.</p>
            <p>My Bachelor's degree in Molecular, Cellular, and Developmental Biology from the University of Washington taught me to think critically and creatively solve problems. My experience working in healthcare gave me excellent interpersonal and communication skills as well as quickly leaning new tasks and adapting to changing workplace pressures.</p>
            <p>When I am not coding, I enjoy bouldering, skiing, hiking, and spending time with my dog Corn and my cat Smudge.</p>
            <p>I'm excited to leverage skills I have learned through education and as a working professional in order to contribute to a fast-paced, quality driven team. Reach out to me with any of the links in the footer or navigate to my projects to check out some of my work.</p>
        </div>
    </section>
  );
}

export default AboutMe;