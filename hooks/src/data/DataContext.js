import React from 'react'

export const data = {
    num : 123, 
    text: 'Context'
}

 const DataContext = React.createContext(data)

 export default DataContext;