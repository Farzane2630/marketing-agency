import React, { Component } from 'react'
import Image from './studyImg/Image'
import './Case.css'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'


export default class Case extends Component {
    constructor(props){
        super(props)

        this.state = {
            srcs:[
            {src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs1.jpg.webp", id: 1},
            {src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs2.jpg.webp", id: 2},
            {src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs3.jpg.webp", id: 3}
            ]
        }
        this.leftHandler = this.leftHandler.bind(this)
        this.rightHandler = this.rightHandler.bind(this)
    }

    leftHandler(){
    }

    rightHandler(){
    }
  render() {
    return (
      <div className='flex-center'>
        <p className='main-pink'> CASE STUDY </p>
        <h1 className='study-title'> Some Of Our Awesome Stuffs </h1>
        <div className='img-container'>
            <div className='left-angle'>
                <FaAngleLeft onClick={this.leftHandler} />
            </div>
            {this.state.srcs.map(src=>(
              <Image {...src} key={src.id}></Image>
            ))
           }
            <div className='right-angle'>
                <FaAngleRight onClick={this.rightHandler} />
            </div>
            
        </div>
      </div>
    )
  }
}
