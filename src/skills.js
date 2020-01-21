import React, { Component } from 'react';
import './App.css';
import HeaderC from './components/header'
import SkillsC from './components/skills'
import FooterC from './components/footer'
import BannerC from './components/banner'


class Skills extends Component{
    render(){
        return(     
                <div id="colorlib-page">
                    <div id="container-wrap">
                    <div id="colorlib-main">
                        <HeaderC></HeaderC>
                        <BannerC name="Skills"></BannerC>
                        <SkillsC></SkillsC>
                        <FooterC></FooterC>
                    </div>
                    </div>
                </div>
        )
    }
}
export default Skills;