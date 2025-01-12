import React from 'react';
import HomeModel from './HomeModel.tsx' // FIXME  
import { useNavigate } from 'react-router-dom'

export default function Welcome () {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // change the route later 
    };

    const handleSignUp = () => {
        navigate('/signup'); // change the route later 
    };

    const buttonContainers: React.CSSProperties = {
        position: "relative",
        top: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };

    // 
    const tryStyle: React.CSSProperties = {
        color: "0xffffff",
    };

    const loginStyle: React.CSSProperties = {
        color: "0xffffff",
    };

    const welcomeStyle: React.CSSProperties = {
        display: "block", 
        margin: "auto",
        alignItems: "center",
        height: "20rem",
        width: "80vw",
        borderRadius: "5px",

    };

    return (
        <div style={welcomeStyle}>
            <h1 style={{marginTop: "3rem", paddingTop: "3rem"}}>BIG TITLE</h1>
            <div style={buttonContainers}>
                <button style={loginStyle} onClick={handleLogin}>Login</button>
                <button style={tryStyle} onClick={handleSignUp}>Try it now</button>
            </div>
        </div>
    );
}