import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

//Constante criada para incializar/manipular o state (estado) da calculadora
const initialState = {
    displayValue : '0', //Esse displayValue é o valor exibido na calculadora
    clearDisplay : false,  //Essa propriedade diz se precisa ou não limpar o display
    operation : null,  //Operação (+,-,/,*)
    values : [0,0], // valor 1, limpa e ai vem a operação e depois valor 2 
    current: 0
    //Qual indice do valor (value) eu estou digitando?! Então esta variavel é responsavel
    //por dizer qual indice eu devo manipular
}

export default class Calculator extends Component {

    state = {...initialState}  //Spread 


    constructor(props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }
    clearMemory(){
        //console.log('limpar');
        this.setState({...initialState}); //Voltando o estado para o objeto inicial
    }

    setOperation(operation)
    {
        if(this.state.current === 0){
            
            this.setState({ operation,current: 1, clearDisplay: true });

        }else{
            const equals = (operation === '=') ? true : false ;
            const currentOperation = this.state.operation;
            
            const values = [...this.state.values];

            try{

                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);

            }catch(e){
                values[0] = this.state.values[0];
            }
            
            values[1] = 0;

            this.setState({
                displayValue: values[0], 
                operation: equals ? null : operation, 
                current: equals ? 0 : 1,
                clearDisplay: !equals, 
                values
            })
        }
        //console.log(operation);
    }

    addDigit(n)
    {
        //console.log(n);
        if (n ==='.' && this.state.displayValue.includes('.')){
            return
            //Esta condição verifica se o número já possui um ponto, caso tente
            //ser adicionadio novamente, é ignorado.
        }

        //O display deve ser limpado quando seu estado é 0 ou quando 
        //a variavel cleardisplay for true
        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay 

        const currentValue = clearDisplay ? '': this.state.displayValue
        const displayValue = currentValue + n

        this.setState({displayValue, clearDisplay: false});

        if(n !== '.') {
            //Qual o indice do array que estou mexendo
            const i = this.state.current; 
            //Coloca o valor do display convertido em float em uma nova variavel
            const newValue = parseFloat(displayValue);
            //Cria uma variavel valor que recebe o state 
            const values =  [...this.state.values];
            //values recebe o novo valor 
            values[i] = newValue
            //O estado do objeto recebe o novo valor 
            this.setState({values});
            console.log(values);
        }
    }

     render() {

        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);


        return(
        <div className="calculator">
             <Display value={this.state.displayValue} />
             <Button label="AC" click={this.clearMemory} triple/>   
             <Button label="/"  click={setOperation} operation />  
             <Button label="7"  click={addDigit} />  
             <Button label="8" click={addDigit}/>  
             <Button label="9" click={addDigit}/>  
             <Button label="*" click={setOperation} operation />  
             <Button label="4" click={addDigit}/>  
             <Button label="5" click={addDigit}/>  
             <Button label="6" click={addDigit}/>  
             <Button label="-" click={setOperation} operation/>  
             <Button label="1" click={addDigit}/>  
             <Button label="2" click={addDigit}/>  
             <Button label="3" click={addDigit}/>  
             <Button label="+" click={setOperation} operation/>  
             <Button label="0" click={addDigit} double/>  
             <Button label="." click={addDigit} operation />  
             <Button label="=" click={setOperation} operation/>  
        </div>);
    }
}