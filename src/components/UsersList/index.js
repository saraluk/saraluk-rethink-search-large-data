import React from 'react';
import { Spinner } from 'react-bootstrap';
import User from './User';
import './style.css';

const UsersList = ({ users, message, loading }) => {
  return (
    <div className='users-container'>
      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : users.length > 0 ? (
        <div className='users-container__grid'>
          {users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default UsersList;
