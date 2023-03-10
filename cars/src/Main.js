import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

const main = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="navbar-brand">
                <a href="https://nicolasgelabert.com.ar/" className="flex items-center">
                    Nicolás Gelabert
                </a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link text-white" aria-current="page">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link text-white" aria-current="page">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register ' element={<Register />} />
                <Route path='/create' element={ <CreateProduct/> } />
                <Route path='/edit/:id' element={ <EditProduct/> } />
            </Routes>
        </div>
    </div>
  )
}

export default main