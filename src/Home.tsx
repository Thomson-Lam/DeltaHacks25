import React from 'react';
// import Stats from './Stats.tsx' Get user stats from backend 
import HomeModel from './HomeModel.tsx' 
/*
Home: stats page glass pane, background: 3d scene 

Handling render per user stats 


*/

const homeStyle: React.CSSProperties = {
    width: "60rem",
    height: "100vh",
    backgroundColor: "red",
}
// return stats 
export default function Home () {
    return (
        <div style={homeStyle}>
            <HomeModel  url="public/forest3D.gltf" position={[0, 0, 0]} scale={2} />
        </div>
    );
}