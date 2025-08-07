myArray = [1, 2, 3, 4, 3, 2, 1, 3, 5, 1];

function removeDuplicates(array){
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[j] == array[i]){
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}

console.log(removeDuplicates(myArray));