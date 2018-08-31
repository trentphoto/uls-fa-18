import React from 'react'
import { Link } from 'react-router-dom'

import one100 from '../../img/100.png'

import Button from '../Button'
import LogoStacked from '../LogoStacked'

class Header extends React.Component {
  render () {
    return (
      <header className="Header">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <LogoStacked />
            <Link to="/">
              <img className="Header__100" src={one100} alt="" />
            </Link>
            <a className="d-none d-md-block" href="http://www.uls.edu" target="_blank" rel="noopener noreferrer">
              <Button text="Support ULS" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
