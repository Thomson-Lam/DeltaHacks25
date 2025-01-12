import React, { useState } from 'react';
import HomeModel from './HomeModel.tsx' // FIXME  
import { useNavigate } from 'react-router-dom'

export default function Welcome () {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleLogin = () => {
        navigate('/login'); // change the route later 
    };

    const handleSignUp = () => {
        navigate('/signup'); // change the route later 
    };

    const buttonContainers: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };

    const backgroundStyle: React.CSSProperties = { 
        
    };
    
    const tryStyle: React.CSSProperties = {
    };

    const loginStyle: React.CSSProperties = {
       
    };

    const welcomeStyle: React.CSSProperties = {
         backgroundColor: "blue",
         marginBottom: "5rem",
    };

    const modelStyle: React.CSSProperties = {
        backgroundColor: "magenta",
        height: "200%",
        width: "100%",
        
    };

    const titleStyle: React.CSSProperties = {
       backgroundColor: "rgba(255, 255, 255, 0.5)", 
       textAlign: "center",
        
    };

    const container: React.CSSProperties = { 
        width: "90vw",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",   
        overflow: "hidden",
        marginTop: "1rem",
        
    };

    const camera = {
        position: [2, 30, 130] as [number, number, number],
        fov: 20
    };

    return (
        <>
       <div style={container}>
        <h1 style={titleStyle}>Grow Your Flow</h1>
        <div style={backgroundStyle} />
            <HomeModel url="public/forest3D.gltf" position={[-3, 15, -20]} scale={4} camera={camera} style={modelStyle} />
            <div style={buttonContainers}>
                <button style={loginStyle} onMouseEnter={() => setIsHovered(true)} onClick={handleLogin}>Login</button>
                <button style={tryStyle} onMouseEnter={() => setIsHovered(true)} onClick={handleSignUp}>Try it now</button>
            </div>
        </div> 
        

        </>
    );
}