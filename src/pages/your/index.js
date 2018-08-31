import React from 'react'

import GoBackLink from '../../components/GoBackLink'
import YourPlaceSection from '../../components/YourPlaceSection'
import Footer from '../../components/Footer'

class your extends React.Component {
  render () {
    return (
      <div>
        <GoBackLink />

        <YourPlaceSection />

        <Footer />
      </div>
    );
  }
}

export default your;
