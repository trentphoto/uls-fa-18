import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

class Fw extends React.Component {
  render () {
    return (
      <Link to={this.props.to} className="section Fw" style={{backgroundImage: "url(" + this.props.bg + ")", backgroundPosition: this.props.align || 'center'}}>
        <div className="overlay overlay__dark"></div>
        <div className="container Fw__content">
          <div className="row">
            <div className="col-12 text-center">
              <h2>{this.props.title}</h2>
              <p>{this.props.subtitle}</p>
              <Button className="Fw__Button" text={this.props.btnText} icon="caret-right" />
            </div>
          </div>
        </div>
        <div className="Fw__bar"></div>
      </Link>
    );
  }
}

export default Fw;
