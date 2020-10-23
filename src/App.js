import React, { Component } from 'react'

//Etiqueta htmlFor (única para react)
const Perrito = () => (
  <span role='img' aria-label='perrito'>
    🐶
  </span>
)

class InputNoControlado extends Component {
  handleSubmit = (event) => {
    event.preventDefault() //Evita la recarga de la página
    const nombre = event.target[0].value //Target hace referencia al formulario y sus índices
    const email = event.target[1].value

    //MAnejo de datos
    this.props.onSend({ nombre, email })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre:</label>
          <input
            type="text"
            placeholder='Nombre'
            id='name'
          />
        </p>
        <p>
          <label htmlFor='email'>Email:</label>
          <input
            type="text"
            placeholder='Email'
            id='email'
          />
        </p>

        <button>
          Enviar
        </button>
      </form>
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
        <h1>
          Evidencia para TiposSO (AWS) <Perrito />
        </h1>
        <InputNoControlado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App
