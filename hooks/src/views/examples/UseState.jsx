import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {

    //Define o State
   const  [num, setNum] = useState(0)
   const [name,setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle 
                title="Exercício #01"
            />
            <div className="center">
                <span className="text">
                    {num}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => setNum(num -1)}>
                        -1
                    </button>
                    <button className="btn"
                      onClick={() => setNum(0)}>
                       0
                    </button>
                    <button className="btn"
                      onClick={() => setNum(num +1)}>
                        +1
                    </button>
                </div>
            </div>
            <SectionTitle 
                title="Exercício #02"
            />
            <div className="center">
            <span className="text">
                    {name}
                </span>
                <input type="text" className="input"
                    onChange={ (e) => setName(e.target.value) } />
            </div>
        </div>
    )
}

export default UseState
