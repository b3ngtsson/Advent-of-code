
import * as fs from 'fs';

const exampleInput: number[][]  = [
    [7,6,4,2,1],
    [1,2,7,8,9],
    [9,7,6,2,1],
    [1,3,2,4,5],
    [8,6,4,4,1],
    [1,3,6,7,9],
]


export function thatsIt(input: number[][] | undefined) {
    let data: number[][] = input ? input : exampleInput;

    const result = calculateIfObjectIsOrder(data);

    console.log("result: ", result);

}

function calculateIfObjectIsOrder(data: number[][]){
    let safe = 0;
    for(const array of data){
        if(desc_or_asc(array) == Order.de){
            //console.log("descending: array[0]: ", array[0], "array[1]: ", array[1])
            //console.log("array: ", array)
            //console.log("desc")
            safe += descending(array);
            continue;
        }
        else{
            //console.log("accending: array[0]: ", array[0], "array[1]: ", array[1])
            //console.log("array: ", array)
            //console.log("asc")
            array.reverse()
            safe += descending(array);
        }
    }
    return safe;
}

function desc_or_asc(array: number[]){
    let asc = 0;
    let dec = 0;

    for(let i=0; i< array.length -1; i++){
        if(array[i] > array[i+1]){
            dec ++;
            continue;
        }
        asc++
    }
    console.log("asc:",asc, "dec:", dec)
    if(asc>dec){
        return Order.ac
    }
    return Order.de

}

function descending(array: number[]): number {
    let error: boolean = false;
    for(let i=0; i< array.length -1; i++){
        //console.log(array[i], " > ", array[i+1])
        // if the first number is larger then the 2nd, we arent descending. Return 0
        if(array[i] < array[i+1]){
            if(error){
                console.log("descending: error is already true, returns 0 from error")
                return 0;
            }
            if(array[i] < array[i+2]){
                console.log("descending: returns 0 again")
                return 0;
            }
            error = true;
            continue;
        }
        if(!diffLegit(array[i], array[i+1])){
            if(error){
                console.log("descending: returns 0 from error")
                return 0;
            }
            if(!diffLegit(array[i], array[i+2])){
                console.log("descending: returns 0 again from diff")
                return 0;
            }
            error = true;
        }

    }
    console.log("returns 1")
    return 1;
}


enum Order {
    'ac',
    'de'
}


function diffLegit(low: number, high: number) {
    console.log(low-high)
    if(low-high >= 1 && low-high <= 3){
        //console.log("base", base-other);
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

thatsIt(undefined);


// npx tsx <name>.ts



/* 
function accending(array: number[]): number {
    let error: boolean = false;
    for(let i=0; i< array.length -1; i++){
        //console.log(array[i], " < ", array[i+1])
        if(array[i] > array[i+1]){
            if(error){
                console.log("accending: error is already true, returns 0 from error")
                return 0;
            }
            if(array[i] > array[i+2]){
                console.log("accending: returns 0 again")
                return 0;
            }
            error = true;
            continue;
        }
        if(!diffhandler(array[i], array[i+1], Order.ac)){
            if(error){
                console.log("accending: returns 0 from error")
                return 0;
            }
            if(!diffhandler(array[i], array[i+2], Order.ac)){
                console.log("accending: returns 0 again from diff")
                return 0;
            }
            error = true;
        }
    }
    console.log("returns 1")
    return 1;
} */