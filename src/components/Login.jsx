import React, { useState } from 'react'
import {auth} from '../firebaseconfig'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const RegistrarUsuario = (event) => {
    event.preventDefault()
    try {
      auth.createUserWithEmailAndPassword(email, password)
      alert('Usuario registrado')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className="form-group">
          <input
            onChange={(event) =>{setEmail(event.targe.value)}}
            className="form-control mb-3"
            placeholder="Introduce tu email" 
            type="text"/>
          <input
            onChange={(event) =>{setPassword(event.targe.value)}}
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
