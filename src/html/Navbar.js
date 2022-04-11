import '../css/Navbar.css';
import logo  from '../img/logoapepe.png'

function Navbar() {
  return (
    <div className="Navbar">
      <img className='logo' alt='Apepê logo'src={logo}></img>
      <div className='navegacao'>
        <a><span className="a-span">deslogar</span></a>
      </div>
    </div>
  );
}

export default Navbar;
