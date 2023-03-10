import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const handleLogin = async (event) => {
        event.preventDefault();
        await csrf();
        try{
            await axios.post('/login', {email, password});
            setEmail("")
            setPassword("")
            navigate("/")
        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

  return (
    <div className="container mt-4">
        <h1>Ingrese</h1>
        <div className="d-flex justify-content-center mt-4">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"/>
                    {errors.email && (
                    <div className='flex'>
                        <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
                    </div>)}
                </div>
                <div className="mb-3">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Contraseña" />
                    {errors.password && (
                    <div className='flex'>
                        <span className='text-red-400 text-sm m-2 p-2'>{errors.password[0]}</span>
                    </div>)}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login