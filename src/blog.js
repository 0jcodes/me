import React, {Component} from 'react'
import HeaderC from './components/header'
import BannerC from './components/banner'
import BlogC from './components/blog'
import FooterC from './components/footer'

class BlogDetails extends Component{
    render(){
        return(
            <div id="colorlib-page">
                    <div id="container-wrap">
                    <div id="colorlib-main">
                        <HeaderC></HeaderC>
                        <BannerC name="Blog "></BannerC>
                        <BlogC></BlogC>
                        <FooterC></FooterC>
                    </div>
                    </div>
                </div>
        )
    }
}

export default BlogDetails;