import React from 'react';
// import Stats from './Stats.tsx' Get user stats from backend 
import HomeModel from './HomeModel.tsx';
import { Outlet }  from 'react-router-dom';
import Navbar from './Navbar.tsx'; 
/*
Home: stats page glass pane, background: 3d scene 

Handling render per user stats 


*/

const homeStyle: React.CSSProperties = {
    width: "70rem",
    height: "100vh",
}

const navBar: React.CSSProperties = { 
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row", 
    justifyContent: "center",
};

// the home page needs stats >> figure that out! 
// deal with the model later, after the nav is done 
export default function Home () {
    return (
        <>
        <div style={navBar}>
            <Navbar />
        </div>
        <Outlet />
        </>
    );
}