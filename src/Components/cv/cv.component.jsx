import { Component } from "react";

import styled from "styled-components";

import CvGeneralInfoSec from "../cv-general-info-comp/cv-general-info-sec.component";
import CvExperienceField from "../cv-experience-fields/cv-experience-fields.component";
import CvEducationFields from "../cv-education-details/cv-education-fields.component";

class CV extends Component {

    getPageMargins = () => {
        return `@page { margin: 50px 0 !important; }`;
    };

    render() {
        const { cvInfo } = this.props;

        return (
            <div className="cv-format-wrapper" id="cv">

                <style>{this.getPageMargins()}</style>

                <div className="cv-format">
                    <CvGeneralInfoSec useInfo={cvInfo.generalInfo} />

                    <hr />
                    <CvHeading>Experience</CvHeading>
                    <CvExperienceField experienceInfo={cvInfo.experienceInfo} />

                    <br />
                    <hr />

                    <CvHeading>Education</CvHeading>
                    <CvEducationFields educationDetails={cvInfo.educationDetails} />

                </div>

            </div>
        );
    }
}

export default CV;

const CvHeading = styled.h1`
  padding-left: 80px;
`
