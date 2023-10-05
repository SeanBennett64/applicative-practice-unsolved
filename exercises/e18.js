import { maxBy } from './e17';
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const asteroidData = data.asteroids;

  const discoveryYears = asteroidData.map(asteroid => asteroid.discoveryYear);

  const { maxYear } = discoveryYears.reduce(
    (accumulator, year) => {
      accumulator.counts[year] = (accumulator.counts[year] || 0) + 1;
      if (accumulator.counts[year] > accumulator.maxCount) {
        accumulator.maxCount = accumulator.counts[year];
        accumulator.maxYear = year;
      }
      return accumulator;
    },
    { counts: {}, maxCount: -1, maxYear: null }
  );

  return +maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
