import React from 'react';
import './Home.css';
import logo from './icelogo.png'

const featuredFlavors = [
  {
    name: 'Classic Vanilla',
    description: 'Smooth and creamy with a rich vanilla flavor.',
    image: 'https://th.bing.com/th/id/OIP.asVLkC6mKcHARndn6bKsfAHaLH?r=0&w=924&h=1387&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Chocolate Fudge',
    description: 'Decadent chocolate with fudge swirls.',
    image: 'https://i.pinimg.com/originals/49/d8/45/49d845dac22032600d2def4774bda6d0.jpg',
  },
  {
    name: 'Strawberry Delight',
    description: 'Fresh strawberries mixed into creamy ice cream.',
    image: 'https://bitzngiggles.com/wp-content/uploads/2023/07/Strawberry-Cool-Whip-Salad-8-copy.jpg',
  },
];

const testimonials = [
  {
    name: 'Emily R.',
    feedback: 'Best ice cream in town! Always fresh and tasty.',
  },
  {
    name: 'Mark T.',
    feedback: 'Love the variety of flavors and friendly staff.',
  },
];

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
   <h1 className="brand-title">
  <img src={logo} alt="Sweet Scoops Logo" className="logo-img" />
  Frost & Bloom
</h1>

  <p className="tagline">Where every scoop tells a story!</p>
</header>

  <section className="hero">
  <div className="hero-content">
    <h2>Welcome to Your Happy Place!</h2>
    <p>
      Dive into our world of delightful flavors, handcrafted with love and the freshest ingredients. Whether you're a fan of the classics or love to try something new, Sweet Scoops has a treat waiting just for you!
    </p>
    <button>🍨 Explore Flavors</button>
  </div>
  <div className="hero-image">
    <img
      src="https://australiaexploring.com/wp-content/uploads/2021/08/Aqua-S-Sydney-1536x864.jpg"
      alt="Ice Cream Parlor"
    />
  </div>
</section>


      {/* Featured Flavors */}
      <section className="featured-flavors">
        <h2>Featured Flavors</h2>
        <div className="flavor-cards">
          {featuredFlavors.map((flavor) => (
            <div className="flavor-card" key={flavor.name}>
              <img src={flavor.image} alt={flavor.name} />
              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers">
        <h2>Special Deals</h2>
        <ul>
          <li>🍨 Buy 1 Get 1 Free on Tuesdays</li>
          <li>🎉 Free Scoop on Your Birthday</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        {testimonials.map((t, index) => (
          <blockquote key={index}>
            <p>"{t.feedback}"</p>
            <footer>- {t.name}</footer>
          </blockquote>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter and never miss a scoop!</p>
        <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      
    </div>
  );
}

export default Home;
