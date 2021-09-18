function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
} 

var arr = [];
var time = 10;

const merge = async (st1, ed1, st2, ed2, setSampleList) => {
    let i = st1, j= st2;
    var list = arr.slice(0, st1);

    while(i<=ed1 && j<=ed2){

        if(arr[i] < arr[j]){
            list.push(arr[i]);
            i++;
        }else{
            list.push(arr[j]);
            j++;
        }

        var temp_list = list.concat(arr.slice(i, ed1+1), arr.slice(j, ed2+1), arr.slice(ed2+1));
        await sleep(time);
        setSampleList(temp_list);
    }

    while(i<=ed1){
        list.push(arr[i]);
        i++;
        var temp_list = list.concat(arr.slice(i, ed1+1) ,arr.slice(ed2+1));
        await sleep(time);
        setSampleList(temp_list);
    }

    while(j<=ed2){
        list.push(arr[j]);
        j++;
        var temp_list = list.concat(arr.slice(j, ed2+1), arr.slice(ed2+1));
        await sleep(time);
        setSampleList(temp_list);
    }

    arr = list.concat(arr.slice(ed2+1));
    return;
}


const divide = async (st, ed, setSampleList) => {
    if(st >= ed) return;
    let mid  = st + Math.floor((ed - st)/2);
    
    await divide(st, mid, setSampleList);
    await divide(mid+1, ed, setSampleList);
    await merge(st, mid, mid+1, ed, setSampleList)
}


const MergeSort = async(list_sample, setSampleList, No_sample) => {
    arr = list_sample.slice();
    await divide(0, No_sample-1, setSampleList);
}

export {MergeSort}
