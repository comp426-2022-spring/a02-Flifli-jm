import { coinFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';
const args = minimist (process.argv);
agrs['call']
const call = args.call
if(call == null) {
    console.error("Error: invalid input")
} else if(call != 'heads' && call != 'tails') {
    console.error("Error: invalid input")
} else {
    console.log(flipACoin(call))
}