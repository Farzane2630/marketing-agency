import React, { Component } from 'react'
import '../TestimonialSection.css'

export default class Pagination extends Component {
    constructor(props){
        super(props)

        this.state = {
            pagination: [
                {id: 1, className: 'pagination-circle', bg: '#FFDAEA' },
                {id: 2, className: 'pagination-circle', bg: '#FFDAEA' },
                {id: 3, className: 'pagination-circle', bg: '#FFDAEA' }
              ] 
        }
    }
  render() {
    return (
      <>
      <div className='pagination-container'>
          {this.state.pagination.map(circle=>{
            return <div key={circle.id} className={circle.className} style={ {backgroundColor: `${circle.bg}`}}></div>
          })}
        </div>
      </>
    )
  }
}
