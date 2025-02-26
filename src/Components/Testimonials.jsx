import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const testimonials = [
  { name: "John Doe 1", rating: 5, text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam." },
  { name: "John Doe 2", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam." }
];

const Testimonial = ({ name, rating, text }) => (
  <div className="each-slide">
    <div className="testimonial-section-bottom">
      <p>{text}</p>
      <div className="testimonials-stars-container">
        {Array(rating).fill(<AiFillStar />)}
      </div>
      <h2>{name}</h2>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Bewertungen</p>
      <h1 className="primary-heading">Was sagen sie?</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
    </div>
    <Slide arrows={true} infinite={true}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </Slide>
  </div>
);

export default Testimonials;
