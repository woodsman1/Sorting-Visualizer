function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}

var arr = [];
var time = 100;


const decidePivot = async (st, ed) => {
    let mid = st + Math.floor((ed-st)/2);

    // get the pivote using method given in the quick sort
    if(arr[st] < arr[ed]){
        if(arr[mid] < arr[ed] && arr[mid] >= arr[st]) return mid;
        else if(arr[mid] <= arr[st]) return st;
        else return ed;
    }else{
        if( arr[mid] <= arr[ed]) return ed;
        else if(arr[mid] < arr[st] && arr[mid] >= arr[ed]) return mid;
        else return st;
    }
}

const Partition = async (st, ed, setSampleList) => {
    // let start_arr = arr.slice(0, st);
    // let end_arr = arr.slice(ed);

    let pivot = await decidePivot(st, ed);

    // console.log("decided : ", pivot)

    const temp = arr[ed];  // moving pivote to last
    arr[ed] = arr[pivot];
    arr[pivot] = temp;

    let left = st, right = ed-1;

    while(left <= right){
        if(arr[left] > arr[ed] && arr[right] <= arr[ed]){
            const tp = arr[left];  // swaping left and right
            arr[left] = arr[right];
            arr[right] = tp;

            left++;
            right--;

            await sleep(time);
            var ref_arr = arr.slice();
            setSampleList(ref_arr);
            continue;
        }

        if(arr[left] <= arr[ed]) left++;
        if(arr[right] > arr[ed]) right--;
    }

    const temp2 = arr[left];  // swaping left and right
    arr[left] = arr[ed];
    arr[ed] = temp2;

    await sleep(time);
    var ref_arr = arr.slice();
    setSampleList(ref_arr);

    return left;
} 

const quickSort = async (st, ed, setSampleList) => {
     
    if(st >= ed) return;
    let pivot = await Partition(st, ed, setSampleList);
    
    await quickSort(st, pivot-1, setSampleList);
    await quickSort(pivot+1, ed, setSampleList);
}


const QuickSort = async(list_sample, setSampleList, No_sample) => {
    arr = list_sample.slice();

    await quickSort(0, No_sample-1, setSampleList);
}

export { QuickSort };


// https://www.youtube.com/watch?v=Hoixgm4-P4M&t=150s