import '../css/Assembleia.css';
import React, { Component } from 'react';
import Form from '../domain/usecases/Form';

let scriptForm = new Form();

function Assembleia() {
    return (
        <div className="Assembleia">
            <div className='line'></div>
            <h1>Assembleia</h1>
            <p>Informe aos visitantes as pautas debatidas</p>

            <div className='container-form'>
                <div className='box-form'>
                    <form>
                        <br></br>
                        <span>Número de condôminos presentes </span><input type={"number"} id='numero-condominos' onChange={(event) => scriptForm.updateInputNumero(event)}></input>
                        <br></br>
                        <br></br>
                        <span id="pautas-text">Pautas discutidas na reunião</span>
                        <input type={"text"} id="pautas" onChange={(event) => scriptForm.updateInputPautas(event)}></input>
                        <br></br>
                        <button className='button-enviar' onClick={(event) => scriptForm.sendForm(event)}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Assembleia;