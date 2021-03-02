import React, { useState } from 'react'
import {auth} from '../firebaseconfig'

function Login () {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState(null)

  const RegistrarUsuario = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then(res => alert('Usuario registrado'))
      .catch (e => {
        if(e.code === 'auth/invalid-email') {
          setMsgError('Verifique que el email sea correcto')
        }
        if(e.code === 'auth/weak-password') {
          setMsgError('La contraseña debe tener al menos 6 caracteres')
        }
      })
    }
  return (  
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <input
            onChange={(event) =>{setEmail(event.target.value)}}
            className="form-control mb-3"
            placeholder="Introduce tu email" 
            type="text"/>
          <input
            onChange={(event) =>{setPassword(event.target.value)}}
            className="form-control"
            placeholder="Introduce tu contraseña" 
            type="password"/>
          <input 
            className="btn btn-block mt-3 bg-success text-white rounded"
            type="submit" 
            value="Registrar usuario"/>
        </form>
        {
          msgError !== null ? (<div className="alert alert-danger" role="alert">{msgError}</div>) : (<span></span>)
        }
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login