import React from "react";
import { Component } from "react";

import './cv-experience-filed.style.css';

class CvExperienceField extends Component {

    render() {
        const jsxElements = this.props.experienceInfo.map((experience, index) => {
            return (
                <div className="experience-wrapper" key={index}>

                    <div className="experience-sec">
                        <div>
                            <h3>Title</h3>
                            <p>{experience['Title']}</p>
                        </div>

                        <div>
                            <h3>Company Name</h3>
                            <p>{experience['Company Name']}</p>

                        </div>

                        <div>
                            <h3>City</h3>
                            <p>{experience['City']}</p>
                        </div>

                       
                    </div>

                    <div>
                        <h3>Duration</h3>
                        <p>[{experience['From']}] to [{experience['To']}]</p>
                    </div>

                    <h3 className="role-heading">Role</h3>
                    <p>{experience['Role']}</p>

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

export default CvExperienceField;