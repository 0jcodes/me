import React, { Component } from 'react';
import './App.css';
import HeaderC from './components/header'
import PagesC from './components/pages'
import FooterC from './components/footer'
import BannerC from './components/banner'


class Pages extends Component{
    render(){
        return(     
                <div id="colorlib-page">
                    <div id="container-wrap">
                    <div id="colorlib-main">
                        <HeaderC></HeaderC>
                        <BannerC name="Portfolio Details"></BannerC>
                        <PagesC></PagesC>
                        <FooterC></FooterC>
                    </div>
                    </div>
                </div>
        )
    }
}
export default Pages;