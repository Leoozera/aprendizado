import axios from "axios"; 
async function sendForm(evento, condominio, numero, pautas) {
    evento.preventDefault();
    console.log("SendForm - req")
     
    await axios.post('http://localhost:3333/postarassembleia', {
        condominio: condominio,
        numero: numero,
        pautas: pautas
    })
}

export default sendForm;