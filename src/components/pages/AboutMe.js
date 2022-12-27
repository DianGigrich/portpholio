import React from 'react';
import dian from '../images/me.jpg'
import cat from "../images/little cat.jpg"

function AboutMe() {
  return (
    <section className="container d-flex row-center mt-3">
      <article className="row">
        <div className="col-md-auto">
          <img className="m-3 p-3 img-thumbnail bg-white bg-opacity-25 border shadow" src={dian} alt="Dian Gigrich " />
        </div>
        <div className="col">
          <img className="m-3 p-3 img-thumbnail bg-white bg-opacity-25 shadow" src={cat} alt="little kitty" />
        </div>
      </article>

      <article className="m-3 row align-items-center">
        <div className="m-3 p-5 card-body bg-white bg-opacity-75 shadow border border-secondary">
          <h3 className="card-title">About Me!</h3>
          <p className="card-text">
            I am a web developer. I have 7 chickens, 3 cats, 1 dog, and 1 child.  They are all ridiculous in their own special ways.
          </p>
          <p className="card-text">
            I enjoy movie, computer and board games.  I play the piano and teach my daughter, who is mostly interested in learning Christmas music throughout the year. I am a cold body, so I always have on a sweater under my sweatshirt! You would think kitties would keep me warm, but alas, they are more into trouble than snuggles.
          </p>
          <p className="card-text">
            I have been alive for 36 years.  It's strange to say that I am just now starting a career, but plenty of people do that after their kids are in school full time or they decide they don't enjoy their current career.  So lets go off on a big adventure!
          </p>

        </div>
      </article>
    </section >
  );
}

export default AboutMe;
