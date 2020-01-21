import React, { Component } from 'react';
import './App.css';
import HeaderC from './components/header'
import ProjectsC from './components/projects'
import FooterC from './components/footer'
import BannerC from './components/banner'


class Portfolio extends Component{
    render(){
        return(     
                <div id="colorlib-page">
                    <div id="container-wrap">
                    <div id="colorlib-main">
                        <HeaderC></HeaderC>
                        <BannerC name="Portfolio"></BannerC>
                        <ProjectsC></ProjectsC>
                        <FooterC></FooterC>
                    </div>
                    </div>
                </div>
        )
    }
}
export default Portfolio;