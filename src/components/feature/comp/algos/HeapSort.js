function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}

var arr = [];
var time = 30;

const getParentIndex = (pos) => {
    return Math.floor((pos-1)/2);
}


const AddElement = async (pos, setSampleList) => {

    let val = arr[pos];
    
    while(pos > 0 && arr[getParentIndex(pos)] < val){
        arr[pos] = arr[getParentIndex(pos)];
        arr[getParentIndex(pos)] = val;
        pos = getParentIndex(pos);

        await sleep(time);
        var temp_arr = arr.slice();
        setSampleList(temp_arr);
    }

}

const heapifyAfterRemovalofRoot = async (n, setSampleList) => {
    let val = arr[0];
    let pos = 0;

    while(pos < n){
        let child = (2*pos) + 1;
        if(child >= n) break;
        if(child+1 < n && arr[child] < arr[child+1]) child++;
        if(arr[child] <= val) break;
        
        arr[pos] = arr[child];
        arr[child] = val;

        await sleep(time);
        var temp_arr = arr.slice();
        setSampleList(temp_arr);
        
        pos = child;
    }

}


const HeapSort = async (list_sample, setSampleList, No_sample) => {
    
    arr = list_sample.slice();

    for(let i=1; i<No_sample; i++){
        await sleep(time);
        await AddElement(i, setSampleList);
    }

    let n = No_sample-1; 

    while(n > 0){
        let temp = arr[n];
        arr[n] = arr[0];
        arr[0] = temp;
        
        await sleep(time);
        var temp_arr = arr.slice();
        setSampleList(temp_arr)
        
        await heapifyAfterRemovalofRoot(n, setSampleList);
        n--;
    }

}

export {HeapSort};