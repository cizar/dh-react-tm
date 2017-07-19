import React from 'react'
import Elemento from '../Elemento'

const Lista = ({ elementos, manejarBorrar }) => (
  <ul>
    {elementos.map((fruta, index) => 
      <Elemento
        key={index}
        valor={fruta}
        borrar={() => manejarBorrar(index)}/>
    )}
  </ul>
)


export default Lista