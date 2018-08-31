import React from 'react'
import { Link } from 'react-router-dom'

import img3 from '../../img/3.jpg'

import Button from '../../components/Button'
import GoBackLink from '../../components/GoBackLink'
import Footer from '../../components/Footer'

class next extends React.Component {
  render () {
    return (
      <div>
        <GoBackLink />
        
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h1 className="h1">The Next 100 Years</h1>
                <p>Today, the cost of a seminary education is higher than ever before. Many who feel the call to ministry are struggling with the financial challenges this presents. Theological institutions across the nation are seeing a decline in enrollment.</p>
                <p>God has given United Lutheran Seminary the opportunity to make a significant impact on the future of theological education. While the $30 million gift guarantees student scholarships, the needs of the Seminary are great in other areas.</p>
                <Link to="/your-place">
                  <Button text="Next: Your Place in the Story" icon="caret-right" />
                </Link>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="mainImg">
                  <img src={img3} className="img-fluid" alt="United Lutheran Seminary: What is your place in the story?" />
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

export default next;
