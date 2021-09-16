import React, { useEffect, useState } from 'react'
import ControlBar from './comp/ControlBar';
import VisualArea from './comp/VisualArea';

const Sorting = () => {

    const [No_sample, setSample] = useState(100);
    const [Algo, setAlgo] = useState(0);
    const [sampleWidth, setSampleWidth] = useState(92/100);
    const [list_sample, setSampleList] = useState([]);

    // use useEffect to generate samples

    useEffect(() => {
        onGenerate();
    }, [No_sample]);
    

    const onGenerate = () => {
        const fixed_height = 75; // in vh
        const fixed_wieght = 92; // in percentage

        setSampleWidth(100/No_sample);

        const temp_sample_list = [];

        for(let i=0; i<No_sample; i++){
            temp_sample_list.push(getRandomInteger(0, fixed_height));
        }
        setSampleList(temp_sample_list);
    }


    const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <>
            <VisualArea No_sample={No_sample} list_sample={list_sample} sampleWidth={sampleWidth}/>
            <ControlBar 
                No_sample={No_sample} 
                Algo={Algo} setAlgo={setAlgo} 
                setSample={setSample}
                onGenerate={onGenerate}/>
        </>
    )
}

export default Sorting
