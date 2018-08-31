import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GoBackLink = (props) => {
  return (
    <section className="section py-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link className="textLink" to="/">
              <FontAwesomeIcon icon="home" className="mr-2" />
              <span>Go back</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoBackLink
