// Verry Pratama Saputra


function arrSum(arr) {
    let nilai_max_awal = arr[0];
    let nilai_max_akhir = arr[0];
    let mulai = 0, akhir = 0, s = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > nilai_max_akhir + arr[i]) {
            nilai_max_akhir = arr[i];
            s = i;
        } else {
            nilai_max_akhir += arr[i];
        }

        if (nilai_max_akhir > nilai_max_awal) {
            nilai_max_awal = nilai_max_akhir;
            mulai = s;
            akhir = i;
        }
    }

    return [arr.slice(mulai, akhir + 1), nilai_max_awal];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
