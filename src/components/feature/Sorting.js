import React, { useState } from 'react'
import ControlBar from './comp/ControlBar';

const Sorting = () => {

    const [No_sample, setSample] = useState(100);
    const [Algo, setAlgo] = useState(0);


    return (
        <>
            Hello Testing

            <div className="graph-area"></div>


            <ControlBar No_sample={No_sample} Algo={Algo}/>
        </>
    )
}

export default Sorting
