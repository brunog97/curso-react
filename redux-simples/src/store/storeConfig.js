/*
Aqui iremos configurar todos nossos reducers e a partir dele geramos a store
*/

import numerosReducer from './reducers/numeros'

import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: numerosReducer, 
    
})

/*
novo estado através dos reducers
*/

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig