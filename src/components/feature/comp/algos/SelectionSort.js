function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
} 

const findSmallest = (arr, k, n) => {
    let mn = arr[k], pos = k;

    for(let i=k+1; i<n; i++){
        if(arr[i] < mn){
            mn = arr[i];
            pos = i;
        }
    }
    return pos;
}

const SelectionSort = async(list_sample, setSampleList, No_sample) => {
    let arr = list_sample.slice();

    for(let i=0; i<No_sample; i++){
        let pos = findSmallest(arr, i, No_sample)
        let temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;

        var temp_arr = arr.slice();
        await sleep(100);
        await setSampleList(temp_arr);
    }
}

export { SelectionSort };
