import React from 'react'

function Login() {
  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className="form-group">
          <input
            className="form-control mb-3"
            placeholder="Introduce tu email" 
            type="text"/>
          <input
            className="form-control"
            placeholder="Introduce tu contraseña" 
            type="text"/>
          <input 
            className="btn btn-block mt-3 bg-success text-white rounded"
            type="submit" 
            value="Registrar usuario"/>
        </form>
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login
