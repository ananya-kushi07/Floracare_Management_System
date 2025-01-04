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
        isLoading?<div style={{ display:'flex',justifyContent:'center',alignItems:'center',height:'100vh' }}><Spinner /></div>:auth?children:navigate('/login',{ replace:true })
    }
    </>
  )
}

export default PrivateRoute