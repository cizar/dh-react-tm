
import React from 'react'
import Lista from '../Lista'
import IngresarElemento from '../IngresarElemento'

var url_techo = 'http://pilote.techo.org/?do=home&do=api.getPaises'

function obtenerDatos (url, callback) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.responseText))
    }
  }
  req.open('GET', url)
  req.send()
}

class Main extends React.Component {
	state = {
    nuevoValor: '',
		elementos: []
	}
	manejarBorrar = (pos) => {
		const { elementos } = this.state
		this.setState({
			elementos: elementos.filter((value, index) => pos !== index)
		})
	}
  handleAgregarElemento = () => {
    const { elementos, nuevoValor } = this.state
    this.setState({
      elementos: [...elementos, nuevoValor],
      nuevoValor: ''
    })
  }
  handleChange = (evento) => {
    this.setState({
      nuevoValor: evento.target.value
    })
  }
  componentDidMount () {
    obtenerDatos(url_techo, (datos) => {
      this.setState({
        elementos: Object.keys(datos.contenido)
      })
    })
  }
  render () {
    const { elementos, nuevoValor } = this.state
    return (
      <div>
        <h1>Con h1!!!!</h1>
        <Lista elementos={elementos} manejarBorrar={this.manejarBorrar}/>
        <IngresarElemento valor={nuevoValor} cambiaValor={this.handleChange} agregarElemento={this.handleAgregarElemento} />
      </div>
    )
  }
}


export default Main
