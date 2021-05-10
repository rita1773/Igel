

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import './Home.css';
import Topcollection from '../components/Topseller/Topcollection'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import img1 from '../assets/img1.jpg'
import img4 from '../assets/img4.PNG';
import master from '../assets/masters.png';

import Footer from '../components/footer/Footer.js';


export default class Home extends Component {
    render() {
        return (
            <div>

                <Header />
                <div className="section">
                    <div>
                        <div className="grid">
                            <div className="herote">
                                {/* <video autostart autoPlay loop src={video1} type="video/mp4" className="v1"/> */}
                                
                                <h1 className="herohead">#the Ice-cream Master</h1>
                                <video autostart autoPlay loop src={video1} type="video/mp4" className="v1"/>
                                {/* <img src={master} alt="Gelato" className="heroimg"/> */}
                                <h2 className="subh">Pop yourself over with an Icepop and some Gelato!</h2>
                                <Link to='/shop' className="herobut">
                                    Shop Now
                            </Link>
                            </div>
                            

                        </div>
                    </div>

                </div>
                <div>
                    <Topcollection heading="Gelato" filter="Gelato" />
                    <Topcollection heading="Icepops" filter="Icepops" />

                </div>
                <Footer/>
            </div>
        )
    }
}
