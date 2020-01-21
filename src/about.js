import React, { Component } from 'react';
import './App.css';
import HeaderC from './components/header'
import ExperienceC from './components/experience'
import FooterC from './components/footer'
import AboutC from './components/about'
import BannerC from './components/banner'


class About extends Component{
    render(){
        return(     
                <div id="colorlib-page">
                    <div id="container-wrap">
                    <div id="colorlib-main">
                        <HeaderC></HeaderC>
                        <BannerC name="About Me"></BannerC>
                        <AboutC></AboutC>
                        <ExperienceC></ExperienceC>
                        <FooterC></FooterC>
                    </div>
                    </div>
                </div>
        )
    }
}
export default About;