import React, { useContext } from 'react'
import { authContext } from '../components/context/Context'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const { user, loading } = useContext(authContext)

  if (loading) {
    return <h1 className='text-center mt-5'>Checking Authentication...</h1>
  }

  if (!user) {
    return <Navigate to="/auth" replace />   // ✅ correct way
  }

  return <Outlet />
}

export default ProtectedRoutes