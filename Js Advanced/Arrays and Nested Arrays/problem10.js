function solver(length, k) {
    let outputArr = [1];
    for(let i = 1; i<length; i++){
        outputArr[i] = sumLastK(outputArr, k);
    }
    // console.log(k); // k has changed after calling sumLastK
    console.log(outputArr.join(' '));
 
    function sumLastK(arr, k) {
        k = arr.length>k ? k : arr.length;
        let sum = 0;
        for(let i = 1; i<=k; i++){
            sum += arr[arr.length-i];
        }
        return sum;
    }
}
solver(6,3);

