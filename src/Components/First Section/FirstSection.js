import React from 'react';
import image from '../asset/us.png'
import image1 from '../asset/user.jpg'
import image2 from '../asset/us2.png'
import image3 from '../asset/us3.png'
import image4 from '../asset/us4.png'
import image11 from '../asset/ss.jpg'
import image22 from '../asset/ss2.jpg'
import image33 from '../asset/ss3.jpg'
import image44 from '../asset/ss4.jpg'
// import image1 from '../asset/user.jpg'
import './FirstSection.css'


const FirstSection = () => {
    return (
        <div className="stories bg-slate-50">
        <h3 className="mini-headign">Stories</h3>
        <div className="stories-wrapper">

            <div className="single-stories">
                <label><img src={image1} alt="user" /></label>
                <div>
                    <img src={image1} alt="user" />
                    <i className="fa-solid fa-circle-plus"></i>
                    <b>Create Stories</b>
                </div>
            </div>

            <div className="single-stories">
                <label><img src={image} alt="sp" /></label>
                <div>
                    <img src={image11} alt="ss"/>
                    <b>Your Name</b>
                </div>
            </div>

            <div className="single-stories">
                <label><img src={image2} alt="sp2" /></label>
                <div>
                    <img src={image22} alt="ss2"/>
                    <b>Your Name</b>
                </div>
            </div>

            <div className="single-stories">
                <label><img src={image3} alt="sp3"/></label>
                <div>
                    <img src={image33} alt="ss3"/>
                    <b>Your Name</b>
                </div>
            </div>

            <div className="single-stories">
                <label><img src={image4} alt="sp4"/></label>
                <div>
                    <img src={image44} alt="ss4"/>
                    <b>Your Name</b>
                </div>
            </div>


        </div>
    </div>
       
    );
};

export default FirstSection;