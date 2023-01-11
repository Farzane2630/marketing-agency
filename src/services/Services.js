import React from 'react'
import Service from './Service'
import './Services.css'

export default class Services extends React.Component {

  constructor (props){
    super (props)

    this.state = {
      imgArray : [
        {image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services1.svg"},
        {image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services2.svg"},
        {image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services3.svg"},
        {image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services4.svg"},
      ]
    }
  }
  render () {
    return (
      <div className='services-container'>
          <p> OUR SERVICES </p>
          <h1> Provide Awesome Service </h1>
          <h1> With Our Tools </h1>
          <div className='service-box'>
              <Service {...this.state.imgArray[0]}></Service>
              <Service {...this.state.imgArray[1]}></Service>
              <Service {...this.state.imgArray[2]}></Service>
              <Service {...this.state.imgArray[3]}></Service>
          </div>
         </div>
    )
  }
}
