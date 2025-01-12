import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
    const navStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",   
        justifyContent: "center",
        zIndex: "1",
        paddingRight: "4rem",
    };
    return (
        <nav style={navStyle}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem'}}>   
        <li>
          <Link style={{color: "white", fontWeight: "bold"}} to="/Profile">Profile</Link>
        </li>
        <li>
          <Link style={{color: "white", fontWeight: "bold"}} to="/Action">Action</Link>
        </li>
      </ul>
    </nav>
    );
}