import React from 'react'
import { useSelector } from 'react-redux'

const ProfilPage = () => {
  const user = useSelector(state=> state.User.user)

  return (
    <div>
    <h2>Welcome {user?.name} </h2>
  </div>
  )
}

export default ProfilPage