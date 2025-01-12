import React from "react"


// get info for 

// THE STATS PAGE: Get info from the database: make API call to the server; need endpoint 
export default function Stats() {
const statStyle: React.CSSProperties = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        width: '300px',
        textAlign: 'center',
        display: 'inline-block',
        zIndex: '1',
    };

    return (
        <div style={statStyle}>
        <h1>Home</h1>
        <p>Welcome to the Home page</p>
        </div>
    )

}