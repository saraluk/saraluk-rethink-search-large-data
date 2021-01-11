import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';
import axios from 'axios';
import './App.css';
import UsersPagination from './components/UsersPagination';

const PAGE_TITLE = 'User data';

const App = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(4);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if (query) {
          setLoading(true);
          const { data } = await axios.get(
            `/api/users?q=${query}&page=${currentPage}&limit=${usersPerPage}`
          );
          setLoading(false);
          if (data.total) {
            setUsers(data.users);
            setTotalResults(data.total);
            setMessage(`Total results : ${totalResults} users`);
          } else {
            setMessage('No result');
          }
        } else {
          setUsers([]);
          setTotalResults(0);
          setMessage('Provide search term to retrieve relevant user data');
        }
      } catch (error) {
        setLoading(false);
        setMessage(error.response.data.message);
      }
    };
    fetchArticles();
  }, [
    query,
    setUsers,
    setLoading,
    setMessage,
    currentPage,
    setCurrentPage,
    setTotalResults,
    usersPerPage,
    totalResults,
  ]);

  console.log(users);

  return (
    <div className='page-container'>
      <h1>{PAGE_TITLE}</h1>
      <SearchBar setQuery={setQuery} query={query} />

      <UsersList users={users} message={message} loading={loading} />
      {users.length > 0 && (
        <UsersPagination
          totalResults={totalResults}
          usersPerPage={usersPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
