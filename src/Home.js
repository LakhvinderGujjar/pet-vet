import React from 'react';
import './Home.css';

import cat from "./assets/cat.jpg"
import istock from "./assets/istockphoto-1417882544-1024x1024.jpg"
import src3 from "./assets/beautiful-ginger-cat.jpg"
import src4 from "./assets/istockphoto-1277453154-1024x1024.jpg"
import src5 from "./assets/istockphoto-1417882544-1024x1024.jpg"
import src6 from "./assets/istockphoto-1503385646-1024x1024.jpg"
import src7 from "./assets/istockphoto-1543543490-1024x1024.jpg"
import src8 from "./assets/istockphoto-464494088-1024x1024.jpg"
const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <h1>Welcome to Our Pet Veterinary Shop</h1>
            </div>
            <div className="about">
                <h2>About Us</h2>
                <p>
                    We are a dedicated team of veterinarians and pet lovers who are committed to providing the
                    best care for your beloved pets. With years of experience, our clinic is well-equipped to
                    handle all types of pets, from dogs and cats to birds and exotic animals.
                </p>
            </div>
            {/* </div><div className="pet-images"> */}
            <div>
                <h2>Our Happy Patients</h2>
            </div>
            <div className="pet-images">
                <div className="pet-image">
                    <img src={cat}  />
                    <p>Buddy the cat is all smiles after a successful checkup.</p>
                    
                </div>
                <div className="pet-image">
                    <img src={istock} alt="Pet 2" />
                    <p>Meet Max, a happy and healthy Golden Retriever.</p>
                </div>
                {/* <div className="pet-image">
                    <img src={src3} alt="Pet 3" />
                    <p>Luna the Husky enjoying life with us!</p>
                </div> */}
            </div>
            <div className="services">
  <h2>Our Services</h2>
  <div className="service-cards">
    <div className="service-card">
      <img src={src4} alt="Vaccination" />
      <h3>Vaccination and Preventative Care</h3>
      <p>Keeping your pets healthy and protected.</p>
    </div>
    <div className="service-card">
      <img src={src5} alt="Emergency Services" />
      <h3>Emergency Services</h3>
      <p>We're here when you need us the most.</p>
    </div>
    <div className="service-card">
      <img src={src6} alt="Dental Health" />
      <h3>Dental Health</h3>
      <p>Ensuring bright smiles and fresh breath.</p>
    </div>
    <div className="service-card">
      <img src={src7} alt="Surgery" />
      <h3>Surgery</h3>
      <p>Skilled surgeons, compassionate care.</p>
    </div>
    <div className="service-card">
      <img src={src8} alt="Boarding and Grooming" />
      <h3>Boarding and Grooming</h3>
      <p>Your pets' home away from home.</p>
    </div>
  </div>
</div>

            <div className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial">
                    <p>
                        "I can't thank the team at the Pet Veterinary Shop enough for their exceptional care and
                        dedication. My pet has never been healthier!"
                    </p>
                    <p className="customer-name">— Jane Smith</p>
                </div>
                <div className="testimonial">
                    <p>
                        "The Pet Veterinary Shop is the only place I trust for my pets. The staff is friendly,
                        and the service is top-notch!"
                    </p>
                    <p className="customer-name">— John Doe</p>
                </div>
            </div>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <address>
                    123 Main Street<br />
                    Pet Town, USA<br />
                    Phone: (555) 123-4567<br />
                    Email: info@petvetshop.com
                </address>
            </div>
        </div>
    );
};

export default Home;
