
// For each of the functions listed below, indicate the O notation as well as your reasoning behind the answer.
// 0(n) - 0 of n; linear time complexity; 0 of 1- constant time complexity
// how is this going to scale

// 1. Even or odd
//0 of 1- constant time complexity

function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }
  

  
// 2. Are You Here?
// 0(n^2) because it is nested and iterates through each array and loop
  
  function areYouHere(arr1, arr2) {
      for (let i=0; i<arr1.length; i++) {
          const element1 = arr1[i];
          for (let j=0; j<arr2.length; j++) {
              const element2 = arr2[j];
              if (element1 === element2) return true;
          }
      }
      return false;
  }
  
  
// 3. Doubler
// 0(n)
  //declaring initial value. Condition. how you are changing the value. its only running 1 time
  function doubleArrayValues(array) {
      for (let i=0; i<array.length; i++) {
          array[i] *= 2;
      }
      return array;
  }
  

  
// 4. New Search
// 0(n) searching through arrays until it find the element it is searching for
  
  function newSearch(array, item) {
      for (let i=0; i<array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }
  
  
// 5. Creating Pairs
// 0(n^2) nested loop. iteration scales quadratically
  
  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }
  

  
// 6. Computing Fibonacci Numbers
// 0(n)
  
  function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        result.push(0);
      }
      else if (i == 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  }
  

  
// 7. Efficient Search
// 0(log n) algorithm reduces time, search, space by half.
  
  function efficientSearch(array, item) {
      let minIndex = 0;
      let maxIndex = array.length - 1;
      let currentIndex;
      let currentElement;
  
      while (minIndex <= maxIndex) {
          currentIndex = Math.floor((minIndex + maxIndex) / 2);
          currentElement = array[currentIndex];
  
          if (currentElement < item) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > item) {
              maxIndex = currentIndex - 1;
          }
          else {
              return currentIndex;
          }
      }
      return -1;
  }
  

// 8. Random element
// 0(1)
  
  function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  
  
// 9. Is It Prime?
  
  function isPrime(n) {
      if (n < 2 || n % 1 != 0) {
          return false;
      }
      for (let i = 2; i < n; ++i) {
          if (n % i == 0) return false;
      }
      return true;
  }
  
  
  
// 10. Factorial of a number w/ recursion
// 0(n) operates linearly
  
  function factorialOf(n) {
      switch (n) {
          case 0:
          case 1:
              return 1;
          default: return n * factorialOf(n - 1);
      }
  }
  