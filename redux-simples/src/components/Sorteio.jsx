import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Sorteio = props => {
    
    const {min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    
    return (
        <Card title="Sorteio de numeros" purple> 
        <div >
                    <span>
                        <span>Resultado: </span>
                        <strong>{aleatorio}</strong>
                    </span>
        </div>

        </Card>
    )
}

function mapStateToProps(state) { 
    return { 
        ...state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio)