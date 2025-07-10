// #### 27. Generator Functions - Simple Sequence

// * **Problem Statement:** Write a generator function `idGenerator()` that yields sequential IDs starting from 1 (1, 2, 3, ...).
// * **Concepts Quizzed:** `function*` syntax, `yield` keyword, iterators.
// * **Hints:** Use a `while(true)` loop and increment a counter inside the generator.
// * **Difficulty:** Difficult (if new to generators)

function* idGenerator() {
  let i = 1;

  while (true) {
    yield i++;
    if (i == 11) {
      return; // Optional: Stop after 10 IDs if desired
    }
  }
}

const generator = idGenerator();
while (true) {
  let x = generator.next();
  
  if (!x.done) console.log(x.value);
  else break;
}



//  for any generation functions : 
//     1. use `function*` to define a generator function
//     2. use `yield` to yield values one by one
//     3. use `next()` to get the next value from the generator
//     4. use `done` property to check if the generator is finished
//     5. use `return` to stop the generator if needed

//     how **yiels** works ??
//     - `yield` pauses the function execution and returns the value to the caller
//     - the next time `next()` is called, execution resumes from where it was paused