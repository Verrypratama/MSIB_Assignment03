// Verry Pratama Saputra

function isArithmeticProgression(numbers){
    if(numbers.length < 2){
        return false;
    }

    let hasil = numbers[2] - numbers[1];
    for(i = 2; i < numbers.length; i++){
        if(numbers[i] - numbers[i - 1] !== hasil){
            return false;
        }
    }
    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5])); // true
console.log(isArithmeticProgression([2, 4, 6, 9])); // false
console.log(isArithmeticProgression([10, 20, 30, 40])); // true
console.log(isArithmeticProgression([1, 2])); // true
console.log(isArithmeticProgression([5])); // false