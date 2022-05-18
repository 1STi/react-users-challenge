


import React from 'react';

//Requesting Multiple Users
Random User Generator allows you to fetch up to 5,000 generated users in one request using the results parameter.

https://randomuser.me/api/?results=5000
const apiUrl = 'https://randomuser.me/api/?results=12&nat=br';

export default function App() {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });

  return (
    <>
      <div className="App">
        <h1>Users</h1>
      </div>
    </>
  );
}
