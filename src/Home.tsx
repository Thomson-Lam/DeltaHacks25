import React from 'react';
import Stats from './Stats.tsx'
import HomeModel from './HomeModel.tsx' 
/*
Home: stats page glass pane, background: 3d scene 

*/

const homeStyle: React.CSSProperties = {
    width: "100%",
    height: "60vh",
    
}
// return stats 
export default function Home () {
    return (
        <div style={homeStyle}>
            <HomeModel  url="public/forest3D.gltf" position={[1, 1, 1]} scale={100} />
        </div>
    );
}