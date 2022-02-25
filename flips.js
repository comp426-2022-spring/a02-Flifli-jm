// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist';
// Call the coinFlip function and put the return into STDOUT 
const args = minimist (process.argv);
let flipsNum = 1;
if(args.number != null) {
    flipsNum = args.number;
}
function flipResult(flipsResult) {
    let ans = `[`
    let num = flipsResult.length
    for(let i = 0; i < num; i++) {
        if(i != 1)//no comma at first
        ans += `,`
        ans += `${flipsResult[i]}`
    }
    ans += `]`
    return ans;
}
const flipsResult = coinFlips(flipsNum)
//count the result
console.log(flipResult(flipsResult))
console.log(countFlips(flipsResult))