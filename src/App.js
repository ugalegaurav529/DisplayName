import React, { useState } from 'react';

const App = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="app-container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default App;
