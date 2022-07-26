import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <Link className="Link" to='/'>Home</Link>
            <Link className="Link" to='/articles'>Articles</Link>
        </nav>
    )
}