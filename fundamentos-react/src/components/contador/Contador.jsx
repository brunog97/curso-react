import React, { Component } from 'react'
import Display from './Display'
import Passo from './Passo'

export default 
class Contador extends Component 
{
    state = {
        passo: this.props.passo || 1,  //Caso não tenha nada em passo começa com 1
        valor: this.props.valor || 0   //Caso não tenha nada em valor começa com 0
    }

    inc = () =>
    {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }

    dec = () =>
    {
        this.setState({
            valor: this.state.valor - this.state.passo 
        })

    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })

    }
    /*
    constructor(props) {
        super(props);

        this.state = {
            passo: props.passo, 
            valor: 0
        }
    }
    */

    render(){
             return (
                <div>
                    <h2>Contador</h2>
                   <Passo passo={this.state.passo} 
                    onPassoChange={this.mudarPasso}
                   >
                        
                   </Passo>
                   <Display valor={this.state.valor}>

                   </Display>


                    <div>
                        <button onClick={this.inc }>+</button>
                        <button onClick={this.dec}>-</button>
                    </div>
                </div>

             )
    }


}


