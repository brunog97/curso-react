import React from 'react'

export default props => {
   return( <div>
        <h3>Componente Filho</h3>
        <p>{props.children} - {props.sobrenome}</p>
    </div>)
}