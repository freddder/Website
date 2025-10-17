import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <header className="header">
            <div className="pageButtons">
                <button><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></button>
                <button><Link to='/professional' style={{ textDecoration: 'none' }}>Professional Work</Link></button>
                <button><Link to='/personal' style={{ textDecoration: 'none' }}>Personal Projects</Link></button>
                <button><Link to='/about' style={{ textDecoration: 'none' }}>About Me</Link></button>
                <button onClick={ () => window.open("https://docs.google.com/document/d/1jk5e8JrAq5B7_BRsoqBLWX73XUXPC9FK/edit?usp=drive_link&ouid=112853903530091484741&rtpof=true&sd=true", "_blank", "noreferrer") }>Resume</button>
            </div>
        </header>
    );
}

export default Navbar;