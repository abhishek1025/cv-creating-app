import React from "react";
import ReactToPrint from 'react-to-print';



import GeneralInfoComponent from './Components/General-Info-input-comp/generalInfo.component.jsx';
import GetExperienceFields from "./Components/experience-input-comp/get-experience.component.jsx";
import GetEducationDetails from "./Components/get-education-info-comp/getEducattion-info.component.jsx";
import './App.css';
import CV from "./Components/cv/cv.component.jsx";
class App extends React.PureComponent {

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


                    <div style={{ width: '55%' }}>
                        <div style={{ border: '1px solid black' }}>
                            <CV cvInfo={this.state} ref={el => (this.componentRef = el)} />
                        </div>

                        <ReactToPrint
                            trigger={() => {
                                return <button className="cv-download-btn">Download CV</button>;
                            }}
                            content={() => this.componentRef}
                        />

                    </div>

                </div>


            </div>
        )

    }

}

export default App;


