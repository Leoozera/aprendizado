import '../css/App.css'



let user = {
    name: "Leonard",
    condominio: "SKR",
    funcao: "Sindico"
}

function App() {
    return (
    <div className='App'>
        <div className='container'>
            <div className='box'>
                <h2>Bem vindo, <span className='span-user'>{user.name}</span></h2>
                <p><span className="span-data">Condomínio </span>{user.condominio}</p>
                <p><span className="span-data">Cargo </span>{user.funcao}</p>
                <br></br>
                <p>Aqui estão as <span className="span-possibilidade">possibilidades</span> para seu condominio</p>

                <div className='botoes'>
                <button>controle</button>
                <button>advertência</button>
                <button>comunicados</button>
                <button>notificação</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default App;