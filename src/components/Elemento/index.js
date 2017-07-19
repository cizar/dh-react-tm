import React from 'react'
import PropTypes from 'prop-types'

const Elemento = ({ valor, borrar }) => ( 
	<li>
		<div>{valor} <a href="#" onClick={borrar}>borrar</a></div>
	</li>
)

Elemento.propTypes = {
	valor: PropTypes.string.isRequired,
	borrar: PropTypes.func.isRequired
}


export default Elemento