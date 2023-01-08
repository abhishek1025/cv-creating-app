import React from "react";
import { Component } from "react";


class GeneralInfoComponent extends Component {

    constructor() {
        super();
        this.state = {
            userInfo: {}
        }
    }


    changeHandeler = (e) => {
        const userInfo = this.state.userInfo;
        userInfo[`${e.target.placeholder}`] = e.target.value
        this.setState(() => {
            return { userInfo }
        }
            // () => { console.log(userInfo) }
        )

    }

    changeState = (e) => {
        this.props.getGeneralInfo(this.state.userInfo)

        const allInputEl = document.querySelectorAll('input');

        for (let i = 0; i < allInputEl.length; i++) {
            allInputEl[i].value = '';
            document.querySelector('textarea').value = '';
        }


        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.changeState}>
                    <input onChange={this.changeHandeler} type="text" placeholder="Full Name" required /> <br />
                    <input onChange={this.changeHandeler} type="text" placeholder="Title" required /> <br />
                    <input onChange={this.changeHandeler} type="tel" placeholder="Phone Number" required /> <br />
                    <input onChange={this.changeHandeler} type="email" placeholder="Email" required /> <br />
                    <input onChange={this.changeHandeler} type="text" placeholder="Address" required /> <br />
                    <textarea onChange={this.changeHandeler} placeholder="Description" required maxLength='100' /> <br />

                    <div className="form-submit-btn">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default GeneralInfoComponent;