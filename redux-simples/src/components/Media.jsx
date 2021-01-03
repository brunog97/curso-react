import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Media =  props => {
   const {min, max } = props
    return (
        <Card title="Média dos numeros" green> 
        <div >
                    <span>
                        <span>Resultado: </span>
                        <strong>{(max + min)/2}</strong>
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

export default connect(mapStateToProps)(Media)