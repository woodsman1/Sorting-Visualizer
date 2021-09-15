import React, { useState } from 'react'
import Sorting from '../Sorting'

const ControlBar = ({No_sample, Algo}) => {

    const sort_options =[
        "Bubble Sort",
        "Quick Sort",
        "Merge Sort",
        "Selection Sort",
        "Heap Sort",
    ]

    const [index_Algo, setAlgoIndex] = useState(Algo);

    const handleChange = (e) => {
        setAlgoIndex(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="ControlBar">

            <div className="innerControlBar">
                <div className="selection-list">
                    <select className = "open-up" onChange={handleChange} value={index_Algo}>
                        <option value="0">{sort_options[0]}</option>  
                        <option value="1">{sort_options[1]}</option>
                        <option value="2">{sort_options[2]}</option>
                        <option value="3">{sort_options[3]}</option>
                        <option value="4">{sort_options[4]}</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default ControlBar
