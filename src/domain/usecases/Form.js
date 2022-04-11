import { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numero: '',
            pautas: ''
        }



    }
    async componentDidMount() {
        this.updateInputNumero = this.updateInputNumero.bind(this);
        this.updateInputPautas = this.updateInputPautas.bind(this);
        this.getData = this.getData.bind(this);
    }

    async updateInputNumero(event) {
        this.setState({ numero: event.target.value })
    }

    async updateInputPautas(event) {
        this.setState({ pautas: event.target.value })
    }

    async getData() {
        return this.state
    }

    async sendForm(event) {

        event.preventDefault();

        let state = await this.getData();

        if (state.numero == '' || state.pautas == '')
            alert("Esta faltando argumentos")
    }
}

export default Form;