import React from 'react'
import CSS from './Login.css'



function Login() {
    document.body.style.backgroundColor = "blue";
    
  return (
    <div style={{textAlign: 'center'}}>
        <div style={{
            width: "200px",
            height: "100px",
            backgroundColor: "black",
            opacity: 0.5,
        }}>
            <div id='top'>Login</div>
        </div>
    </div>
  )
}

export default Login