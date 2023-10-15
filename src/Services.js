import React from 'react';
import './Services.css';
import cat from "./assets/cat.jpg"
import istock from "./assets/istockphoto-1417882544-1024x1024.jpg"
import src3 from "./assets/beautiful-ginger-cat.jpg"
import src4 from "./assets/istockphoto-1277453154-1024x1024.jpg"
import src5 from "./assets/istockphoto-1417882544-1024x1024.jpg"
import src6 from "./assets/istockphoto-1503385646-1024x1024.jpg"
import src7 from "./assets/istockphoto-1543543490-1024x1024.jpg"
import src8 from "./assets/istockphoto-464494088-1024x1024.jpg"

const servicesData = [
    {
      id: 1,
      name: 'Vaccination',
      image: src3,
      price: 50,
      rating: 3.5,
    },
    {
      id: 2,
      name: 'Pet Checkup',
      image: src4,
      price: 75,
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Grooming',
      image: src5,
      price: 60,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Dental Care',
      image: src6,
      price: 80,
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Surgery',
      image: src7,
      price: 150,
      rating: 4.4,
    },
    {
      id: 6,
      name: 'Microchipping',
      image: src8,
      price: 45,
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Behavioral Training',
      image: cat,
      price: 70,
      rating: 4.6,
    },
    {
      id: 8,
      name: 'Boarding',
      image: istock,
      price: 65,
      rating: 4.3,
    },
    {
      id: 9,
      name: 'Pet Insurance',
      image: src3,
      price: 90,
      rating: 4.5,
    },
    {
      id: 10,
      name: 'Emergency Care',
      image: src5,
      price: 120,
      rating: 4.8,
    },
  ];
  

const Services = () => {
  return (
    
    <div className="services-container">
      {servicesData.map((service) => (
        <div className="service-card" key={service.id}>
          <div className="card-content">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>${service.price}</p>
            <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
  <span key={index} className={index < service.rating ? 'filled' : ''}>
    &#9733;
  </span>
))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
