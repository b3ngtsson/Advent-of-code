
import * as fs from 'fs';

const exampleInput1 = [3,4,2,1,3,3];
const exampleInput2 = [4,3,5,3,9,3];

export function thatsIt(input1: number[] | undefined, input2: number[] | undefined) {
    let data1: number[] = input1 ? input1 : exampleInput1;
    let data2: number[] = input2 ? input2 : exampleInput2;

    data1.sort();
    data2.sort();

    console.log(data1)
    console.log(data2)
    const result = getDiff(data1, data2);
    console.log("result: ", result);

}

function getDiff(data1: number[], data2:number[]){
    let sizediff: number = 0;
    for(let i = 0; i<data1.length; i++){
        console.log("i = ", i)
        console.log("data1 length: ", data1.length)
        console.log(data1[i])
        const number1 = data1[i];
        const number2 = data2[i];
        const diff = number1 - number2;
        if(diff<0){
            sizediff += (diff/-1)
            continue;
        }
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