import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from './loaders/Spinner';

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.user.auth);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

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
    <>{
        isLoading?<div className='flex h-96 justify-center items-center'><Spinner /></div>:auth?children:navigate('/login',{ replace:true })
    }
    </>
  )
}

export default PrivateRoute