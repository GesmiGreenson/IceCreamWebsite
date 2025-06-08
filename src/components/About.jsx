import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <div className="about-container">
        <section className="about-intro">
          <h2>About Sweet Scoops</h2>
          <p>
            At <strong>Sweet Scoops</strong>, we believe ice cream isn't just a dessert — it's a joyful experience meant to be shared. Since opening our doors in 2010, we've made it our mission to serve happiness, one scoop at a time.
          </p>
          <p>
            Crafted with the freshest ingredients, our small-batch ice creams blend timeless classics with inventive flavors inspired by local and seasonal delights. Each creation reflects our passion for quality, creativity, and community.
          </p>
          <p>
            Whether you're celebrating life's special moments or simply treating yourself, Sweet Scoops is your neighborhood destination for indulgence, comfort, and connection.
          </p>
        </section>

        <section className="about-values">
          <h3>Our Core Values</h3>
          <ul>
            <li><strong>Fresh Ingredients:</strong> Always natural, always delicious.</li>
            <li><strong>Community Spirit:</strong> We love the neighborhoods we serve.</li>
            <li><strong>Innovation:</strong> New flavors, new ideas, same love for ice cream.</li>
            <li><strong>Sustainability:</strong> Eco-friendly practices in every scoop.</li>
          </ul>
        </section>

        <section className="about-team">
          <h3>Meet the Team</h3>
          <p>
            Our team is a blend of passionate creators, scoopers, and flavor explorers who share a common goal — to make every visit to Sweet Scoops delightful. From the kitchen to the counter, every smile starts with a shared love of what we do.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
