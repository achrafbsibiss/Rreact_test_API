import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { Link } from "react-router-dom";


function UserListing() {
  const { isLoading, error, data:users } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/users`).then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(users)

  return (
    <div>
        <h1>User Listing</h1>
        {users.map(user=>(
          <div key={user.id}>
            <Link to={user.id+''}>{user.username}</Link>
          </div>
        ))}
    </div>
  )
}

export default UserListing