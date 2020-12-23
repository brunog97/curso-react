import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'

export default (props) =>(
    <>
     <Card titulo="Exemplo 9">
        <Contador> 
        
        </Contador>
     </Card>
      <Card titulo="Exemplo 8">
        <Input>
        
        </Input>
     </Card>
    <Card titulo="Exemplo 7">
        <Super>
            
        </Super>
     </Card>
    <Card titulo="Exemplo 6">
         <Pai sobrenome="Freitas"></Pai>
     </Card>
      <Card titulo="Exemplo 5">
         <Condicional numero={10}/>
     </Card>
     <Card titulo="Exemplo 4">
         <Repeticao/>
     </Card>
     <Card titulo="Exemplo 3">
     <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
    </ComFilhos>
    </Card>

     <Card titulo="Exemplo 2">
        <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"/>
    </Card>

    <Card titulo="Exemplo 1">
        <Primeiro/>
    </Card>
    </>
);