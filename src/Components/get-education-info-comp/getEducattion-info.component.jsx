import React from "react";
import { Component } from "react";

class GetEducationDetails extends Component {

    constructor() {
        super();
        this.state = {
            educationDetails: [],
            education: {}
        }
    }

    changeHandeler = (e) => {
        const education = this.state.education;
        education[`${e.target.placeholder}`] = e.target.value;
        this.setState({ education })
    }


    changeState = (e) => {

        this.setState(
            () => {
                const education = Object.assign({}, this.state.education)
                const educationDetails = [...this.state.educationDetails, education]
                return { educationDetails }
            },
            () => {
                this.props.getEducationInfo(this.state.educationDetails);

                const allInputEl = document.querySelectorAll('input');

                for (let i = 0; i < allInputEl.length; i++) {
                    allInputEl[i].value = '';
                };

                console.log(this.state.educationDetails);
            }
        )

        e.preventDefault();
    }


    render() {

        return (
            <div>
                <form onSubmit={this.changeState}>
                    <input onChange={this.changeHandeler} type="text" placeholder="School Name" required /> <br />

                    <input onChange={this.changeHandeler} type="text" placeholder="City" required /> <br />

                    <input onChange={this.changeHandeler} type="text" placeholder="Degree" required /> <br />

                    <div className="date-input-wrapper">
                        <label>From: </label><input onChange={this.changeHandeler} type="Date" placeholder="From" required />
                        <label className="date-input">To: </label><input onChange={this.changeHandeler} type="Date" placeholder="To" required />
                    </div>

                    <div className="form-submit-btn">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GetEducationDetails;