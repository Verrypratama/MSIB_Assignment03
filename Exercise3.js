// Verry Pratama Saputra

function sumArray(Arr, int){
    
    let hasil = [];

    for(i = 0; i < Arr.length; i++){
        for(j = i + 1; j < Arr.length; j++){
            if(Arr[i] + Arr[j] === int){
                hasil.push([Arr[i], Arr[j]]);
            }
        }
    }

    return hasil;

}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));