import React, { Component } from 'react'
import './auth/Auth.css'
class Profile extends Component {
    render() {
        return (
            <div >

                <div className='f'>
                <img  width="250px" height="250px" src="https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg"
                />
                <div >
                    <h1 >{this.props.name}</h1>
                     <p>{this.props.position}</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Profile ;
