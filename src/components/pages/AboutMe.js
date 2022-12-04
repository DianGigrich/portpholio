import React from 'react';

function AboutMe() {
  return (
    <section className="container mt-3">
      <div className="border rounded p-5 bg-white bg-opacity-50">
        <div className="">
            {/* make sure i change this fontsize thing, its just an example of how to style inline */}
        <i className="" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
       I am a web developer. I have 9 chickens, 3 cats, 1 dog, and 1 child.  They are all ridiculous in their own special ways.
        </p>
        <p>
       I have been alive for 36 years.  It's strange to say that I am just now starting a career, but plenty of people do that after their kids are in school full time or they decide they don't like their current career.  So here we go, off on an adventure!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
