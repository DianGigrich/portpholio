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
        <div className="m-3 p-5 card-body bg-white shadow rounded border border-secondary">
          <h3 className="card-title">About Me!</h3>
          <p className="card-text">
            I am a web developer. I have 7 chickens, 3 cats, 1 dog, and 1 medium-sized child.  They are all ridiculous in their own special ways. I am a DIYer and a project seamstress.  I have renovated a shed for chickens, a bathroom, done some questionable electical work, but I find that sewing is the most like coding- it's meticulous and sometimes it doesn't turn out right so you have to rip out the stitches and redo it a few times until it works as intended.
          </p>
          <p className="card-text">
            I play the piano and teach my daughter, who is mostly interested in learning Christmas music throughout the year. I am a cold body, so I always have on a sweater under my sweatshirt! You would think kitties would keep me warm, but alas, they are more into trouble than snuggles. I enjoy movie, computer and board games, and reading. Have you read Brandon Sanderson? He's really quite good.
          </p>
          <p className="card-text">
            I have been alive for 36 years, and am just now utilizing my potential... so lets go off on a big adventure!
          </p>

        </div>
      </article>
    </section >
  );
}

export default AboutMe;
