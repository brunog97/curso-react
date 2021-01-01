import React, { useCallback, useState/*, useEffect */} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count,setCount] = useState(0)

    const inc = useCallback( function (delta) {
        setCount(curr => curr + delta)
    },[setCount])

    /*
    useEffect(() => {
        document.title = "new title"
     }, []);
     */

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
             <SectionTitle title="Exercício #01"/>
             <div className="center">
                <span className="text">
                    {count}
                </span>
               <UseCallbackButtons inc={inc}></UseCallbackButtons>
             </div>
        </div>
       

    )
}

export default UseCallback
