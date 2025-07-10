
// #### 26. Promise.race() - Fastest API Call

// * **Problem Statement:** Assume you have the `fetchData(id)` function from Challenge 15. Use `Promise.race()` to get the result of the fastest promise among `fetchData(1)`, `fetchData(2)`, and `fetchData(3)`. Log the first resolved value or the first rejected error.
// * **Concepts Quizzed:** `Promise.race()`, handling the first settled promise.
// * **Hints:** `Promise.race()` returns a promise that settles as soon as one of the input promises settles (either resolves or rejects).
// * **Difficulty:** Difficult

async function fetchData1(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id < 1 || id > 3) {
          reject(`Error: Invalid ID ${id}`);
        } else {
          resolve(`Data for ID ${id}`);
        }
      }, 1000);
    });
  }

  async function fetchData2(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id < 1 || id > 3) {
          reject(`Error: Invalid ID ${id}`);
        } else {
          resolve(`Data for ID ${id}`);
        }
      }, 2000);
    });
  }


  Promise.race([
    fetchData2(1),
    fetchData2(2),
    fetchData2(3),
    fetchData1(4)
  ]).then((result) => {
    console.log("Fastest data fetched successfully:", result);
  } ).catch((error) => {
    console.error("Error fetching data:", error);
  });   



//   Promise.race => this will return the first settled promise, either resolved or rejected.
//   If any of the promises resolves, it will return that value.