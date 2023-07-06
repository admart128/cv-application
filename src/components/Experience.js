import React, { Component } from 'react';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employer: '',
            position: '',
            from: '',
            to: '',
            submitted: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                {!this.state.submitted ? (
                    <form onSubmit={this.handleSubmit}>
                        <h1>
                            Experience
                        </h1>
                        <label htmlFor="employer">Employer:</label>
                        <input id="employer" type="text" name="employer" value={this.state.employer} onChange={this.handleChange} /> 
                        <label htmlFor="position">Position:</label>
                        <input id="position" type="text" name="position" value={this.state.position} onChange={this.handleChange} />
                        <label htmlFor="from">From:</label>
                        <input id="from" type="date" name="from" value={this.state.from} onChange={this.handleChange} />
                        <label htmlFor="to">To:</label>
                        <input id="to" type="date" name="to" value={this.state.to} onChange={this.handleChange} />
                        <input type="submit" value="submit" />
                    </form>
                ) : (
                        <div>
                            <h1>Experience</h1>
                            <p>Employer: {this.state.employer}</p>
                            <p>Position: {this.state.position}</p>
                            <p>From: {this.state.from}</p>
                            <p>To: {this.state.to}</p>
                        </div>
                    )
                }
            </div>
        )
    }

}



export default Experience;