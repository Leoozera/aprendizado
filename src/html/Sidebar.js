import '../css/Sidebar.css';
import logo from '../img/logoapepe.png'
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar-box">
                <br></br>
                <br></br>
                <br></br>
                <div className='div-logo'>
                    <img className="logo" alt='Apepê' src={logo}></img>
                </div>
                <a>Assembleia</a>
                <a>Comunicados</a>
                <a>Notificações</a>
                <a>Controle</a>
                <button className='button-sair'>Sair</button>
            </div>
        </div>
    );
}

export default Sidebar;
