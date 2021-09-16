import React, { useState } from 'react'

const ControlBar = ({No_sample, Algo, setAlgo, setSample}) => {

    const sort_options =[
        "Bubble Sort",
        "Quick Sort",
        "Merge Sort",
        "Selection Sort",
        "Heap Sort",
    ]

    const [index_Algo, setAlgoIndex] = useState(Algo);
    const [comp_sample, setCompSample] = useState(No_sample);

    const handleChange = (e) => {
        setAlgoIndex(parseInt(e.target.value, 10) );
        console.log(e.target.value);
    }

    const changeRange = (e) => {
        setCompSample(parseInt(e.target.value, 10));
        console.log(e.target.value);
    }

    return (
        <div className="ControlBar">

            <div className="innerControlBar same-horizon">
                <div className="selection-list">
                    <select className = "open-up" onChange={handleChange} value={index_Algo}>
                        <option value="0">{sort_options[0]}</option>  
                        <option value="1">{sort_options[1]}</option>
                        <option value="2">{sort_options[2]}</option>
                        <option value="3">{sort_options[3]}</option>
                        <option value="4">{sort_options[4]}</option>
                    </select>
                </div>

                <div className="white-text  same-horizon sample-range">
                    <label for="customRange2" className="form-label label-custom">Sample Size </label>
                    <input 
                        type="range" 
                        className="form-range range-bar" 
                        min="0" max="200" 
                        id="customRange2" 
                        defaultValue={comp_sample}
                        onChange={changeRange}
                    ></input>
                </div>

                <div 
                    className="white-text same-horizon sort-button"
                    onClick={}>
                    <p > SORT </p>
                </div>

                <div 
                    className="white-text same-horizon sort-button"
                    onClick={}>
                    <p> GENERATE </p>
                </div>

                
            </div>

        </div>
    )
}

export default ControlBar
