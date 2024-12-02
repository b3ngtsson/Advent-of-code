
import * as fs from 'fs';

const exampleInput1 = [3,4,2,1,3,3]
const exampleInput2 = [4,3,5,3,9,3];

export function thatsIt(input1: number[] | undefined, input2: number[] | undefined) {
    let data1: number[] = input1 ? input1 : exampleInput1;
    let data2: number[] = input2 ? input2 : exampleInput2;

    data1.sort();
    data2.sort();

    const data2Index: {} = calculateTotalShown(data2);

    const result = getDiff(data1, data2Index);
    console.log("result: ", result);

}

function calculateTotalShown(data: number[]){
    const dict:kv = {};
    for(const number of data){
        if(!dict[number]){
            dict[number] = 1
            continue;
        }
        dict[number]+=1
    }
    console.log(dict);
    return dict;
}

interface kv{
    [key: string]: number;
}
function getDiff(data1: number[], data2:{}){
    let sizediff: number = 0;
    for(let i = 0; i<data1.length; i++){
        const number1 = data1[i];
        const multipler = data2[number1] ?? 0;
        const diff = number1 * multipler;
        sizediff += diff;
    }
    return sizediff;
}
function readAndSeparateNumbers(fileContent: string): [number[], number[]] {
    const lines = fileContent.split('\n');
  
    const leftNumbers: number[] = [];
    const rightNumbers: number[] = [];
  
    lines.forEach(line => {
      const [left, right] = line.trim().split(/\s+/);
      leftNumbers.push(parseInt(left, 10));
      rightNumbers.push(parseInt(right, 10));
    });
  
    return [leftNumbers, rightNumbers];
  }

const input = fs.readFileSync('./input.txt', 'utf8');
const [leftArray, rightArray] = readAndSeparateNumbers(input);

const data = thatsIt(leftArray, rightArray);