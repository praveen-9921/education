import React from "react"
import './userProfileCard.css'
const UserProfileCard = () => {
    return (
        <>
            <div className="card">
                <img className="card-image" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/220px-Elon_Musk_Royal_Society_crop.jpg"} alt="profile picture"></img>
                <h2 className="card-title">Bro Code</h2>
                <p className="card-text">I make Youtube videos and play video games</p>
            </div>
        </>
    )
}

export default UserProfileCard