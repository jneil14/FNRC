import React from 'react';
import CarouselImages from './CarouselImages';

function About() {
    return (
      <>
        <div className="about" id="about">
          <div className="about__text">
            <h2 className="about__text-title">Get to know us...</h2>
            <p className="about__text-para">
              We support internationally educated nurses (IENs) transition into
              Canadian Nursing by providing mentorship program for CELBAN, NCAS,
              NCLEX-RN and CPNRE.
            </p>
            <p className="about__text-para">
              At Footprints Nursing Review Center, we dedicate ourselves in
              helping you pursue and achieve a nursing career in Canada.
            </p>
            <p className="about__text-para">
              We are conveniently located in the downtown area of New
              Westminster, British Columbia just a few steps across Columbia
              Station.
            </p>
          </div>

          <CarouselImages />
        </div>
      </>
    );
}

export default About
