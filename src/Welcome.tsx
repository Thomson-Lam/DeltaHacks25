import React from 'react';
import HomeModel from './HomeModel.tsx' 
import { useNavigate } from 'react-router-dom'

export default function Welcome () {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // change the route later 
    };

    const handleSignUp = () => {
        navigate('/signup'); // change the route later 
    };


    const homeStyle: React.CSSProperties = {
        width: "70rem",
        height: "100vh",
    };

    const buttonContainers: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };

    // 
    const tryStyle: React.CSSProperties = {
        color: "red",
    };

    const loginStyle: React.CSSProperties = {
        color: "blue",
    };

    return (
        <div>
            <h1>BIG TITLE</h1>
            <div style={homeStyle}>
            <HomeModel  url="public/forest3D.gltf" position={[1, 10, -10]} scale={2} />
            </div>
            <div style={buttonContainers}>
                <button style={loginStyle} onClick={handleLogin}>Login</button>
                <button style={tryStyle} onClick={handleSignUp}>Try it now</button>
            </div>
        </div>
    );
}