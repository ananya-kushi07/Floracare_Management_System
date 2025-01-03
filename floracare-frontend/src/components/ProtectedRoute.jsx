import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Unauthorized from '../pages/Unauthorized';
import Spinner from './loaders/Spinner';

const ProtectedRoute = ({ role,children }) => {
  const userRole = useSelector(state => state.user.role);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (isLoading) {   
        timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }
    return () => clearTimeout(timer);
},[]);

  return (
    <>
        {isLoading?<div className='flex h-96 justify-center items-center'><Spinner /></div>:role.includes(userRole)?<>{children}</>:<Unauthorized />}
    </>
  )
}

export default ProtectedRoute