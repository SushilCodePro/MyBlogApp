import { Link } from 'react-router-dom';

function NavBar(){
    return(
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                    {/* <Link to="/path">Link Text</Link> */}
                </li>
                <li>
                    <Link to="/createpost">Create Post</Link>
                </li>
            </ul>
    );
}

export default NavBar;