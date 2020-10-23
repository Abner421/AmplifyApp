import { checkPropTypes } from 'prop-types'
import React, { Component } from 'react'
//Obtiene datos de los inputs

const Perrito = () => (
  <span role='img' aria-label='perrito'>
    🐶
  </span>
)

class InputNoControlado extends Component {
  nombre = React.createRef()
  email = React.createRef()

  handleClick = () => {
    const nombre = this.nombre.current.value //Se extrae la info.
    const email = this.email.current.value

    //MAnejo de datos
    this.props.onSend({nombre,email})
  }

  render(){
    return(
      <div>
        <input
        type="text"
        ref={this.nombre}
        placeholder='Nombre'
        />
        <input
        type="text"
        ref={this.email}
        placeholder='Email'
        />
        <button onClick={this.handleClick}>
          Enviar
        </button>
      </div>
    )
  }
}

class App extends Component {
  
  send = (data) => {
    console.log(data)
  }
  
  render() {
    return (
      <div>
        <h1>Evidencia TiposSO y AWS <Perrito /></h1>
        <InputNoControlado 
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App
