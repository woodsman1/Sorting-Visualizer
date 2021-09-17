import React, { useState } from 'react'

const ControlBar = ({No_sample, Algo, setAlgo, setSample, onSort, onGenerate}) => {

    const sort_options =[
        "Bubble Sort",
        "Quick Sort",
        "Merge Sort",
        "Selection Sort",
        "Heap Sort",
    ]

    const [index_Algo, setAlgoIndex] = useState(Algo);
    const [comp_sample, setCompSample] = useState(No_sample);

    const changeAlgo = (e) => {
        setAlgoIndex(parseInt(e.target.value, 10) );
    }

    const changeRange = (e) => {
        setCompSample(parseInt(e.target.value, 10));
    }

    const setonGenerate = () =>{
        if(comp_sample != No_sample)
            setSample(comp_sample);
        else
            onGenerate();
    }

    const onClickSort = () => {
        setAlgo(index_Algo);
        onSort(index_Algo);
    }

    return (
        <div className="ControlBar">

            <div className="innerControlBar same-horizon">
                <div className="selection-list">
                    <select className = "open-up" onChange={changeAlgo} value={index_Algo}>
                        <option value="0">{sort_options[0]}</option>  
                        <option value="1">{sort_options[1]}</option>
                        <option value="2">{sort_options[2]}</option>
                        <option value="3">{sort_options[3]}</option>
                        <option value="4">{sort_options[4]}</option>
                    </select>
                </div>

                <div className="white-text  same-horizon sample-range">
                    <label htmlFor="customRange2" className="form-label label-custom">Sample Size </label>
                    <input 
                        type="range" 
                        className="form-range range-bar" 
                        min="10" max="150" 
                        id="customRange2" 
                        defaultValue={comp_sample}
                        onChange={changeRange}
                    ></input>
                </div>

                <div 
                    className="white-text same-horizon sort-button"
                    onClick ={onClickSort}
                    >
                    <p > SORT </p>
                </div>

                <div 
                    className="white-text same-horizon sort-button"
                    onClick={setonGenerate}>
                    <p> GENERATE </p>
                </div>

                
            </div>

        </div>
    )
}

export default ControlBar
