import React from 'react'
import { Link } from 'react-router-dom'

import img2 from '../../img/2.jpg'

import Button from '../../components/Button'
import GoBackLink from '../../components/GoBackLink'
import Footer from '../../components/Footer'

class last extends React.Component {
  render () {
    return (
      <div>
        <GoBackLink />

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h1 className="h1">The Last 100 Years</h1>
                <p>The generosity of those who believed in the mission of the Seminary funded the education Pastor Kelly began over 100 years ago. The individuals who made his education possible in the 20th Century never imagined the impact their contribution would have over 100 years later. They contributed in hopes of impacting someone’s educational experience. Those small gifts eventually blossomed into $30 million.</p>
                <p>Right: Pastor James Kelly preaches at St. John’s Lutheran Church at Easter time in 1955. After graduating from seminary in 1920, Pastor Kelly served Lutheran churches for 38 years.</p>
                <Link to="/next">
                  <Button text="Next: The Next 100 Years" icon="caret-right" />
                </Link>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="mainImg">
                  <img src={img2} className="img-fluid" alt="James Kelly preaches in 1955" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default last;
