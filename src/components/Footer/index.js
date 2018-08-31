import React from 'react'

import LogoHorizontal from '../LogoHorizontal'

class Footer extends React.Component {
  render () {
    return (
      <footer className="Footer py-4 mt-auto">
        <div className="container">
          <div className="row d-flex justify-content-around align-items-center">
            <LogoHorizontal />
            <span>A UNITED Media Project</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
