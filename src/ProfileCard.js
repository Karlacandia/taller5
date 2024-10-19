import React from 'react';
import './ProfileCard.css';
import img from './Karla.jpeg';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <img src={img} alt="profile"/>
            <h2 className="profile-name">Karla Candia</h2>
            <p className="profile-description">
                Estudiante (Desarrolladora Web frontend ) {""}
                </p>
            </div>
    );
};
export default ProfileCard;