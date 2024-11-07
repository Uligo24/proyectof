import React from 'react';
import './firstscreen.css'; 

function FirstScreen() {
  return (
    <div className="first-screen-container">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#cars" className="nav-link">Cars</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero-section" aria-label="Hero section for car sales">
        <h1>Find Your Dream Car</h1>
        <p>Browse through our wide selection of cars and find the one that suits you best.</p>
      </section>

      <section id="cars" className="car-gallery">
        <h2>Our Top Cars</h2>
        <div className="car-cards">
          <div className="car-card" role="article">
            <img src="car1.jpg" alt="Sedan car model 2023" className="car-image"/>
            <h3>Sedan 2023</h3>
            <p className="price">$25,000</p>
            <button className="buy-button">Buy Now</button>
          </div>
          <div className="car-card" role="article">
            <img src="car2.jpg" alt="SUV car model 2023" className="car-image"/>
            <h3>SUV 2023</h3>
            <p className="price">$35,000</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 CarSales. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default FirstScreen;
