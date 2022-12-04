import React from 'react';
import dian from '../images/me.jpg'
import cat from "../images/little cat.jpg"

function AboutMe() {
  return (
    <section className="d-flex container row mt-3">
      <div className="d-flex col">
        <img className="border rounded shadow" src={dian} alt="photo of Dian Gigrich " />
      </div>
      <div className="d-flex col border rounded shadow p-5 bg-white bg-opacity-50">
        <div>
          <img className="p-3 border rounded shadow" src={cat} alt="little kitty" />
        </div>
        <div className="row p-3">
          <p>
            I am a web developer. I have 9 chickens, 3 cats, 1 dog, and 1 child.  They are all ridiculous in their own special ways.
          </p>
          <p>
            I enjoy movie, computer and board games.  I play the piano and teach my daughter, who is mostly interested in learning Christmas music throughout the year. I am a cold body, so I always have on a sweater under my sweatshirt! You would think kitties would keep me warm, but alas, they are more into trouble than snuggles.
          </p>
          <p>
            I have been alive for 36 years.  It's strange to say that I am just now starting a career, but plenty of people do that after their kids are in school full time or they decide they don't enjoy their current career.  So lets go off on a big adventure!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
