import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/" state={'This is state from other component'}>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>   
                </li>
                <li>
                <Link to="/post">Post</Link>
                </li>
                <li>
                <Link to="/post/10">Post 10</Link>
                </li>
                <li>
                <Link to="/redirect">Redirect</Link>
                </li>
            </ul>
        </nav>
    )
}