import { coinFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';
const args = minimist (process.argv);
args['call']
const call = args.call
if(call == null) {
    console.log("Error: no input")
 //   console.log("Usage: node guess-flip --call=[heads|tails]")
} else if(call != 'heads' && call != 'tails') {
   // console.error("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails].");
} else {
    console.log(flipACoin(call))
}