import '../css/Assembleia.css';
import React, { Component, useState } from 'react';
import sendForm from './SendForm';

function Assembleia() {
    const [condominio, setCondominio] = useState('')
    const [numero, setNumero] = useState ('');
    const [pautas, setPautas] = useState ('');


    return (
        <div className="Assembleia">
            <div className='line'></div>
            <h1>Assembleia</h1>
            <p>Informe aos visitantes as pautas debatidas</p>
            <div className='container-form'>
                <div className='box-form'>
                    <form>
                        <br></br>
                        <span>Nome do condominio </span><input type={"text"} id='nome-condominio' onChange={(event) => setCondominio(event.target.value)}></input>
                        <br></br>
                        <span>Número de condôminos presentes </span><input type={"number"} id='numero-condominos' onChange={(event) => setNumero(event.target.value)}></input>
                        <br></br>
                        <br></br>
                        <span id="pautas-text">Pautas discutidas na reunião</span>
                        <input type={"text"} id="pautas" onChange={(event) => setPautas(event.target.value)}></input>
                        <br></br>
                        <button className='button-enviar' onClick={(evento) => sendForm(evento, condominio, numero, pautas)}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Assembleia;