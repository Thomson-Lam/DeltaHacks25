import React from 'react';
// import Stats from './Stats.tsx' Get user stats from backend 
import HomeModel from './HomeModel.tsx';
import { Outlet }  from 'react-router-dom';
import Navbar from './Navbar.tsx'; 

const pageBackground: React.CSSProperties = {
   width: "100vw",
   height: "100vh",
   position: "fixed",
   top: 0,
   left: 0,
   background: "radial-gradient(50% 50% at 50% 50%, #AEDAF1 0%, #57C6FE 100%)",
   zIndex: 0, 
};

const navBar: React.CSSProperties = { 
    width: "100vw", 
    height: "100vh",
    position: "fixed",
    top: "0", 
    left: "0",
    display: "flex",
    flexDirection: "row", 
    justifyContent: "center",
    zIndex: "1", 
};

const modelStyle: React.CSSProperties = { 
    height: "40rem",
    width: "40rem",
    margin: "3em",
    marginTop: "3rem"
};

const camera = {
    position: [2, 30, 130] as [number, number, number],
    fov: 20
};

// the home page needs stats >> figure that out! 
// deal with the model later, after the nav is done 
export default function Home () {
    return (
        <>
        <div style={pageBackground} />
        <div style={{display: "flex", flexDirection: "column", margin: "10rem"}}>
        <div style={navBar}>
            <Navbar />
        </div>
        <div>
            <HomeModel url="public/forest3D.gltf" position={[-3, 15, -20]} scale={2} style={modelStyle}  camera={camera}/>
        </div>
        </div>
        <Outlet /> 
        </>
    );
}