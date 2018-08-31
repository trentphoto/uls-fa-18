import React from 'react'

import Background from '../../components/Background'
import Fw from '../../components/Fw'
import HomeCard from '../../components/HomeCard'
import Footer from '../../components/Footer'

import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img_id from '../../img/id.jpg'

class home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bg: '0'
    }
  }

  imgChange = (newImg) => {
    this.setState({bg: newImg})
  }
  imgClear = () => {
    this.setState({bg: '0'})
  }

  render () {
    return (
      <div className="home">
        <Background img={img1} id="1" currentActive={this.state.bg} />
        <Background img={img2} id="2" currentActive={this.state.bg} />
        <Background img={img3} id="3" currentActive={this.state.bg} />
        <Background img={img4} id="4" currentActive={this.state.bg} />
        <Fw bg={img1} align="center" title="What does a boy in a Cubs uniform..." subtitle="...have to do with the future of theological education?" to="/background" btnText="Explore the Story" />
        <section className="section py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <HomeCard title="Background" link="/background" imgChange={this.imgChange.bind(this, '1')} imgClear={this.imgClear} />
              </div>
              <div className="col-lg-3 col-md-6">
                <HomeCard title="The Last 100 Years" link="/last" imgChange={this.imgChange.bind(this, '2')} imgClear={this.imgClear} />
              </div>
              <div className="col-lg-3 col-md-6">
                <HomeCard title="The Next 100 Years" link="/next" imgChange={this.imgChange.bind(this, '3')} imgClear={this.imgClear} />
              </div>
              <div className="col-lg-3 col-md-6">
                <HomeCard title="Your Place in the Story" link="/your-place" imgChange={this.imgChange.bind(this, '4')} imgClear={this.imgClear} />
              </div>
            </div>
          </div>
        </section>
        <Fw bg={img_id} title="WWI Medic. Seminary graduate. Husband and Father." subtitle="Read about Pastor James Kelly's life." to="/james-kelly" btnText="Explore the Story" />
        <Footer />
      </div>
    );
  }
}

export default home;
