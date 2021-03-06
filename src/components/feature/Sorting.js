import React, { useEffect, useState } from 'react'
import { BubbleSort } from './comp/algos/BubbleSort';
import { HeapSort } from './comp/algos/HeapSort';
import { MergeSort } from './comp/algos/MergeSort';
import { QuickSort } from './comp/algos/QuickSort';
import { SelectionSort } from './comp/algos/SelectionSort';
import ControlBar from './comp/ControlBar';
import VisualArea from './comp/VisualArea';


const Sorting = () => {

    const [No_sample, setSample] = useState(75);
    const [Algo, setAlgo] = useState(0);
    const [sampleWidth, setSampleWidth] = useState(92/100);
    const [list_sample, setSampleList] = useState([]);
    const [inProcess, setinProcess] = useState(false);

    // use useEffect to generate samples
    useEffect(() => {
        onGenerate();
    }, [No_sample]);


    const onGenerate = () => {
        if(inProcess == true) return;
        const fixed_height = 75; // in vh
        const fixed_wieght = 92; // in percentage

        setSampleWidth(100/No_sample);

        const temp_sample_list = [];

        for(let i=0; i<No_sample; i++){
            temp_sample_list.push(getRandomInteger(1, fixed_height));
        }
        setSampleList(temp_sample_list);
    }

    const onSort = async(index_Algo) => {
        if(inProcess==true) return;
        
        setinProcess(true);
        
        if(index_Algo == 0) await BubbleSort(list_sample, setSampleList, No_sample);
        else if (index_Algo == 1) await QuickSort(list_sample, setSampleList, No_sample);
        else if (index_Algo == 2) await MergeSort(list_sample, setSampleList, No_sample);
        else if(index_Algo == 3) await SelectionSort(list_sample, setSampleList, No_sample);
        else await HeapSort(list_sample, setSampleList, No_sample);
        

        setinProcess(false);
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
                onGenerate={onGenerate}
                onSort ={onSort}/>
        </>
    )
}

export default Sorting
