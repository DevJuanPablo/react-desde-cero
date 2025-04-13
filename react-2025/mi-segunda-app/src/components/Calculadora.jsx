import { Component } from "react";

class Calculadora extends Component {

  // PRIMER PASO DEL CICLO DE VIDA
  constructor(props) {
    super(props)

    // estado inicial del componente
    this.state = {
      numero1: 0,
      numero2: 0
    }

    // binding de las funciones
    this.setNumber = this.setNumber.bind(this)
  }

  setNumber(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })

  }

  // SEGUNDO PASO DEL CICLO DE VIDA
  render() {
    return(
      <>
        <h2>{this.props.nombre}</h2>
        <form>
          <input 
            type="number" 
            name="numero1" 
            value={this.state.numero1}
            onChange={this.setNumber}
          />
          <input
            type="number"
            name="numero2"
            value={this.state.numero2}
            onChange={ this.setNumber }
          />
          <input type="submit" name="enviar" value="Sumar" />
        </form>
        <span>Resultado: { Number(this.state.numero1) + Number(this.state.numero2) }</span>
      </>
    )
  }

  // TERCER PASO DEL CICLO DE VIDA
  componentDidMount() {
    console.log('HOLA!')
  }

  // CUARTO PASO DEL CICLO DE VIDA
  componentWillUnmount() {

  }
}

export default Calculadora
