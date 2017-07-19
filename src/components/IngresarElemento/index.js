import React from 'react'

const IngresarElemento = ({ agregarElemento, valor, cambiaValor }) => (
  <form onSubmit={(event) => {
    event.preventDefault()
    agregarElemento()
  }}>
    <input
      type="text"
      value={valor}
      onChange={cambiaValor}
      autoFocus
    />
  </form>
)

export default IngresarElemento