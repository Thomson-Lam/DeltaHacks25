import React from 'react';
// import Stats from './Stats.tsx' Get user stats from backend 
import HomeModel from './HomeModel.tsx';
import { Outlet }  from 'react-router-dom';
import Navbar from './Navbar.tsx'; 
/*
Home: stats page glass pane, background: 3d scene 

Handling render per user stats 

*/

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
    position: "fixed",
    top: "0", 
    left: "0",
    display: "flex",
    flexDirection: "row", 
    justifyContent: "center",
};

// the home page needs stats >> figure that out! 
// deal with the model later, after the nav is done 
export default function Home () {
    return (
        <>
        <div style={pageBackground} />
        <div style={navBar}>
            <Navbar />
        </div>
        <div>
            <HomeModel url="public/forest3D.gltf" position={[0, 0, 0]} scale={1} />
        </div>
        <Outlet /> 
        </>
    );
}