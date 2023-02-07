import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
import { useDispatch } from 'react-redux';
import { setCredentials } from 'features/auth/authSlice';
import { useLoginMutation } from 'features/auth/authApiSlice';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const userRef = useRef<HTMLInputElement>();
    const errRef = useRef<HTMLInputElement>();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    //message error toast
    const [errMsg , setErrMsg] = useState('');

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const userData = await login({ user, password }).unwrap();
            console.log(userData);
            dispatch(setCredentials({...userData, user}));
            setUser('');
            setPassword('');
            navigate('/dashboard');
        } catch (err) {
            if (!err.response) {
                setErrMsg('Server is not responding');
            } else if (err.response.status === 400) {
                setErrMsg('Invalid username or password');
            } else if (err.response.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }   
            errRef.current.focus(); 
        }
    }

    return (
        <div >
            
        </div>
    )
}

export default Login;
