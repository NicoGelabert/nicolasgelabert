import React from 'react'

const Register = () => {
  return (
    <div className="container mt-4">
        <h1>Regístrese</h1>
        <div className="d-flex justify-content-center mt-4">
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Nombre' />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder='Contraseña' />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder='Confirmación Contraseña' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register