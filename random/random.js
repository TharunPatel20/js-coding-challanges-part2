const obj = {name:"name", age: 20, address:"city"};

console.log(obj?.address?.age || "City not found");
console.log(obj?.city ?? "City not found");

console.log(Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => {
    console.log("All promises resolved:", results);
}).catch(err => {
    console.error("Error in promises:", err);
}));