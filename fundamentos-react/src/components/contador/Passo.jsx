import React from 'react'

export default (props) => {
        return(

            <input type="number" value={props.passo} 
                onChange={e => props.onPassoChange(+e.target.value)} 
                // this.setState({ passo: +e.target.value }) }//Como é para ser um valor numerico o + para conversaõ }
            />
        )
}
