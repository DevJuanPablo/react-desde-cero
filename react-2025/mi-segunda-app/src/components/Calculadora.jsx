import { Component } from "react";

class Calculadora extends Component {
  constructor(props) {
    super(props)

    // estado inicial del componente
    this.state = {
      numero1: 0,
      numero2: 0
    }

    this.setNumber = this.setNumber.bind(this)
  }

  setNumber(e) {
    this.setState({
      ...this.state,
      numero2: e.target.value
    })
  }

  render() {
    return(
      <>
        <h2>{this.props.nombre}</h2>
        <form>
          <input 
            type="number" 
            name="numero1" 
            value={this.state.numero1}
            onChange={(e) => 
              this.setState({ 
                ...this.state,
                numero1: e.target.value
              }
            )}
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
}

export default Calculadora
