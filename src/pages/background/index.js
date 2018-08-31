import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../img/1.jpg'

import Button from '../../components/Button'
import GoBackLink from '../../components/GoBackLink'
import Footer from '../../components/Footer'

class background extends React.Component {
  render () {
    return (
      <div>
        <GoBackLink />
        
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h1 className="h1">Background</h1>
                <p>In May of 2018, United Lutheran Seminary received amazing news: a bequest of $30 million to benefit student scholarships. While the donor remains anonymous, the gift was given in memory of Pastor James F. Kelly, a 1920 seminary graduate; the boy pictured in the Cubs uniform.</p>
                <p>This $30 million gift is instrumental in helping us reduce the debt load for those who are answering the call to ministry.</p>
                <Link to="/last">
                  <Button text="Next: The Last 100 Years" icon="caret-right" />
                </Link>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="mainImg">
                  <img src={img1} className="img-fluid" alt="James Kelly as a boy." />
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

export default background;
