import React from 'react'

import img4 from '../../img/4.jpg'

import Button from '../Button'

const YourPlaceSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <h1 className="h1">Your Place in the Story</h1>
            <p>The people who supported Pastor Kelly over 100 years ago had no idea where their contributions would lead.</p>
            <p>Who knows what God might be doing with our investments in theological education today? Who knows how our acts of stewardship will reverberate 100 years from now as theirs did?</p>
            <p>We don’t know the answers, but we do know this: we’re part of a story bigger than ourselves.</p>
            <p>We invite you to be a part of this story. Invest in United Lutheran Seminary today. Be a part of the next 100 years of theological education.</p>
            <p>Where is your place in the story?</p>
            <a href="http://www.uls.edu/giving" target="_blank" rel="noopener noreferrer">
              <Button text="Invest in United Lutheran Seminary" icon="caret-right" />
            </a>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="mainImg">
              <img src={img4} className="img-fluid" alt="United Lutheran Seminary: What is your place in the story?" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YourPlaceSection
