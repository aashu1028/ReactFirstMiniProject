
const Navbar =() =>{
  return (
    <nav className="container">
    <div className="logo">
        <img src="/Images/brand_logo.png" alt="logo" />
        
    </div>
    <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contacts</li>
    </ul>
    <button>Login</button>
</nav>
  );
};
export default Navbar;