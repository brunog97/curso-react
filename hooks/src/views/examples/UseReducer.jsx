import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import {initialState,reducer} from '../../store'
import {numberAdd2,login} from '../../store/actions'


const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercícío #01"/>
            <div className="center">
                <span className="text">
                    {state.user ? 
                    <span className="text">Bem vindo {state.user.name}</span>
                    :
                    <span className="text">Usuário não logado!</span>
                }
                </span>
                <span className="text">{state.number}</span>
                <div>
                <button className="btn"
                    onClick={() =>login(dispatch,'Bruno Gomes da Silva')}>Login</button>
                <button className="btn"
                    onClick={() => numberAdd2(dispatch)}>+2</button>
                   <button className="btn"
                    onClick={() => dispatch({type: 'numberMulti7'})}>*7</button>
                   <button className="btn"
                    onClick={() => dispatch({type: 'numberDiv25'})}>/25</button>
                   <button className="btn"
                    onClick={() => dispatch({type: 'numberInt'})}>INT</button>
                     <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', payload: -9})}>-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
