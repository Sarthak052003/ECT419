import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (e) {
        console.error("Error fetching user data:", e);
      }
    };

    fetchUserData();
  }, []); 

  return (
    <div>
      <h1>Sarthak Srivastava</h1><br />
      <h1>Roll Number - 1/22/FET/BCS/419</h1>
      
    </div>
  );
}

export default App;