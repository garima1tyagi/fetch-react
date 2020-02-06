import React, { Component } from 'react'
import './UserData.css'

export class UserData extends Component {
        constructor(){
            super()
        }
        state = {
            loading : true,
            person: null,
        }
        

    async componentDidMount(){
        const URL = "https://api.randomuser.me/";
        const response = await fetch(URL);
        const data = await response.json();
        this.setState({
            person: data.results[0],
            loading: false
           
        })
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ?
                (
                <div>loading...</div>
                ): (
                
                <div className="table-data">
                    <table >
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Gender</td>
                            <td>Phone Number</td>
                            <td>ID</td>
                            <td>Age</td>
                            <td>State</td>
                            <td>City</td>
                            <td>Country</td>
                            <td>Registered</td>
                            <td>Username</td>
                            <td>Password</td>
                            </tr>
                            <tr>
                            <td>{this.state.person.name.first}</td>
                            <td>{this.state.person.name.last}</td>
                            <td>{this.state.person.gender}</td>
                            <td>{this.state.person.phone}</td>
                            <td>{this.state.person.id.name}</td>
                            <td>{this.state.person.dob.age}</td>
                            <td>{this.state.person.state}</td>
                            <td>{this.state.person.city}</td>
                            <td>{this.state.person.country}</td>
                            {/* <td>{this.state.person.timezone.offset}</td> */}
                            <td>{this.state.person.registered.date}</td>
                            <td>{this.state.person.login.username}</td>
                            <td>{this.state.person.login.password}</td>
                            </tr>
                </table>
                
                </div>
            )
            }
            </div>
        )
    }
}

export default UserData
