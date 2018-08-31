import React from 'react'
import { Link } from 'react-router-dom'

class HomeCard extends React.Component {
  render () {
    return (
      <Link to={this.props.link} className="HomeCard" onMouseEnter={this.props.imgChange} onMouseLeave={this.props.imgClear}>
        <div className="HomeCard__border"></div>
        <span>{this.props.title}</span>
      </Link>
    );
  }
}

export default HomeCard;
