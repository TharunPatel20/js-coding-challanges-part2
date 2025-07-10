// #### 28. Modules - Mix of Named and Default Exports

// * **Problem Statement:** Create a file `utils.js` that has:
//     * A default export for a function `add(a, b)`.
//     * A named export for a constant `PI`.
//     * A named export for a function `subtract(a, b)`.
//     In `app.js`, import all of them and use them.
// * **Concepts Quizzed:** Combining default and named exports, different import syntaxes.
// * **Hints:** `import defaultName, { named1, named2 } from 'module';`.
// * **Difficulty:** Difficult

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const PI = 3.14;

export default add;
export { PI, subtract };
