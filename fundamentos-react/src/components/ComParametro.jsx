import React from 'react'

/*
export default param =>
    <>
        <h3>{param.titulo}</h3>
        <p>{param.subtitulo}</p>
        <p>{Array(10).fill(0)}</p> 
    </>
*/

export default props =>
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        <p>{Array(10).fill(0)}</p> 
        <p>{4+ 4}</p> 
    </>