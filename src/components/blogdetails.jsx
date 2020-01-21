import React, {Component} from 'react'

export default class BlogDetailsC extends Component{
    render(){
        return(
            <div className="row section_gap_top">
            <video autoPlay loop className= "vcenter" style={{textAlign: 'center', display: 'block', margin: '0 auto'}} width="60%" height="80%">
        <source src="img/stay-tuned.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
        )
    }
}