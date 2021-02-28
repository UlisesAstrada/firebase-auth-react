import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebaseconfig'


function Menu() {

  const [usuario, setUsuario] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUsuario(user.email)
      }
    })
  }, [])
  
  const CerrarSesion = () => {
    auth.signOut()
    setUsuario(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">Iniciar sesión</Link>
          </li>
        </ul>
        {
          usuario ? 
          (<button
            onClick={CerrarSesion} 
            className="btn btn-danger">Cerrar sesión</button>) 
          : 
          (<span></span>)
        }
      </nav>
    </div>
  )
}

export default Menu
