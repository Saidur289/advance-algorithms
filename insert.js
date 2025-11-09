const array = [5, 3, 8 , 4, 2] ;
const insertSort = (array) => {
    for(let i = 1; i < array.length - 1; i++){
        let current = array[i] 
        let j = i - 1
        console.log("j: ", j, "I :", i);
        while(j >= 0 &&  array[j] > current){
          console.log(array[j + 1], array[j]);

            array[j+1] = array[j];
            j--
        }
        array[j + 1] = current
    }
    return array
}
console.log(insertSort(array));