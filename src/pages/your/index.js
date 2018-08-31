import React from 'react'

import img_id from '../../img/id.jpg'

import GoBackLink from '../../components/GoBackLink'
import YourPlaceSection from '../../components/YourPlaceSection'
import Fw from '../../components/Fw'
import Footer from '../../components/Footer'

class your extends React.Component {
  render () {
    return (
      <div>
        <GoBackLink />

        <YourPlaceSection />

        <Fw bg={img_id} title="WWI Medic. Seminary graduate. Husband and Father." subtitle="Read about Pastor James Kelly's life." to="/james-kelly" btnText="Explore the Story" />

        <Footer />
      </div>
    );
  }
}

export default your;
