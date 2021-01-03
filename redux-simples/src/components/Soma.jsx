import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Soma = props => {
    const {min,max} = props
    return (
        
        <Card title="Soma dos numeros" blue> 
        <div >
                    <span>
                        <span>Resultado: </span>
                        <strong>{(min + max)}</strong>
                    </span>
        </div>

        </Card>
    )
}


const mapStateToProps = state => {
    return {
        ...state.numeros
    }
}

export default connect(mapStateToProps)(Soma)