
import * as fs from 'fs';

const exampleInput: number[][]  = [
    [7,6,4,2,1],
    [1,2,7,8,9],
    [9,7,6,2,1],
    [1,3,2,4,5],
    [8,6,4,4,1],
    [1,3,6,7,9]
]

export function thatsIt(input: number[][] | undefined) {
    let data: number[][] = input ? input : exampleInput;

    const result = calculateIfObjectIsOrder(data);

    console.log("result: ", result);

}

function calculateIfObjectIsOrder(data: number[][]){
    let safe = 0;
    for(const array of data){
        if(array[0] > array[1]){
            console.log("descending: array[0]: ", array[0], "array[1]: ", array[1])
            //desending
            console.log("array: ", array)
            safe += descending(array);
            continue;
        }
        else{
            console.log("accending: array[0]: ", array[0], "array[1]: ", array[1])
            console.log("array: ", array)
            safe += accending(array);
        }
    }
    return safe;
}

function descending(array: number[]): number {
    for(let i=0; i< array.length -1; i++){
        console.log(array[i], " > ", array[i+1])
        // if the first number is larger then the 2nd, we arent descending. Return 0
        const numberplus1 = i +1;
        if(array[i] < array[numberplus1]){
            console.log("return 0")
            return 0;
        }
        if(!diffhandler(array[i], array[i+1])) return 0;

    }
    console.log("returns 1")
    return 1;
}

function accending(array: number[]): number {
    for(let i=0; i< array.length -1; i++){
        console.log(array[i], " < ", array[i+1])
        if(array[i] > array[i+1]){
            console.log("returns 0")
            return 0;
        }
        if(!diffhandler(array[i], array[i+1])) return 0;
    }
    console.log("returns 1")
    return 1;
}

function diffhandler(number: number, number2: number){
    if(number-number2 < 0){
        return diffLegit(number2, number)
    }
    return diffLegit(number, number2);
}
function diffLegit(base: number, other: number) {
    if(base-other >= 1 && base-other <= 3){
        console.log("base", base-other);
        return true;
    } 
    return false;
}

function readFileInto2DArray(): number[][] {
    const fileContent = fs.readFileSync('./input.txt', 'utf8');
    const lines = fileContent.split('\n');
  
    const result: number[][] = [];
    for (const line of lines) {
      const numbers = line.trim().split(' ').map(Number);
      result.push(numbers);
    }
  
    return result;
  }

const result = readFileInto2DArray();

thatsIt(result);


// npx tsx <name>.ts