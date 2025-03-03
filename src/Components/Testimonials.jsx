import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const testimonials = [
  { name: "John Doe 1", rating: 5, text: "Geniale Lösung! Ich habs hauptsächlich zum Einarbeiten genutzt. Unser Azubi hat schnell ein Gefühl für sinnvolle Vertragskombinationen bekommen" },
  { name: "John Doe 2", rating: 4, text: "Ich bin überrascht wie gut die Logik funktioniert. Macht ständig Kombinationen, an die ich nicht denke und achtet selber auf die Provision. Hab damit richtig gut gearbeitet und neue Vertragskombinationen gefunden" },
  { name: "John Doe 2", rating: 4, text: "Mein erster Eindruck von Netznavi ist geprägt von positiver Überraschungen. Obwohl ich mich erst zurechtfinden musste habe ich mich mit dem Tool schnell eingefuchst. Nach zwei drei Versuchen hat alles geklappt und ich hab ein paar Standart Verträge durchgerechnet. Dann sogar komplizierte Kombis. Und grad mit mehreren Partnerkarten und Gigakombi kamen erstaunlich gute Ergebnisse, die mich und meine Mitarbeiter überraschten, da wir anders rechneten. Auch in der Praxis erweist sich die Nutzung als praktisch. Zu den Stoßzeiten konnten wir die Kunden deutlich schneller abarbeiten und haben die Warteschlange vermieden. Mein Fazit ist daher sehr positiv ausgefallen. Danke!" },
  { name: "John Doe 2", rating: 5, text: "Haben Netznavi jetzt zwei Wochen getestet und rückblickend war die Zeit sehr erfolgreich. Die Zielvorgaben vom Provider sind schon fast erfüllt, der Monat ist nichtmal um. Obwohl der Aufbau simpel erscheint, steckt eine Menge Überlegung und Detailarbeit drin." },
];

const Testimonial = ({ name, rating, text }) => (
  <div className="each-slide">
    <div className="testimonial-section-bottom">
      <p>{text}</p>
      <div className="testimonials-stars-container">
        {Array(rating).fill(<AiFillStar />)}
      </div>
      {/* <h2>{name}</h2> */}
    </div>
  </div>
);

const Testimonials = () => (
  <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Bewertungen</p>
      <h1 className="primary-heading">Was sagen sie?</h1>
      <p className="primary-text">
      Lesen Sie, was unsere Kunden über ihre Erfahrungen sagen
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
