// import add as addition from "./src/28.js"; // cannot use `as` for default exports
import add, {PI as pi, subtract as sub} from "./src/28.js";

console.log("Addition:", add(5, 3)); // 8
console.log("Subtraction:", sub(5, 3)); // 2
console.log("PI:", pi); // 3.14