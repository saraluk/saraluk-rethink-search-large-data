import React from 'react';
import './style.css';

const User = ({ user }) => {
  return (
    <div className='user-card'>
      <ul>
        <ol>Name : {user.name}</ol>
        <ol>Email : {user.email}</ol>
        <ol>
          Address:{' '}
          {`${user.street}, ${user.city}, ${user.state}, ${user.country} ${user.zipCode}`}
        </ol>
      </ul>
    </div>
  );
};

export default User;
