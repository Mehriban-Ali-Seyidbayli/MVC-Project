import { Link } from "react-router-dom"

const Header = ({ addLink }) => {
    return (
        <header>
            <h1><Link className="link" to={"/"}>Form</Link></h1>

            {
                addLink ? (
                    <h3>  <Link className="link" to={"/"}>Go Home</Link></h3>
                ) : (
                    <h3>  <Link className="link" to={"/add-post"}>Add Post</Link></h3>
                )
            }


        </header>
    )
}

export default Header;