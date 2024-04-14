import "../styles/Navbar.css"
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="alfblogs">Alf<span>Blogs</span></a>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">News</a>
      </div>
      <a href="#">
        <Button variant={"primary"} size={"sm"}>
          Subscribe
        </Button>
      </a>
    </nav>
  );
};

export default Navbar;