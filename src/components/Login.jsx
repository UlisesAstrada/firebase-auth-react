import React, { useState } from 'react'
import {auth} from '../firebaseconfig'
import {useHistory} from 'react-router-dom'

function Login () {
  const historial = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState(null)

  const RegistrarUsuario = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        historial.push('/')
      })
      .catch (err => {
        if(err.code === 'auth/invalid-email') {
          setMsgError('Verifique que el email sea correcto')
        }
        if(err.code === 'auth/weak-password') {
          setMsgError('La contraseña debe tener al menos 6 caracteres')
        }
      })
    }

  const LoginUsuario = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        historial.push('/')
      })
      .catch(err => {
        if(err.code === 'auth/wrong-password') {
          setMsgError('Contraseña incorrecta')
        }
        if(err.code === 'auth/user-not-found') {
          setMsgError('Email incorrecto')
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
            className="btn btn-block mt-3 btn-dark text-white rounded"
            type="submit" 
            value="Registrarme"/>
        </form>
        <button
          onClick={LoginUsuario} 
          className="btn btn-success btn-block mt-2 text-white rounded">Iniciar sesión</button>
        {
          msgError !== null ? (<div className="alert alert-danger" role="alert">{msgError}</div>) : (<span></span>)
        }
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login