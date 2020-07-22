import React from 'react';
import { useQuery, gql } from '@apollo/client';
const ALL_USERS = gql`
  {
    allUsers {
      id
      email
      username
    }
  }
`;
const HomeContainer = () => {
  const { loading, data } = useQuery(ALL_USERS);
  console.log('data', data);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        data?.allUsers?.map((user) => {
          return <h1>{user.email}</h1>;
        })
      )}
    </div>
  );
};

export default HomeContainer;
