import React from "react";
import { Component } from "react";

class GetExperienceFields extends Component {

    constructor() {
        super();
        this.state = {
            experiences: [],
            anExperience: {}
        }
    }
    changeHandeler = (e) => {
        const anExperience = this.state.anExperience;
        anExperience[`${e.target.placeholder}`] = e.target.value;
        this.setState({ anExperience })
    }

    changeState = (e) => {

        this.setState(
            () => {
                const anExperience = Object.assign({}, this.state.anExperience)
                const experiences = [...this.state.experiences, anExperience]
                return { experiences }
            },
            () => {
                this.props.getExperienceInfo(this.state.experiences);

                const allInputEl = document.querySelectorAll('input');

                document.querySelector('textarea').value = '';
                for (let i = 0; i < allInputEl.length; i++) {
                    allInputEl[i].value = '';
                };
            }
        )

        e.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.changeState}>
                    <input onChange={this.changeHandeler} type="text" placeholder="Company Name" required /> <br />
                    <input onChange={this.changeHandeler} type="text" placeholder="Title" required /> <br />
                    <input onChange={this.changeHandeler} type="text" placeholder="City" required /> <br />

                    <div className="date-input-wrapper">
                        <label>From: </label><input onChange={this.changeHandeler} type="Date" placeholder="From" required />
                        <label className="date-input">To: </label><input onChange={this.changeHandeler} type="Date" placeholder="To" required />
                    </div>

                    <textarea onChange={this.changeHandeler} type="Role" placeholder="Role" required /> <br />

                    <div className="form-submit-btn">
                        <button type="submit">Add</button>
                    </div>

                </form>
            </div>
        )
    }
}


export default GetExperienceFields;