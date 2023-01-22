import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../TestimonialSection.css'

export default class Testimonial extends Component {
  constructor(props){
    super(props)

    this.state = {
      status: true,
    }
  }
  render() {
    let {image, description, qoute, display} = this.props
    return (
    
      <Container className= {`testimony-container flex-center ps-5 ${display}`}>
        
        <img src={image} alt="user-avatar" />
        <p className='testimonial-desc'> {description} </p>
        <span className='qoute'> {qoute} </span>
        
      </Container>
        
    )
  }
}
