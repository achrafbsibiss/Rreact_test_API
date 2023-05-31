import React from 'react'

function User(props) {
  return (
    <div>
        <h1>the users from API</h1>
        {props.user.map((user) =>{
            return( <div key={user.id}>
                    <h2>{user.username}</h2>
                    </div>
            );
        })}
    </div>
  )
}

export default User