// import { i } from "vitest/dist/index-5aad25c1";
import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...

// note for the person grading this
// The test refused to run with that top import active
// the only way i could get it to run was to comment it out
// if this was wrong i can redo it but it refused every time i tried
// this is what it kept saying. but worked when I commented out line 1

//  FAIL  test/e13.test.js [ test/e13.test.js ]
// Error: Error: Cannot find module vitest/dist/index-5aad25c1 imported from file:///C:/Users/peacefuldecimation/Desktop/applicative-practice-unsolved, file:///C:/Users/peacefuldecimation/Desktop/, file:///C:/Users/peacefuldecimation/Desktop/applicative-practice-unsolved/_index.js, file:///C:/Users/peacefuldecimation/Desktop/node_modules
// Test Files  1 failed (1)
//      Tests  no tests
//   Start at  16:59:58
//   Duration  1.61s (transform 538ms, setup 0ms, collect 0ms, tests 0ms)

  const planets = data.planets;

  return data.planets
    .map((planet) => planet.avgTemp)
    .reduce((temp, currentValue) => temp + currentValue / planets.length, 0);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
