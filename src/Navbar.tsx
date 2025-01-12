import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav style={{ background: '#eee', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Action">Action</Link>
        </li>
      </ul>
    </nav>
    );
}