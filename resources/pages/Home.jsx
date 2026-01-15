import React, { useState } from 'react'

function Home() {
  const [users, setUsers] = useState([]);

  const showList = () => {
    axios.get('users').then(res => setUsers(res.data))
  }

  return (    
    <div>


      <h1>List of Fake Users: <button onClick={showList}>show list</button></h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name} - {user.role} <button onClick={() => setUsers(users.filter(u => u.name !== user.name))}>delete user</button></li>
        ))}
      </ul>

    </div>
  )     
}

export default Home