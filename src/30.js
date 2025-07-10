// #### 30. Symbol - Unique ID

// * **Problem Statement:** Create a function `createUniqueId()` that returns a unique ID using `Symbol()`. Demonstrate that two calls to this function produce different symbols.
// * **Concepts Quizzed:** `Symbol()` primitive type, guaranteed uniqueness.
// * **Hints:** `const id = Symbol();`
// * **Difficulty:** Difficult (due to less common usage compared to other ES6 features, but conceptually simple)

function createUniqueId() {
  const uniqueId = Symbol("uniqueId");
  console.log(`Generated Unique ID: ${uniqueId.toString()}`);
  return uniqueId;
}

const id1 = createUniqueId();
console.log(id1); 




// output

// Generated Unique ID: Symbol(uniqueId)
// Symbol(uniqueId)






// Symbol() creates a unique, immutable value.
// Useful for creating non-colliding property keys.
// Hidden from regular enumeration.
// Essential in meta-programming and library design.