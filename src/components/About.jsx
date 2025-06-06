import React from 'react';

import { aboutText } from "../constants";

const About = () => {

  return (
    <section id="about">
      <div className="about__inner">
        <h1 className="about__title">{aboutText.title}</h1>
        <div className="about__lines" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        <div className="about__text">
            <div className="text">
              <div>
                <p>
                  {aboutText.desc[0]}
                </p>
              </div>
            </div>
        </div>
        <div className="about__lines bottom" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default About;