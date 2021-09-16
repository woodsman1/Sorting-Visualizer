function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

const BubbleSort = async (list_sample, setSampleList, No_sample) => {
    
    let arr = list_sample.slice();

    for(let i=0; i<No_sample; i++){
        for(let j=0; j<No_sample-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                await sleep(50);
                var temparr = arr.slice();      // if you wont create new list then the componenet will not render again because it see refrence not value
                await setSampleList(temparr);
            }
        }
    }
}

export { BubbleSort };
