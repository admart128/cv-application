import React, { Component } from 'react';

class General extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            submitted: false
        }
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true});
;        console.log(this.state);
    }

    render() {
        return (
            <div>
                {!this.state.submitted ? (
                    <form onSubmit={this.handleSubmit}>
                        <h1>
                            General Information
                        </h1>

                        <label htmlFor="firstName">First Name:</label>
                        <input id="firstName" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        
                        <label htmlFor="lastName">Last Name:</label>
                        <input id="lastName" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input id="phoneNumber" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                        
                        <input type="submit" value="submit" />
                    
                    </form>
                ) : (
                    <div>
                        <h1>General Information</h1>
                        <p>First Name: {this.state.firstName}</p>
                        <p>Last Name: {this.state.lastName}</p>
                        <p>Email: {this.state.email}</p>
                        <p>Phone Number: {this.state.email}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default General;