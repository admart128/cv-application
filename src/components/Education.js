import React, { Component } from 'react';

class Education extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            major: '',
            graduation: ''
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
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>
                    Education
                </h1>
                <label htmlFor="school">School:</label>
                <input id="school" type="text" name="school" value={this.state.school} onChange={this.handleChange} />
                <label htmlFor="major">Major:</label>
                <input id="major" type="text" name="major" value={this.state.major} onChange={this.handleChange} />
                <label htmlFor="graduation">Graduation:</label>
                <input id="graduation" type="date" name="graduation" value={this.state.graduation} onChange={this.handleChange} />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Education;