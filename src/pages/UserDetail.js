import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { Link, useParams } from "react-router-dom";


function UserDetail() {
  let { id } = useParams();
  const { isLoading, error, data:user } = useQuery({
    queryKey: ['USER.DETAIL'],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/users/${id}`).then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <div>
        <h1>User Detail</h1>
        <p>User ID: {user.id}</p>
        <p>User name: <strong>{user.username}</strong></p>

    </div>
  )
}

export default UserDetail