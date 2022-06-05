const add = (n1: number, n2: number, printResult: boolean, resultPhrase: string): number => {
    if (printResult) {
        console.log(resultPhrase, n1 + n2);
    } else {
        return n1 + n2;
    }

}

const num1 = 10;
const num2 = 2.5;
const printResult = true
const resultPhrase = 'Result is: ';

const result = add(num1, num2, printResult, resultPhrase);