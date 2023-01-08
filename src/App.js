import React from "react";
import { Component } from "react";


import GeneralInfoComponent from './Components/General-Info-input-comp/generalInfo.component.jsx';
import CvGeneralInfoSec from "./Components/cv-general-info-comp/cv-general-info-sec.component.jsx";

import GetExperienceFields from "./Components/experience-input-comp/get-experience.component.jsx";

import CvExperienceField from "./Components/cv-experience-fields/cv-experience-fields.component.jsx";

import GetEducationDetails from "./Components/get-education-info-comp/getEducattion-info.component.jsx";

import CvEducationFields from "./Components/cv-education-details/cv-education-fields.component.jsx";

import './App.css';
class App extends Component {

    constructor() {
        super();
        this.state = {
            generalInfo: {
                'Full Name': 'Your Name',
                'Title': 'Your Title',
                'Phone Number': '-',
                'Email': '-',
                'Description': 'Your Short Introduction'
            },
            experienceInfo: [],
            educationDetails: []
        }
    }

    getGeneralInfo = (userGeneralInfo) => {
        this.setState({ generalInfo: userGeneralInfo })
    }

    getExperienceInfo = (experienceInfo) => {
        this.setState({ experienceInfo })
    }

    getEducationInfo = (educationDetails) => {
        this.setState({ educationDetails })
    }




    render() {

        return (
            <div className="App-Wrapper">

                <h1 className="app-heading">CV Creator</h1>

                <div className="App">
                    <div className="input-fields">
                        <GeneralInfoComponent getGeneralInfo={this.getGeneralInfo} />
                        <br />

                        <GetExperienceFields getExperienceInfo={this.getExperienceInfo} />
                        <br />

                        <GetEducationDetails getEducationInfo={this.getEducationInfo} />
                    </div>

                    <div className="cv-format-wrapper">

                        <div className="cv-format" id="cv">
                            <CvGeneralInfoSec useInfo={this.state.generalInfo} />

                            <hr />
                            <h1 className="cv-heading">Experience</h1>
                            <CvExperienceField experienceInfo={this.state.experienceInfo} />

                            <br />
                            <hr />

                            <h1 className="cv-heading">Education</h1>
                            <CvEducationFields educationDetails={this.state.educationDetails} />

                        </div>

                    </div>

                </div>

            </div>
        )

    }

}

export default App;
