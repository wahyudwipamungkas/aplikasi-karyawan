import React, { useState, useEffect } from 'react'

function ListUser() {
  const url = 'https://jsonplaceholder.typicode.com/users/'

  const [users, setUsers] = useState([])

  const getDataUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const dataku = await response.json()
    const users = dataku.slice(0, 8)
    setUsers(users)
  }

  useEffect(() => {
    getDataUsers()
  }, [])

  return (
    <div className="ListUser">
        {users.map((user) => {
            return (
            <div key={user.id} className="UserList">
                <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                </ul>
            </div>
            )
        })}
    </div>
  );
}

export default ListUser;