import React, {Component} from 'react'

export default class BlogC extends Component{
    render(){
        return(
        <div className="row section_gap_top">
        <video autoPlay className= "vcenter" style={{textAlign: 'center', display: 'block', margin: '0 auto'}} loop width="60%" height="80%">
        <source src="img/stay-tuned.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        )
    }
}