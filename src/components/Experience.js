import React, { Component } from 'react';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employer: '',
            position: '',
            from: '',
            to: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
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
        )
    }

}



export default Experience;