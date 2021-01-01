import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFecth } from '../../hooks/useFecth'



const UseRef = (props) => {

    const [count,inc,dec] = useCounter(10)

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    
    const response = useFecth(url)

    function showStates(states)  {
        return states.map( state => <li key={state.sigla}>{state.nome} - {state.sigla}</li> )
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercícico #01"/>
            <div className="center">
                    <span className="text">{count}</span>
                    <div>
                        <button className="btn" onClick = { () => dec()}>DEC</button>
                        <button className="btn" onClick = { () => inc()}>ENC</button>
                    </div>
            </div>
            <SectionTitle title="Exercícico #02"/>
            <div className="center">
                    <ul>
                        {response.data ? showStates(response.data) : 'Não há nada!'}
                    </ul>
            </div>
        </div>
    )
}

export default UseRef
