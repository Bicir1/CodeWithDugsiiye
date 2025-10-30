import React from 'react';

const UserCard = ({userEMail,userName}) => {
    return (
        <div>
            <h2>{userName}</h2>
            <p>{userEMail}</p>
        </div>
    );
};

export default UserCard;