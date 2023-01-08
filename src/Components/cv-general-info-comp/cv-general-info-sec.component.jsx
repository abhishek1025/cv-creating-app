import React from "react";
import { Component } from "react";
import userImg from './img.png';

import './cv-general-info.css';

class CvGeneralInfoSec extends Component {


    render() {

        const { useInfo } = this.props;
        return (

            <div className="general-info">
                <div className="user-img">
                    <img src={userImg} width='100px' />

                    <h2>{useInfo['Full Name']}</h2>
                    <h3>{useInfo['Title']}</h3>
                    <p>{useInfo['Description']}</p>
                </div>

                <div className="personal-details">
                    <h1>Personal Details: </h1>

                    <h3>Email</h3>
                    <p>{useInfo['Email']} </p>

                    <h3>Phone Number:</h3>
                    <p> {useInfo['Phone Number']} </p>
                    
                    <h3>Address: {useInfo['Address']}</h3>
                    <p> {useInfo['Phone Number']}</p>
                </div>
            </div>
        )
    }

}


export default CvGeneralInfoSec;