import '../NavBar/NavBar.css'
const NavBar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">TESLA</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Search</li>
            <li>About us</li>
            <li className='nav-cn'>Contact</li>
        </ul>
        
    </div>
  )
}

export default NavBar