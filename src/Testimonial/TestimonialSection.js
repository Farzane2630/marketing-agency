import React, { Component } from 'react'
import Testimonial from './testimonial/testimonial'
import Pagination from './pagination/pagination'

export default class TestimonialSection extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : [
              {id: 1, display: 'Show', image:"https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png", description:"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation", qoute:"- Robert . Creative Director at Colorlib"},
              {id: 1, display: 'hide', image:"https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png", description:"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation", qoute:"- Robert . Creative Director at Colorlib"},
              {id: 1, display: 'hide', image:"https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png", description:"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation", qoute:"- Robert . Creative Director at Colorlib"}
            ]
        }
    }
  render() {
    return (
      <div className='testomoni-container'>
       {
        this.state.items.map(item=>{
            return <Testimonial key={item.id} {...item}></Testimonial>
        })
       }

       <Pagination />
      </div>
    )
  }
}
