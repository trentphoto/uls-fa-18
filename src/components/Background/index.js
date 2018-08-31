import React from 'react'

class Background extends React.Component {
  classes = () => {
    const id = this.props.id
    const currentActive = this.props.currentActive
    if (id === currentActive) {
      return 'Background Background_show';
    } else {
      return 'Background';
    }
  }
  render () {
    return (
      <div className={this.classes()}>
        <img className="Background__img" src={this.props.img} alt="" />
      </div>
    );
  }
}

export default Background;
