import React from "react";
import { Component } from "react";

class CvEducationFields extends Component {
    render() {
        const jsxElements = this.props.educationDetails.map((education, index) => {
            return (
                <div className="experience-wrapper" key={index}>

                    <div className="experience-sec">
                        <div>
                            <h3>College/School Name</h3>
                            <p>{education['School Name']}</p>
                        </div>

                        <div>
                            <h3>Degree Name</h3>
                            <p>{education['Degree']}</p>
                        </div>

                        <div>
                            <h3>Duration</h3>
                            <p>[{education['From']}] to [{education['To']}]</p>
                        </div>
                    </div>

                    <div>
                        <h3>City</h3>
                        <p>{education['City']}</p>

                    </div>

                    <div className="border"></div>
                </div>


            )
        })

        if (jsxElements.length === 0) {
            return (
                <div className="empty-fields"> - </div>
            )
        }

        return jsxElements;
    }
}


export default CvEducationFields