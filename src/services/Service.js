import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div className='container'>
        <h3> Discover, Explore the Product </h3>
        <div className='service-icon'>
            <img src={this.props.image}></img>
        </div>
        Effective strategies to help you reach customers.
      </div>
    )
  }
}
