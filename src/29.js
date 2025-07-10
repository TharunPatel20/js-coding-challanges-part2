// #### 29. Destructuring Function Parameters

// * **Problem Statement:** Write a function `displayUserInfo({ name, age, city = "Unknown" })` that takes an object as an argument and uses destructuring directly in the parameter list. The `city` should have a default value "Unknown". Log a message like "Name: \[name], Age: \[age], City: \[city]".
// * **Concepts Quizzed:** Destructuring in function parameters, default values in parameter destructuring.
// * **Hints:** The curly braces `{}` go directly in the function parameter list.
// * **Difficulty:** Difficult

const displayUserInfo = ({ name, age, city = "not mentioned" }) => {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}


displayUserInfo({name:"tharun", age:23, city:"hyderabad"});
displayUserInfo({name:"tharun", age:23});
displayUserInfo({name:"tharun"}); 


// output
// Name: tharun, Age: 23, City: hyderabad
// Name: tharun, Age: 23, City: not mentioned
// Name: tharun, Age: undefined, City: not mentioned