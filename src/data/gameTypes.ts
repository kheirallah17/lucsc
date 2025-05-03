export type GameLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Monster';

export type AcademicLevel = 
  | 'School Students'
  | '1st Year College'
  | '2nd Year College'
  | '3rd Year College'
  | 'Final Year College'
  | 'Masters'
  | 'PhD';

export type GamePhase = 'Phase 1' | 'Phase 2';

export type Challenge = {
  id: string;
  title: string;
  description: string;
  points: number;
  timeLimit?: number; // in seconds
  codeTemplate?: string;
  solution?: string;
  testCases?: {
    input: string;
    expectedOutput: string;
  }[];
};

export type GameType = {
  id: string;
  title: string;
  description: string;
  icon: 'Code' | 'LayoutGrid' | 'Award';
  category: string;
  phase: GamePhase;
  difficultyLevels: GameLevel[];
  academicLevels: AcademicLevel[];
  challenges: Challenge[];
  programmingLanguages: string[];
};

export const gameTypes: GameType[] = [
  {
    id: 'complete-code',
    title: 'Complete the Code',
    description: 'Fill in the missing code to make the function work as expected.',
    icon: 'Code',
    category: 'Code Completion',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College', 'Masters', 'PhD'],
    challenges: [
      {
        "id": "fill-add-two-numbers-l1",
        "title": "Add Two Numbers.L1.js",
        "description": "Complete the function to return the sum of a and b.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"function add(a, b) {
      // fill in the code
    }"`,
        "solution": `"function add(a, b) {
      return a + b;
    }"`,
        "testCases": [{ "input": "2, 3", "expectedOutput": "5" }]
      },
      {
        "id": "fill-greet-user-l1",
        "title": "Greet User.L1.js",
        "description": "Fill in the code to greet the user with their name.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"function greet(name) {
      // fill in the code
    }"`,
        "solution": `"function greet(name) {
      return 'Hello, ' + name + '!';
    }"`,
        "testCases": [{ "input": "\"Ali\"", "expectedOutput": "Hello, Ali!" }]
      },
      {
        "id": "fill-is-even-l1",
        "title": "Check Even Number.L1.js",
        "description": "Complete the function to return true if a number is even.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"function isEven(n) {
      // fill in the code
    }"`,
        "solution": `"function isEven(n) {
      return n % 2 === 0;
    }"`,
        "testCases": [{ "input": "4", "expectedOutput": "true" }]
      },
      {
        "id": "fill-array-length-l1",
        "title": "Array Length.L1.js",
        "description": "Return the number of elements in the array.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function count(arr) {
      // fill in the code
    }"`,
        "solution": `"function count(arr) {
      return arr.length;
    }"`,
        "testCases": [{ "input": "[1, 2, 3]", "expectedOutput": "3" }]
      },
      {
        "id": "fill-uppercase-string-l1",
        "title": "Uppercase a String.L1.js",
        "description": "Return the string in uppercase.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function shout(str) {
      // fill in the code
    }"`,
        "solution": `"function shout(str) {
      return str.toUpperCase();
    }"`,
        "testCases": [{ "input": "\"hello\"", "expectedOutput": "HELLO" }]
      },
      {
        "id": "fill-max-two-numbers-l1",
        "title": "Find Max of Two.L1.js",
        "description": "Return the greater of two numbers.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"function max(a, b) {
      // fill in the code
    }"`,
        "solution": `"function max(a, b) {
      return a > b ? a : b;
    }"`,
        "testCases": [{ "input": "5, 10", "expectedOutput": "10" }]
      },
      {
        "id": "fill-reverse-string-l1",
        "title": "Reverse a String.L1.js",
        "description": "Return the reversed version of the string.",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"function reverse(str) {
      // fill in the code
    }"`,
        "solution": `"function reverse(str) {
      return str.split('').reverse().join('');
    }"`,
        "testCases": [{ "input": "\"abc\"", "expectedOutput": "cba" }]
      },
      {
        "id": "fill-loop-sum-l1",
        "title": "Sum from 1 to n.L1.js",
        "description": "Use a loop to sum numbers from 1 to n.",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"function sumTo(n) {
      let sum = 0;
      // fill in the loop
      return sum;
    }"`,
        "solution": `"function sumTo(n) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
    }"`,
        "testCases": [{ "input": "5", "expectedOutput": "15" }]
      },
      {
        "id": "fill-string-length-l1",
        "title": "String Length.L1.js",
        "description": "Return the length of the input string.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function length(str) {
      // fill in the code
    }"`,
        "solution": `"function length(str) {
      return str.length;
    }"`,
        "testCases": [{ "input": "\"test\"", "expectedOutput": "4" }]
      },
      {
        "id": "fill-first-char-l1",
        "title": "First Character.L1.js",
        "description": "Return the first character of a string.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function firstChar(str) {
      // fill in the code
    }"`,
        "solution": `"function firstChar(str) {
      return str[0];
    }"`,
        "testCases": [{ "input": "\"hello\"", "expectedOutput": "h" }]
      },
      {
        "id": "fill-multiply-two-numbers-l1",
        "title": "Multiply Two Numbers.L1.js",
        "description": "Return the product of a and b.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function multiply(a, b) {
      // fill in the code
    }"`,
        "solution": `"function multiply(a, b) {
      return a * b;
    }"`,
        "testCases": [{ "input": "3, 4", "expectedOutput": "12" }]
      },
      {
        "id": "fill-check-zero-l1",
        "title": "Check for Zero.L1.js",
        "description": "Return true if the number is zero.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function isZero(n) {
      // fill in the code
    }"`,
        "solution": `"function isZero(n) {
      return n === 0;
    }"`,
        "testCases": [{ "input": "0", "expectedOutput": "true" }]
      },
      {
        "id": "fill-last-element-l1",
        "title": "Last Array Element.L1.js",
        "description": "Return the last element in the array.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function last(arr) {
      // fill in the code
    }"`,
        "solution": `"function last(arr) {
      return arr[arr.length - 1];
    }"`,
        "testCases": [{ "input": "[1, 2, 3]", "expectedOutput": "3" }]
      },
      {
        "id": "fill-remainder-l1",
        "title": "Find Remainder.L1.js",
        "description": "Return the remainder of a divided by b.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function remainder(a, b) {
      // fill in the code
    }"`,
        "solution": `"function remainder(a, b) {
      return a % b;
    }"`,
        "testCases": [{ "input": "7, 3", "expectedOutput": "1" }]
      },
      {
        "id": "fill-truthy-check-l1",
        "title": "Check if Value is Truthy.L1.js",
        "description": "Return true if the value is truthy.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function isTruthy(val) {
      // fill in the code
    }"`,
        "solution": `"function isTruthy(val) {
      return !!val;
    }"`,
        "testCases": [{ "input": "\"hello\"", "expectedOutput": "true" }]
      },
      {
        "id": "fill-add-two-numbers-l1",
        "title": "Add Two Numbers.L1.java",
        "description": "Complete the function to return the sum of a and b.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"public class Main {
      public static int add(int a, int b) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int add(int a, int b) {
        return a + b;
      }
    }"`,
        "testCases": [{ "input": "2, 3", "expectedOutput": "5" }]
      },
      {
        "id": "fill-greet-user-l1",
        "title": "Greet User.L1.java",
        "description": "Fill in the code to greet the user with their name.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"public class Main {
      public static String greet(String name) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String greet(String name) {
        return "Hello, " + name + "!";
      }
    }"`,
        "testCases": [{ "input": "\"Ali\"", "expectedOutput": "Hello, Ali!" }]
      },
      {
        "id": "fill-is-even-l1",
        "title": "Check Even Number.L1.java",
        "description": "Complete the function to return true if a number is even.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"public class Main {
      public static boolean isEven(int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static boolean isEven(int n) {
        return n % 2 == 0;
      }
    }"`,
        "testCases": [{ "input": "4", "expectedOutput": "true" }]
      },
      {
        "id": "fill-array-length-l1",
        "title": "Array Length.L1.java",
        "description": "Return the number of elements in the array.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static int count(int[] arr) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int count(int[] arr) {
        return arr.length;
      }
    }"`,
        "testCases": [{ "input": "{1, 2, 3}", "expectedOutput": "3" }]
      },
      {
        "id": "fill-uppercase-string-l1",
        "title": "Uppercase a String.L1.java",
        "description": "Return the string in uppercase.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static String shout(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String shout(String str) {
        return str.toUpperCase();
      }
    }"`,
        "testCases": [{ "input": "\"hello\"", "expectedOutput": "HELLO" }]
      },
      {
        "id": "fill-square-number-l1",
        "title": "Square a Number.L1.java",
        "description": "Return the square of the given number.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static int square(int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int square(int n) {
        return n * n;
      }
    }"`,
        "testCases": [{ "input": "4", "expectedOutput": "16" }]
      },
      {
        "id": "fill-reverse-string-l1",
        "title": "Reverse a String.L1.java",
        "description": "Return the reversed version of the string.",
        "points": 100,
        "timeLimit": 150,
        "codeTemplate": `"public class Main {
      public static String reverse(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
      }
    }"`,
        "testCases": [{ "input": "\"hello\"", "expectedOutput": "\"olleh\"" }]
      },
      {
        "id": "fill-check-positive-l1",
        "title": "Check if Positive.L1.java",
        "description": "Return true if the number is positive.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static boolean isPositive(int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static boolean isPositive(int n) {
        return n > 0;
      }
    }"`,
        "testCases": [{ "input": "3", "expectedOutput": "true" }]
      },
      {
        "id": "fill-count-letters-l1",
        "title": "Count Letters.L1.java",
        "description": "Return the number of letters in a string (excluding spaces).",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"public class Main {
      public static int letterCount(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int letterCount(String str) {
        return str.replace(" ", "").length();
      }
    }"`,
        "testCases": [{ "input": "\"hello world\"", "expectedOutput": "10" }]
      },
      {
        "id": "fill-repeat-string-l1",
        "title": "Repeat String.L1.java",
        "description": "Return the string repeated n times.",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"public class Main {
      public static String repeat(String str, int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String repeat(String str, int n) {
        return str.repeat(n);
      }
    }"`,
        "testCases": [{ "input": "\"ha\", 3", "expectedOutput": "\"hahaha\"" }]
      },
      {
        "id": "fill-find-max-l1",
        "title": "Find Maximum.L1.java",
        "description": "Complete the function to return the larger of two numbers.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static int max(int a, int b) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int max(int a, int b) {
        return a > b ? a : b;
      }
    }"`,
        "testCases": [{ "input": "3, 7", "expectedOutput": "7" }]
      },
      {
        "id": "fill-first-character-l1",
        "title": "First Character of String.L1.java",
        "description": "Complete the function to return the first character of a string.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static char firstChar(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static char firstChar(String str) {
        return str.charAt(0);
      }
    }"`,
        "testCases": [{ "input": "\"hello\"", "expectedOutput": "'h'" }]
      },
      {
        "id": "fill-check-even-odd-l1",
        "title": "Check Even or Odd.L1.java",
        "description": "Complete the function to return 'Even' if a number is even, otherwise return 'Odd'.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static String checkEvenOdd(int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String checkEvenOdd(int n) {
        return n % 2 == 0 ? "Even" : "Odd";
      }
    }"`,
        "testCases": [{ "input": "5", "expectedOutput": "\"Odd\"" }]
      },
      {
        "id": "fill-array-access-l1",
        "title": "Access Array Element.L1.java",
        "description": "Complete the function to return the second element in an array.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static int secondElement(int[] arr) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int secondElement(int[] arr) {
        return arr[1];
      }
    }"`,
        "testCases": [{ "input": "{10, 20, 30}", "expectedOutput": "20" }]
      },
      {
        "id": "fill-contains-substring-l1",
        "title": "Check if String Contains Substring.L1.java",
        "description": "Complete the function to return true if str contains the given substring.",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static boolean containsSubstring(String str, String sub) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static boolean containsSubstring(String str, String sub) {
        return str.contains(sub);
      }
    }"`,
        "testCases": [{ "input": "\"hello world\", \"world\"", "expectedOutput": "true" }]
      },
      {
        "id": "fill-find-even-numbers-l2",
        "title": "Filter Even Numbers.L2.js",
        "description": "Return a new array containing only even numbers.",
        "points": 200,
        "timeLimit": 200,
        "codeTemplate": `"function getEvens(arr) {
      // fill in the code
    }"`,
        "solution": `"function getEvens(arr) {
      return arr.filter(n => n % 2 === 0);
    }"`,
        "testCases": [{ "input": "[1, 2, 3, 4, 5]", "expectedOutput": "[2,4]" }]
      },
      {
        "id": "fill-sum-array-l2",
        "title": "Sum All Elements.L2.js",
        "description": "Return the sum of all array elements.",
        "points": 200,
        "timeLimit": 200,
        "codeTemplate": `"function total(arr) {
      // fill in the code
    }"`,
        "solution": `"function total(arr) {
      return arr.reduce((sum, val) => sum + val, 0);
    }"`,
        "testCases": [{ "input": "[1, 2, 3, 4]", "expectedOutput": "10" }]
      },
      {
        "id": "fill-count-occurrences-l2",
        "title": "Count Occurrences.L2.js",
        "description": "Count how many times val appears in arr.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function countOccurrences(arr, val) {
      // fill in the code
    }"`,
        "solution": `"function countOccurrences(arr, val) {
      return arr.filter(x => x === val).length;
    }"`,
        "testCases": [{ "input": "[1,2,3,2,2,4], 2", "expectedOutput": "3" }]
      },
      {
        "id": "fill-object-to-array-l2",
        "title": "Convert Object to Entries.L2.js",
        "description": "Return an array of key-value pairs.",
        "points": 200,
        "timeLimit": 180,
        "codeTemplate": `"function toEntries(obj) {
      // fill in the code
    }"`,
        "solution": `"function toEntries(obj) {
      return Object.entries(obj);
    }"`,
        "testCases": [{ "input": "{a:1,b:2}", "expectedOutput": "[[\"a\",1],[\"b\",2]]" }]
      },
      {
        "id": "fill-capitalize-words-l2",
        "title": "Capitalize Words.L2.js",
        "description": "Capitalize the first letter of every word.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function capitalize(str) {
      // fill in the code
    }"`,
        "solution": `"function capitalize(str) {
      return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
    }"`,
        "testCases": [{ "input": "\"hello world\"", "expectedOutput": "Hello World" }]
      },
      {
        "id": "fill-factorial-recursion-l2",
        "title": "Recursive Factorial.L2.js",
        "description": "Implement a recursive function to compute the factorial of n.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function factorial(n) {
      // fill in the code
    }"`,
        "solution": `"function factorial(n) {
      return n === 0 ? 1 : n * factorial(n - 1);
    }"`,
        "testCases": [{ "input": "5", "expectedOutput": "120" }]
      },
      {
        "id": "fill-fibonacci-recursion-l2",
        "title": "Recursive Fibonacci.L2.js",
        "description": "Implement a recursive function to compute the nth Fibonacci number.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function fibonacci(n) {
      // fill in the code
    }"`,
        "solution": `"function fibonacci(n) {
      return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }"`,
        "testCases": [{ "input": "6", "expectedOutput": "8" }]
      },
      {
        "id": "fill-validate-email-l2",
        "title": "Validate Email Format.L2.js",
        "description": "Implement a function to check if a string is a valid email format.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function isValidEmail(email) {
      // fill in the code
    }"`,
        "solution": `"function isValidEmail(email) {
      return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
    }"`,
        "testCases": [{ "input": "\"test@example.com\"", "expectedOutput": "true" }]
      },
      {
        "id": "fill-deep-object-copy-l2",
        "title": "Deep Object Copy.L2.js",
        "description": "Implement a function to create a deep copy of an object.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function deepCopy(obj) {
      // fill in the code
    }"`,
        "solution": `"function deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    }"`,
        "testCases": [{ "input": "{a:1,b:{c:2}}", "expectedOutput": "{a:1,b:{c:2}}" }]
      },
      {
        "id": "fill-remove-falsy-values-l2",
        "title": "Remove Falsy Values.L2.js",
        "description": "Implement a function to filter out falsy values from an array.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function removeFalsy(arr) {
      // fill in the code
    }"`,
        "solution": `"function removeFalsy(arr) {
      return arr.filter(Boolean);
    }"`,
        "testCases": [{ "input": "[0, 1, false, '', 'hello']", "expectedOutput": "[1,'hello']" }]
      },
      {
        "id": "fill-chunk-array-l2",
        "title": "Chunk an Array.L2.js",
        "description": "Divide an array into smaller subarrays of size n.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function chunkArray(arr, size) {
      // fill in the code
    }"`,
        "solution": `"function chunkArray(arr, size) {
      return arr.reduce((chunks, item, index) => {
        const chunkIndex = Math.floor(index / size);
        chunks[chunkIndex] = chunks[chunkIndex] || [];
        chunks[chunkIndex].push(item);
        return chunks;
      }, []);
    }"`,
        "testCases": [{ "input": "[1,2,3,4,5,6], 2", "expectedOutput": "[[1,2],[3,4],[5,6]]" }]
      },
      {
        "id": "fill-deep-flatten-array-l2",
        "title": "Deep Flatten Array.L2.js",
        "description": "Flatten nested arrays into a single array.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function deepFlatten(arr) {
      // fill in the code
    }"`,
        "solution": `"function deepFlatten(arr) {
      return arr.flat(Infinity);
    }"`,
        "testCases": [{ "input": "[1, [2, [3, 4]], 5]", "expectedOutput": "[1,2,3,4,5]" }]
      },
      {
        "id": "fill-group-by-key-l2",
        "title": "Group by Key.L2.js",
        "description": "Group objects in an array based on a specified key.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function groupBy(arr, key) {
      // fill in the code
    }"`,
        "solution": `"function groupBy(arr, key) {
      return arr.reduce((grouped, obj) => {
        const value = obj[key];
        grouped[value] = grouped[value] || [];
        grouped[value].push(obj);
        return grouped;
      }, {});
    }"`,
        "testCases": [{ "input": "[{type:'fruit',name:'apple'},{type:'fruit',name:'banana'},{type:'vegetable',name:'carrot'}], 'type'", "expectedOutput": "{fruit:[{type:'fruit',name:'apple'},{type:'fruit',name:'banana'}],vegetable:[{type:'vegetable',name:'carrot'}]}" }]
      },
      {
        "id": "fill-unique-object-array-l2",
        "title": "Unique Objects in Array.L2.js",
        "description": "Remove duplicate objects from an array based on a key.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function uniqueByKey(arr, key) {
      // fill in the code
    }"`,
        "solution": `"function uniqueByKey(arr, key) {
      return Object.values(arr.reduce((map, obj) => {
        map[obj[key]] = obj;
        return map;
      }, {}));
    }"`,
        "testCases": [{ "input": "[{id:1,name:'Alice'},{id:2,name:'Bob'},{id:1,name:'Alice'}], 'id'", "expectedOutput": "[{id:1,name:'Alice'},{id:2,name:'Bob'}]" }]
      },
      {
        "id": "fill-remove-properties-l2",
        "title": "Remove Properties from Object.L2.js",
        "description": "Remove specified keys from an object.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function removeKeys(obj, keys) {
      // fill in the code
    }"`,
        "solution": `"function removeKeys(obj, keys) {
      return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
    }"`,
        "testCases": [{ "input": "{name:'Alice',age:25,city:'NY'}, ['age','city']", "expectedOutput": "{name:'Alice'}" }]
      },
      {
        "id": "fill-factorial-iteration-l2",
        "title": "Factorial Using Iteration.L2.java",
        "description": "Implement a function to compute the factorial of n using a loop.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int factorial(int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int factorial(int n) {
        int result = 1;
        for (int i = 1; i <= n; i++) {
          result *= i;
        }
        return result;
      }
    }"`,
        "testCases": [{ "input": "5", "expectedOutput": "120" }]
      },
      {
        "id": "fill-fibonacci-iteration-l2",
        "title": "Fibonacci Using Iteration.L2.java",
        "description": "Implement a function to compute the nth Fibonacci number using a loop.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int fibonacci(int n) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int fibonacci(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1, temp;
        for (int i = 2; i <= n; i++) {
          temp = a + b;
          a = b;
          b = temp;
        }
        return b;
      }
    }"`,
        "testCases": [{ "input": "6", "expectedOutput": "8" }]
      },
      {
        "id": "fill-reverse-array-l2",
        "title": "Reverse an Array.L2.java",
        "description": "Implement a function to reverse an array in-place.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void reverseArray(int[] arr) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
          int temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
        }
      }
    }"`,
        "testCases": [{ "input": "{1, 2, 3, 4}", "expectedOutput": "{4, 3, 2, 1}" }]
      },
      {
        "id": "fill-count-words-l2",
        "title": "Count Words in String.L2.java",
        "description": "Implement a function to count the number of words in a string.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int countWords(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int countWords(String str) {
        return str.trim().split("\\\\s+").length;
      }
    }"`,
        "testCases": [{ "input": "\"Hello world from Java\"", "expectedOutput": "4" }]
      },
      {
        "id": "fill-sort-array-l2",
        "title": "Sort Array in Ascending Order.L2.java",
        "description": "Implement a function to sort an array in ascending order.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"import java.util.Arrays;
    public class Main {
      public static void sortArray(int[] arr) {
        // fill in the code
      }
    }"`,
        "solution": `"import java.util.Arrays;
    public class Main {
      public static void sortArray(int[] arr) {
        Arrays.sort(arr);
      }
    }"`,
        "testCases": [{ "input": "{5, 3, 8, 1}", "expectedOutput": "{1, 3, 5, 8}" }]
      },
      {
        "id": "fill-palindrome-check-l2",
        "title": "Check Palindrome.L2.java",
        "description": "Implement a function to check whether a string is a palindrome.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static boolean isPalindrome(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static boolean isPalindrome(String str) {
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
      }
    }"`,
        "testCases": [{ "input": "\"madam\"", "expectedOutput": "true" }]
      },
      {
        "id": "fill-anagram-check-l2",
        "title": "Check Anagram.L2.java",
        "description": "Implement a function to check whether two strings are anagrams.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"import java.util.Arrays;
    public class Main {
      public static boolean isAnagram(String str1, String str2) {
        // fill in the code
      }
    }"`,
        "solution": `"import java.util.Arrays;
    public class Main {
      public static boolean isAnagram(String str1, String str2) {
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
      }
    }"`,
        "testCases": [{ "input": "\"listen\", \"silent\"", "expectedOutput": "true" }]
      },
      {
        "id": "fill-find-minimum-l2",
        "title": "Find Minimum in Array.L2.java",
        "description": "Implement a function to find the smallest number in an array.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int findMin(int[] arr) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int findMin(int[] arr) {
        int min = arr[0];
        for (int num : arr) {
          if (num < min) min = num;
        }
        return min;
      }
    }"`,
        "testCases": [{ "input": "{5, 2, 8, 1}", "expectedOutput": "1" }]
      },
      {
        "id": "fill-count-vowels-l2",
        "title": "Count Vowels in String.L2.java",
        "description": "Implement a function to count the number of vowels in a string.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int countVowels(String str) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int countVowels(String str) {
        int count = 0;
        for (char c : str.toLowerCase().toCharArray()) {
          if ("aeiou".indexOf(c) != -1) count++;
        }
        return count;
      }
    }"`,
        "testCases": [{ "input": "\"hello world\"", "expectedOutput": "3" }]
      },
      {
        "id": "fill-swap-values-l2",
        "title": "Swap Two Variables.L2.java",
        "description": "Implement a function to swap the values of two variables.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void swap(int a, int b) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a: " + a + ", b: " + b);
      }
    }"`,
        "testCases": [{ "input": "3, 7", "expectedOutput": "a: 7, b: 3" }]
      },
      {
        "id": "fill-remove-duplicates-l2",
        "title": "Remove Duplicates from Array.L2.java",
        "description": "Implement a function to remove duplicate values from an array.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"import java.util.HashSet;
    import java.util.Set;
    public class Main {
      public static int[] removeDuplicates(int[] arr) {
        // fill in the code
      }
    }"`,
        "solution": `"import java.util.HashSet;
    import java.util.Set;
    import java.util.Arrays;
    public class Main {
      public static int[] removeDuplicates(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
          set.add(num);
        }
        return set.stream().mapToInt(Integer::intValue).toArray();
      }
    }"`,
        "testCases": [{ "input": "{1, 2, 2, 3, 4, 4}", "expectedOutput": "{1, 2, 3, 4}" }]
      },
      {
        "id": "fill-swap-characters-l2",
        "title": "Swap Two Characters in String.L2.java",
        "description": "Implement a function to swap two characters in a given string.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static String swapChars(String str, int i, int j) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String swapChars(String str, int i, int j) {
        char[] arr = str.toCharArray();
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return new String(arr);
      }
    }"`,
        "testCases": [{ "input": "\"hello\", 1, 3", "expectedOutput": "\"hlleo\"" }]
      },
      {
        "id": "fill-array-intersection-l2",
        "title": "Find Intersection of Two Arrays.L2.java",
        "description": "Implement a function to find common elements between two arrays.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"import java.util.HashSet;
    import java.util.Set;
    public class Main {
      public static int[] intersect(int[] arr1, int[] arr2) {
        // fill in the code
      }
    }"`,
        "solution": `"import java.util.HashSet;
    import java.util.Set;
    import java.util.Arrays;
    public class Main {
      public static int[] intersect(int[] arr1, int[] arr2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> intersection = new HashSet<>();
        for (int num : arr1) {
          set1.add(num);
        }
        for (int num : arr2) {
          if (set1.contains(num)) {
            intersection.add(num);
          }
        }
        return intersection.stream().mapToInt(Integer::intValue).toArray();
      }
    }"`,
        "testCases": [{ "input": "{1, 2, 3, 4}, {3, 4, 5, 6}", "expectedOutput": "{3, 4}" }]
      },
      {
        "id": "fill-count-character-l2",
        "title": "Count Occurrences of Character.L2.java",
        "description": "Implement a function to count occurrences of a given character in a string.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int countChar(String str, char ch) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static int countChar(String str, char ch) {
        int count = 0;
        for (char c : str.toCharArray()) {
          if (c == ch) count++;
        }
        return count;
      }
    }"`,
        "testCases": [{ "input": "\"banana\", 'a'", "expectedOutput": "3" }]
      },
      {
        "id": "fill-reverse-words-l2",
        "title": "Reverse Words in Sentence.L2.java",
        "description": "Implement a function to reverse the words in a sentence.",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static String reverseWords(String sentence) {
        // fill in the code
      }
    }"`,
        "solution": `"public class Main {
      public static String reverseWords(String sentence) {
        String[] words = sentence.split(" ");
        StringBuilder reversed = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
          reversed.append(words[i]).append(" ");
        }
        return reversed.toString().trim();
      }
    }"`,
        "testCases": [{ "input": "\"Hello world from Java\"", "expectedOutput": "\"Java from world Hello\"" }]
      },
      {
        "id": "fill-memoized-function-l3",
        "title": "Memoized Function.L3.js",
        "description": "Implement a function that caches results for efficiency.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function memoize(fn) {
      // fill in the code
    }"`,
        "solution": `"function memoize(fn) {
      const cache = {};
      return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
          cache[key] = fn(...args);
        }
        return cache[key];
      };
    }"`,
        "testCases": [{ "input": "memoize(x => x * 2)(5)", "expectedOutput": "10" }]
      },
      {
        "id": "fill-debounce-function-l3",
        "title": "Debounce Function.L3.js",
        "description": "Create a debounce function that delays execution.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function debounce(fn, delay) {
      // fill in the code
    }"`,
        "solution": `"function debounce(fn, delay) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }"`,
        "testCases": [{ "input": "debounce(() => console.log('Run'), 2000)()", "expectedOutput": "Run (after 2s)" }]
      },
      {
        "id": "fill-throttle-function-l3",
        "title": "Throttle Function.L3.js",
        "description": "Implement a throttling function to limit execution rate.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function throttle(fn, limit) {
      // fill in the code
    }"`,
        "solution": `"function throttle(fn, limit) {
      let lastCall = 0;
      return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
          lastCall = now;
          fn(...args);
        }
      };
    }"`,
        "testCases": [{ "input": "throttle(() => console.log('Action'), 1000)()", "expectedOutput": "Action (once every second)" }]
      },
      {
        "id": "fill-deep-equality-check-l3",
        "title": "Deep Object Equality.L3.js",
        "description": "Check if two objects have identical key-value pairs.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function deepEqual(obj1, obj2) {
      // fill in the code
    }"`,
        "solution": `"function deepEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }"`,
        "testCases": [{ "input": "deepEqual({a:1}, {a:1})", "expectedOutput": "true" }]
      },
      {
        "id": "fill-curry-function-l3",
        "title": "Currying Function.L3.js",
        "description": "Convert a function to a curried version.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function curry(fn) {
      // fill in the code
    }"`,
        "solution": `"function curry(fn) {
      return function curried(...args) {
        if (args.length >= fn.length) {
          return fn(...args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
      };
    }"`,
        "testCases": [{ "input": "curry((a, b) => a + b)(3)(4)", "expectedOutput": "7" }]
      },
      {
        "id": "fill-event-emitter-l3",
        "title": "Event Emitter Implementation.L3.js",
        "description": "Implement an EventEmitter class that supports event subscription and triggering.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class EventEmitter {
      // fill in the code
    }"`,
        "solution": `"class EventEmitter {
      constructor() {
        this.events = {};
      }
      
      on(event, listener) {
        if (!this.events[event]) {
          this.events[event] = [];
        }
        this.events[event].push(listener);
      }
      
      emit(event, ...args) {
        if (this.events[event]) {
          this.events[event].forEach(listener => listener(...args));
        }
      }
    }"`,
        "testCases": [{ "input": "const emitter = new EventEmitter(); emitter.on('greet', name => console.log('Hello, ' + name)); emitter.emit('greet', 'Alice')", "expectedOutput": "'Hello, Alice'" }]
      },
      {
        "id": "fill-promise-all-l3",
        "title": "Custom Promise.all Implementation.L3.js",
        "description": "Implement Promise.all that waits for all promises to resolve.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function promiseAll(promises) {
      // fill in the code
    }"`,
        "solution": `"function promiseAll(promises) {
      return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise, index) => {
          Promise.resolve(promise).then(value => {
            results[index] = value;
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          }).catch(reject);
        });
      });
    }"`,
        "testCases": [{ "input": "promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])", "expectedOutput": "[1,2,3]" }]
      },
      {
        "id": "fill-deep-merge-objects-l3",
        "title": "Deep Merge Objects.L3.js",
        "description": "Implement a function that deeply merges two objects.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function deepMerge(obj1, obj2) {
      // fill in the code
    }"`,
        "solution": `"function deepMerge(obj1, obj2) {
      let result = { ...obj1 };
      Object.keys(obj2).forEach(key => {
        if (obj2[key] && typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
          result[key] = deepMerge(obj1[key] || {}, obj2[key]);
        } else {
          result[key] = obj2[key];
        }
      });
      return result;
    }"`,
        "testCases": [{ "input": "deepMerge({a: {b: 1}}, {a: {c: 2}})", "expectedOutput": "{a:{b:1,c:2}}" }]
      },
      {
        "id": "fill-custom-map-l3",
        "title": "Implement Custom Array.map.L3.js",
        "description": "Implement the map function that applies a function to every array element.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"Array.prototype.customMap = function(callback) {
      // fill in the code
    }"`,
        "solution": `"Array.prototype.customMap = function(callback) {
      let result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
      }
      return result;
    }"`,
        "testCases": [{ "input": "[1,2,3].customMap(x => x * 2)", "expectedOutput": "[2,4,6]" }]
      },
      {
        "id": "fill-custom-bind-l3",
        "title": "Custom Function.bind.L3.js",
        "description": "Implement the bind function that allows function binding.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"Function.prototype.customBind = function(context, ...args) {
      // fill in the code
    }"`,
        "solution": `"Function.prototype.customBind = function(context, ...args) {
      const fn = this;
      return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
      };
    }"`,
        "testCases": [{ "input": "const obj = {value: 42}; function getValue() { return this.value; } const bound = getValue.customBind(obj); bound()", "expectedOutput": "42" }]
      },
      {
        "id": "fill-lru-cache-l3",
        "title": "Least Recently Used (LRU) Cache.L3.js",
        "description": "Implement an LRU Cache class with get and set methods.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class LRUCache {
      // fill in the code
    }"`,
        "solution": `"class LRUCache {
      constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
      }
      
      get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      }
      
      set(key, value) {
        if (this.cache.has(key)) {
          this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
          this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
      }
    }"`,
        "testCases": [{ "input": "const cache = new LRUCache(2); cache.set(1, 1); cache.set(2, 2); cache.get(1); cache.set(3, 3); cache.get(2);", "expectedOutput": "[1,-1]" }]
      },
      {
        "id": "fill-custom-reduce-l3",
        "title": "Custom Array.reduce Implementation.L3.js",
        "description": "Implement Array.prototype.reduce manually.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"Array.prototype.customReduce = function(callback, initialValue) {
      // fill in the code
    }"`,
        "solution": `"Array.prototype.customReduce = function(callback, initialValue) {
      let accumulator = initialValue === undefined ? this[0] : initialValue;
      for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
      return accumulator;
    }"`,
        "testCases": [{ "input": "[1,2,3].customReduce((acc, num) => acc + num, 0)", "expectedOutput": "6" }]
      },
      {
        "id": "fill-deep-object-freeze-l3",
        "title": "Deep Object Freeze.L3.js",
        "description": "Recursively freeze an object to prevent modifications.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function deepFreeze(obj) {
      // fill in the code
    }"`,
        "solution": `"function deepFreeze(obj) {
      Object.freeze(obj);
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
          deepFreeze(obj[key]);
        }
      });
      return obj;
    }"`,
        "testCases": [{ "input": "const obj = deepFreeze({a:1, b:{c:2}}); obj.b.c = 3;", "expectedOutput": "Cannot modify frozen object" }]
      },
      {
        "id": "fill-custom-instanceof-l3",
        "title": "Custom instanceof Implementation.L3.js",
        "description": "Implement a function that mimics the instanceof operator.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"function customInstanceOf(obj, constructor) {
      // fill in the code
    }"`,
        "solution": `"function customInstanceOf(obj, constructor) {
      let prototype = Object.getPrototypeOf(obj);
      while (prototype) {
        if (prototype === constructor.prototype) return true;
        prototype = Object.getPrototypeOf(prototype);
      }
      return false;
    }"`,
        "testCases": [{ "input": "customInstanceOf(new Date(), Date)", "expectedOutput": "true" }]
      },
      {
        "id": "fill-custom-flat-l3",
        "title": "Custom Array.flat Implementation.L3.js",
        "description": "Implement a method to flatten nested arrays.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"Array.prototype.customFlat = function(depth = 1) {
      // fill in the code
    }"`,
        "solution": `"Array.prototype.customFlat = function(depth = 1) {
      return depth > 0
        ? this.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.customFlat(depth - 1) : val), [])
        : this.slice();
    }"`,
        "testCases": [{ "input": "[1,[2,[3,[4]]]].customFlat(2)", "expectedOutput": "[1,2,3,[4]]" }]
      },
      {
        "id": "fill-lru-cache-l3",
        "title": "Least Recently Used (LRU) Cache.L3.java",
        "description": "Implement an LRU Cache class with get and put methods.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.LinkedHashMap;
    import java.util.Map;
    public class LRUCache {
      // fill in the code
    }"`,
        "solution": `"import java.util.LinkedHashMap;
    import java.util.Map;
    public class LRUCache {
      private final int capacity;
      private final Map<Integer, Integer> cache;
      
      public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<>(capacity, 0.75f, true) {
          protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
            return size() > capacity;
          }
        };
      }
    
      public int get(int key) {
        return cache.getOrDefault(key, -1);
      }
    
      public void put(int key, int value) {
        cache.put(key, value);
      }
    }"`,
        "testCases": [{ "input": "LRUCache cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); cache.get(1); cache.put(3, 3); cache.get(2);", "expectedOutput": "[1,-1]" }]
      },
      {
        "id": "fill-custom-linkedlist-l3",
        "title": "Custom LinkedList Implementation.L3.java",
        "description": "Implement a basic LinkedList class with add and remove operations.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"public class LinkedList {
      // fill in the code
    }"`,
        "solution": `"public class LinkedList {
      private static class Node {
        int value;
        Node next;
        
        Node(int value) {
          this.value = value;
          this.next = null;
        }
      }
      
      private Node head;
      
      public void add(int value) {
        if (head == null) {
          head = new Node(value);
          return;
        }
        Node current = head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = new Node(value);
      }
    
      public void remove(int value) {
        if (head == null) return;
        if (head.value == value) {
          head = head.next;
          return;
        }
        Node current = head;
        while (current.next != null && current.next.value != value) {
          current = current.next;
        }
        if (current.next != null) {
          current.next = current.next.next;
        }
      }
    }"`,
        "testCases": [{ "input": "LinkedList list = new LinkedList(); list.add(1); list.add(2); list.remove(1);", "expectedOutput": "Remaining list: [2]" }]
      },
      {
        "id": "fill-thread-safe-counter-l3",
        "title": "Thread-Safe Counter.L3.java",
        "description": "Implement a thread-safe counter using synchronization.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"public class Counter {
      // fill in the code
    }"`,
        "solution": `"public class Counter {
      private int count = 0;
      
      public synchronized void increment() {
        count++;
      }
      
      public synchronized int getCount() {
        return count;
      }
    }"`,
        "testCases": [{ "input": "Counter counter = new Counter(); counter.increment(); counter.increment(); counter.getCount();", "expectedOutput": "2" }]
      },
      {
        "id": "fill-custom-hashmap-l3",
        "title": "Custom HashMap Implementation.L3.java",
        "description": "Implement a basic HashMap with put and get operations.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"public class CustomHashMap {
      // fill in the code
    }"`,
        "solution": `"public class CustomHashMap {
      private static class Entry {
        int key, value;
        Entry next;
        
        Entry(int key, int value) {
          this.key = key;
          this.value = value;
          this.next = null;
        }
      }
      
      private Entry[] table = new Entry[16];
    
      public void put(int key, int value) {
        int index = key % table.length;
        if (table[index] == null) {
          table[index] = new Entry(key, value);
        } else {
          Entry current = table[index];
          while (current.next != null && current.key != key) {
            current = current.next;
          }
          if (current.key == key) {
            current.value = value;
          } else {
            current.next = new Entry(key, value);
          }
        }
      }
    
      public int get(int key) {
        int index = key % table.length;
        Entry current = table[index];
        while (current != null) {
          if (current.key == key) return current.value;
          current = current.next;
        }
        return -1;
      }
    }"`,
        "testCases": [{ "input": "CustomHashMap map = new CustomHashMap(); map.put(1, 100); map.put(2, 200); map.get(1);", "expectedOutput": "100" }]
      },
      {
        "id": "fill-deadlock-avoidance-l3",
        "title": "Deadlock Avoidance.L3.java",
        "description": "Implement a solution that avoids deadlocks using resource ordering.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"public class DeadlockAvoidance {
      // fill in the code
    }"`,
        "solution": `"public class DeadlockAvoidance {
      private final Object resource1 = new Object();
      private final Object resource2 = new Object();
    
      public void process() {
        synchronized (resource1) {
          synchronized (resource2) {
            System.out.println("Processing without deadlock!");
          }
        }
      }
    }"`,
        "testCases": [{ "input": "DeadlockAvoidance da = new DeadlockAvoidance(); da.process();", "expectedOutput": "Processing without deadlock!" }]
      },
      {
        "id": "fill-custom-thread-pool-l3",
        "title": "Custom Thread Pool Implementation.L3.java",
        "description": "Implement a custom thread pool for managing multiple tasks.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.concurrent.BlockingQueue;
    import java.util.concurrent.LinkedBlockingQueue;
    
    public class ThreadPool {
      // fill in the code
    }"`,
        "solution": `"import java.util.concurrent.BlockingQueue;
    import java.util.concurrent.LinkedBlockingQueue;
    
    public class ThreadPool {
      private final BlockingQueue<Runnable> taskQueue = new LinkedBlockingQueue<>();
      private final Thread[] workers;
    
      public ThreadPool(int threadCount) {
        workers = new Thread[threadCount];
        for (int i = 0; i < threadCount; i++) {
          workers[i] = new Thread(() -> {
            while (true) {
              try {
                Runnable task = taskQueue.take();
                task.run();
              } catch (InterruptedException e) {
                break;
              }
            }
          });
          workers[i].start();
        }
      }
    
      public void submit(Runnable task) {
        taskQueue.offer(task);
      }
    }"`,
        "testCases": [{ "input": "ThreadPool pool = new ThreadPool(3); pool.submit(() -> System.out.println('Task executed'));", "expectedOutput": "Task executed" }]
      },
      {
        "id": "fill-custom-json-parser-l3",
        "title": "Basic JSON Parser.L3.java",
        "description": "Implement a simple JSON parser for parsing key-value pairs.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.HashMap;
    import java.util.Map;
    
    public class JSONParser {
      // fill in the code
    }"`,
        "solution": `"import java.util.HashMap;
    import java.util.Map;
    
    public class JSONParser {
      public static Map<String, String> parse(String json) {
        Map<String, String> map = new HashMap<>();
        json = json.replaceAll("[{}\"]", "");
        String[] pairs = json.split(",");
        for (String pair : pairs) {
          String[] keyValue = pair.split(":");
          if (keyValue.length == 2) {
            map.put(keyValue[0].trim(), keyValue[1].trim());
          }
        }
        return map;
      }
    }"`,
        "testCases": [{ "input": "JSONParser.parse(\"{\\\"name\\\":\\\"John\\\",\\\"age\\\":\\\"30\\\"}\")", "expectedOutput": "{name=John, age=30}" }]
      },
      {
        "id": "fill-trie-data-structure-l3",
        "title": "Trie Data Structure.L3.java",
        "description": "Implement a Trie for efficient word storage and search.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.HashMap;
    import java.util.Map;
    
    public class Trie {
      // fill in the code
    }"`,
        "solution": `"import java.util.HashMap;
    import java.util.Map;
    
    public class Trie {
      private static class Node {
        Map<Character, Node> children = new HashMap<>();
        boolean isEndOfWord = false;
      }
    
      private final Node root = new Node();
    
      public void insert(String word) {
        Node node = root;
        for (char c : word.toCharArray()) {
          node.children.putIfAbsent(c, new Node());
          node = node.children.get(c);
        }
        node.isEndOfWord = true;
      }
    
      public boolean search(String word) {
        Node node = root;
        for (char c : word.toCharArray()) {
          node = node.children.get(c);
          if (node == null) return false;
        }
        return node.isEndOfWord;
      }
    }"`,
        "testCases": [{ "input": "Trie trie = new Trie(); trie.insert(\"hello\"); trie.search(\"hello\");", "expectedOutput": "true" }]
      },
      {
        "id": "fill-custom-future-task-l3",
        "title": "Custom Future Task.L3.java",
        "description": "Implement a custom FutureTask class to manage asynchronous computation.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.concurrent.Callable;
    
    public class FutureTask<T> {
      // fill in the code
    }"`,
        "solution": `"import java.util.concurrent.Callable;
    
    public class FutureTask<T> {
      private final Callable<T> task;
      private T result;
      private boolean isDone = false;
    
      public FutureTask(Callable<T> task) {
        this.task = task;
      }
    
      public void run() {
        try {
          result = task.call();
          isDone = true;
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    
      public T get() {
        return result;
      }
    
      public boolean isDone() {
        return isDone;
      }
    }"`,
        "testCases": [{ "input": "FutureTask<Integer> future = new FutureTask<>(() -> 42); future.run(); future.get();", "expectedOutput": "42" }]
      },
      {
        "id": "fill-graph-shortest-path-l3",
        "title": "Graph Shortest Path (Dijkstra's Algorithm).L3.java",
        "description": "Implement Dijkstra's algorithm to find the shortest path in a graph.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.*;
    
    public class Dijkstra {
      // fill in the code
    }"`,
        "solution": `"import java.util.*;
    
    public class Dijkstra {
      public static Map<Integer, Integer> shortestPath(Map<Integer, List<int[]>> graph, int start) {
        Map<Integer, Integer> distances = new HashMap<>();
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
    
        pq.add(new int[]{start, 0});
        while (!pq.isEmpty()) {
          int[] current = pq.poll();
          int node = current[0], dist = current[1];
    
          if (distances.containsKey(node)) continue;
          distances.put(node, dist);
    
          for (int[] neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            pq.add(new int[]{neighbor[0], dist + neighbor[1]});
          }
        }
    
        return distances;
      }
    }"`,
        "testCases": [{ "input": "Map<Integer, List<int[]>> graph = new HashMap<>(); graph.put(1, Arrays.asList(new int[]{2, 1}, new int[]{3, 4})); graph.put(2, Arrays.asList(new int[]{3, 2})); Dijkstra.shortestPath(graph, 1);", "expectedOutput": "{1=0, 2=1, 3=3}" }]
      },
      {
        "id": "fill-custom-event-emitter-l3",
        "title": "Custom Event Emitter.L3.java",
        "description": "Implement an event emitter class that allows event subscription and triggering.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.*;
    
    public class EventEmitter {
      // fill in the code
    }"`,
        "solution": `"import java.util.*;
    
    public class EventEmitter {
      private final Map<String, List<Runnable>> events = new HashMap<>();
    
      public void on(String event, Runnable listener) {
        events.putIfAbsent(event, new ArrayList<>());
        events.get(event).add(listener);
      }
    
      public void emit(String event) {
        if (events.containsKey(event)) {
          events.get(event).forEach(Runnable::run);
        }
      }
    }"`,
        "testCases": [{ "input": "EventEmitter emitter = new EventEmitter(); emitter.on(\"start\", () -> System.out.println(\"Started\")); emitter.emit(\"start\");", "expectedOutput": "\"Started\"" }]
      },
      {
        "id": "fill-custom-iterator-l3",
        "title": "Custom Iterator.L3.java",
        "description": "Implement a custom iterator for iterating over a collection.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.*;
    
    public class CustomIterator<T> {
      // fill in the code
    }"`,
        "solution": `"import java.util.*;
    
    public class CustomIterator<T> implements Iterator<T> {
      private final List<T> list;
      private int index = 0;
    
      public CustomIterator(List<T> list) {
        this.list = list;
      }
    
      @Override
      public boolean hasNext() {
        return index < list.size();
      }
    
      @Override
      public T next() {
        if (!hasNext()) throw new NoSuchElementException();
        return list.get(index++);
      }
    }"`,
        "testCases": [{ "input": "List<Integer> nums = Arrays.asList(1, 2, 3); CustomIterator<Integer> iter = new CustomIterator<>(nums); while (iter.hasNext()) System.out.println(iter.next());", "expectedOutput": "1 2 3" }]
      },
      {
        "id": "fill-custom-promise-l3",
        "title": "Promise-like Asynchronous Execution.L3.java",
        "description": "Implement a simple Java class that mimics JavaScript Promise.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.concurrent.*;
    
    public class CustomPromise<T> {
      // fill in the code
    }"`,
        "solution": `"import java.util.concurrent.*;
    
    public class CustomPromise<T> {
      private final CompletableFuture<T> future = new CompletableFuture<>();
    
      public void resolve(T value) {
        future.complete(value);
      }
    
      public void then(Consumer<T> callback) {
        future.thenAccept(callback);
      }
    }"`,
        "testCases": [{ "input": "CustomPromise<Integer> promise = new CustomPromise<>(); promise.then(val -> System.out.println(\"Resolved:\" + val)); promise.resolve(42);", "expectedOutput": "\"Resolved: 42\"" }]
      },
      {
        "id": "fill-rate-limiter-l3",
        "title": "Rate Limiter.L3.java",
        "description": "Implement a rate limiter to restrict function execution within a given time limit.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.*;
    
    public class RateLimiter {
      // fill in the code
    }"`,
        "solution": `"import java.util.*;
    
    public class RateLimiter {
      private final int limit;
      private final long timeFrame;
      private final Queue<Long> timestamps = new LinkedList<>();
    
      public RateLimiter(int limit, long timeFrame) {
        this.limit = limit;
        this.timeFrame = timeFrame;
      }
    
      public boolean allow() {
        long now = System.currentTimeMillis();
        while (!timestamps.isEmpty() && now - timestamps.peek() > timeFrame) {
          timestamps.poll();
        }
        if (timestamps.size() < limit) {
          timestamps.add(now);
          return true;
        }
        return false;
      }
    }"`,
        "testCases": [{ "input": "RateLimiter limiter = new RateLimiter(3, 1000); System.out.println(limiter.allow()); System.out.println(limiter.allow()); System.out.println(limiter.allow()); System.out.println(limiter.allow());", "expectedOutput": "true true true false" }]
      },
      {
        "id": "fill-deadlock-prevention-l3",
        "title": "Deadlock Prevention.L3.java",
        "description": "Implement a system that avoids deadlocks using proper locking order.",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"public class DeadlockPrevention {
      // fill in the code
    }"`,
        "solution": `"public class DeadlockPrevention {
      private final Object lock1 = new Object();
      private final Object lock2 = new Object();
    
      public void process() {
        synchronized (lock1) {
          synchronized (lock2) {
            System.out.println(\"Processed without deadlock\");
          }
        }
      }
    }"`,
        "testCases": [{ "input": "DeadlockPrevention dp = new DeadlockPrevention(); dp.process();", "expectedOutput": "\"Processed without deadlock\"" }]
      },
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'typing-challenges',
    title: 'Speed Typing Challenges',
    description: 'Master typing code in various programming languages',
    icon: 'Code',
    category: 'Typing',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College'],
    challenges: [
      {
        id: 'python-basics',
        title: 'Python Basics',
        description: 'Practice typing Python code with proper indentation',
        points: 100,
        timeLimit: 180,
        codeTemplate: `def calculate_factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * calculate_factorial(n - 1)

def main():
    numbers = [5, 7, 3, 8, 4]
    results = []
    
    for num in numbers:
        factorial = calculate_factorial(num)
        results.append(factorial)
    
    print("Results:", results)

if __name__ == "__main__":
    main()`
      },
      {
        id: 'typescript-interface',
        title: 'TypeScript Interface',
        description: 'Practice typing TypeScript interfaces and types',
        points: 150,
        timeLimit: 240,
        codeTemplate: `interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  roles: UserRole[];
}

type UserRole = 'admin' | 'user' | 'editor';

interface UserService {
  getUser(id: string): Promise<User>;
  updateUser(user: Partial<User>): Promise<void>;
  deleteUser(id: string): Promise<boolean>;
}

class UserServiceImpl implements UserService {
  async getUser(id: string): Promise<User> {
    // Implementation
    return {
      id,
      name: 'John Doe',
      email: 'john@example.com',
      roles: ['user']
    };
  }

  async updateUser(user: Partial<User>): Promise<void> {
    // Implementation
  }

  async deleteUser(id: string): Promise<boolean> {
    // Implementation
    return true;
  }
}`
      },
      {
        id: 'react-component',
        title: 'React Component',
        description: 'Practice typing a React functional component',
        points: 200,
        timeLimit: 300,
        codeTemplate: `import React, { useState, useEffect } from 'react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo: TodoItem = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="px-2 py-1 border rounded"
          placeholder="Add new todo"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-1 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center gap-2"
            onClick={() => toggleTodo(todo.id)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'data-structures',
    title: 'Data Structure Challenges',
    description: 'Solve complex problems using the right data structures.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'linked-list',
        title: 'Linked List Operations',
        description: 'Implement basic linked list operations including insert, delete, and find.',
        points: 200,
        timeLimit: 900,
        codeTemplate: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  // TODO: Implement the insert method
  insert(value) {
    
  }
  
  // TODO: Implement the delete method
  delete(value) {
    
  }
  
  // TODO: Implement the find method
  find(value) {
    
  }
  
  // Print the list (already implemented)
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(' -> ');
  }
}`,
        solution: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  
  delete(value) {
    if (!this.head) return false;
    
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }
    
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    
    if (current.next) {
      current.next = current.next.next;
      return true;
    }
    
    return false;
  }
  
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(' -> ');
  }
}`
      },
      {
        id: 'binary-tree',
        title: 'Binary Tree Traversal',
        description: 'Implement different tree traversal methods: inorder, preorder, and postorder.',
        points: 250,
        timeLimit: 900,
        codeTemplate: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // TODO: Implement inOrder traversal
  inOrder() {
    
  }
  
  // TODO: Implement preOrder traversal
  preOrder() {
    
  }
  
  // TODO: Implement postOrder traversal
  postOrder() {
    
  }
  
  // Helper method for recursive traversal
  _inOrderHelper(node, result) {
    
  }
  
  _preOrderHelper(node, result) {
    
  }
  
  _postOrderHelper(node, result) {
    
  }
}`,
        solution: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  inOrder() {
    const result = [];
    this._inOrderHelper(this.root, result);
    return result;
  }
  
  preOrder() {
    const result = [];
    this._preOrderHelper(this.root, result);
    return result;
  }
  
  postOrder() {
    const result = [];
    this._postOrderHelper(this.root, result);
    return result;
  }
  
  _inOrderHelper(node, result) {
    if (node) {
      this._inOrderHelper(node.left, result);
      result.push(node.value);
      this._inOrderHelper(node.right, result);
    }
  }
  
  _preOrderHelper(node, result) {
    if (node) {
      result.push(node.value);
      this._preOrderHelper(node.left, result);
      this._preOrderHelper(node.right, result);
    }
  }
  
  _postOrderHelper(node, result) {
    if (node) {
      this._postOrderHelper(node.left, result);
      this._postOrderHelper(node.right, result);
      result.push(node.value);
    }
  }
}`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'find-error',
    title: 'Find the Error',
    description: 'Debug and fix issues in existing code snippets.',
    icon: 'Award',
    category: 'Debugging',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['1st Year College', '2nd Year College', '3rd Year College', 'Final Year College'],
    challenges: [
      {
        id: "assignment-in-if-01",
        title: "Assignment Used Instead of Comparison in If.L1.c",
        description: "Tests understanding of assignment vs. comparison in if statements.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int x = 10;
          if (x = 0)
              printf("Zero\\n");
          else
              printf("Non-zero\\n");
          return 0;
      }`,
        solution: "Used = instead of == in if condition",
        testCases: [{ input: "", expectedOutput: "Used = instead of == in if condition" }]
      },
      
      {
        id: "integer-division-float-02",
        title: "Integer Division Assigned to Float.L1.c",
        description: "Tests understanding of integer division and assignment to float.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int a = 5, b = 2;
          float result = a / b;
          printf("%.2f", result);
          return 0;
      }`,
        solution: "Integer division used instead of float division",
        testCases: [{ input: "", expectedOutput: "Integer division used instead of float division" }]
      },
      
      {
        id: "string-literal-modification-03",
        title: "Modifying String Literal.L1.c",
        description: "Tests understanding of modifying string literals.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char *str = "hello";
          str[0] = 'H';
          printf("%s", str);
          return 0;
      }`,
        solution: "Tried to modify a string literal",
        testCases: [{ input: "", expectedOutput: "Tried to modify a string literal" }]
      },
      
      {
        id: "buffer-overflow-strcpy-04",
        title: "Buffer Overflow with strcpy.L1.c",
        description: "Tests buffer overflow when copying a string.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char str[5];
          strcpy(str, "Hello");
          printf("%s", str);
          return 0;
      }`,
        solution: "Copied too many characters into a small array (buffer overflow)",
        testCases: [{ input: "", expectedOutput: "Copied too many characters into a small array (buffer overflow)" }]
      },
      
      {
        id: "array-out-of-bounds-05",
        title: "Array Out-of-Bounds Access.L1.c",
        description: "Tests out-of-bounds array access.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int a[3] = {0};
          for (int i = 0; i <= 3; i++)
              a[i] = i;
          return 0;
      }`,
        solution: "Array index out of bounds",
        testCases: [{ input: "", expectedOutput: "Array index out of bounds" }]
      },
      
      {
        id: "infinite-loop-assignment-06",
        title: "Infinite Loop from Assignment in While.L1.c",
        description: "Tests infinite loop due to assignment in while condition.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int a = 1;
          while (a = 1) {
              printf("Looping\\n");
          }
          return 0;
      }`,
        solution: "Assignment in while condition causes infinite loop",
        testCases: [{ input: "", expectedOutput: "Assignment in while condition causes infinite loop" }]
      },
      
      {
        id: "uninitialized-array-access-07",
        title: "Uninitialized Array Element Access.L1.c",
        description: "Tests access of uninitialized array elements.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int arr[5] = {1, 2, 3};
          printf("%d", arr[4]);
          return 0;
      }`,
        solution: "Accessed uninitialized array element",
        testCases: [{ input: "", expectedOutput: "Accessed uninitialized array element" }]
      },
      
      {
        id: "buffer-overrun-string-08",
        title: "Buffer Overrun by Writing Past Null.L1.c",
        description: "Tests buffer overrun by writing past the null terminator.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char str[] = "CS";
          str[2] = '!';
          printf("%s", str);
          return 0;
      }`,
        solution: "Wrote past the null terminator in string",
        testCases: [{ input: "", expectedOutput: "Wrote past the null terminator in string" }]
      },
      
      {
        id: "short-circuit-div-zero-09",
        title: "Short-Circuit Division by Zero.L1.c",
        description: "Tests short-circuit behavior with division by zero.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int a = 10;
          int b = 0;
          if (b && a / b > 1)
              printf("Valid");
          return 0;
      }`,
        solution: "Division by zero may still occur",
        testCases: [{ input: "", expectedOutput: "Division by zero may still occur" }]
      },
      
      {
        id: "dangling-semicolon-if-10",
        title: "Dangling Semicolon after If.L1.c",
        description: "Tests effect of a dangling semicolon after if.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char ch = 'A';
          if (ch >= 'a' && ch <= 'z');
              printf("Lowercase\\n");
          return 0;
      }`,
        solution: "Semicolon after if makes printf always run",
        testCases: [{ input: "", expectedOutput: "Semicolon after if makes printf always run" }]
      },
      
      {
        id: "string-equality-11",
        title: "String Equality with == Operator.L1.c",
        description: "Tests string comparison using == instead of strcmp.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char s1[] = "abc";
          char s2[] = "abc";
          if (s1 == s2)
              printf("Equal");
          return 0;
      }`,
        solution: "Compared string addresses instead of contents",
        testCases: [{ input: "", expectedOutput: "Compared string addresses instead of contents" }]
      },
      
      {
        id: "malloc-buffer-overflow-12",
        title: "Buffer Overflow with malloc and strcpy.L1.c",
        description: "Tests buffer overflow when copying into malloc'd memory.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char *p = malloc(10);
          strcpy(p, "1234567890A");
          printf("%s", p);
          free(p);
          return 0;
      }`,
        solution: "Copied more data than allocated (buffer overflow)",
        testCases: [{ input: "", expectedOutput: "Copied more data than allocated (buffer overflow)" }]
      },
      
      {
        id: "incomplete-ternary-13",
        title: "Incomplete Ternary Operator.L1.c",
        description: "Tests for incomplete ternary operator usage.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int a = 5;
          int b = (a > 5) ? 1 : ;
          printf("%d", b);
          return 0;
      }`,
        solution: "Incomplete ternary operator",
        testCases: [{ input: "", expectedOutput: "Incomplete ternary operator" }]
      },
      
      {
        id: "scanf-gets-mix-14",
        title: "Mixing scanf and gets.L1.c",
        description: "Tests mixing scanf and gets which can leave newline in buffer.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char s[10];
          scanf("%s", s);
          gets(s);
          printf("%s", s);
          return 0;
      }`,
        solution: "Mixing scanf and gets leaves newline in buffer",
        testCases: [{ input: "", expectedOutput: "Mixing scanf and gets leaves newline in buffer" }]
      },
      
      {
        id: "missing-null-terminator-15",
        title: "Missing Null Terminator in String.L1.c",
        description: "Tests missing null terminator in char array used as string.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char arr[4] = {'C', 'o', 'd', 'e'};
          printf("%s", arr);
          return 0;
      }`,
        solution: "String missing null terminator",
        testCases: [{ input: "", expectedOutput: "String missing null terminator" }]
      },
      
      {
        id: "mistyped-not-equal-16",
        title: "Mistyped Not Equal Operator.L1.c",
        description: "Tests for mistyped != as =! in condition.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int x = 0;
          if (x =! 5)
              printf("Not equal");
          return 0;
      }`,
        solution: "Mistyped != as =!",
        testCases: [{ input: "", expectedOutput: "Mistyped != as =!" }]
      },
      
      {
        id: "switch-missing-braces-17",
        title: "Missing Braces in Switch Statement.L1.c",
        description: "Tests for missing braces after switch.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int x = 2, y = 3;
          switch (x + y)
              case 5:
                  printf("Five");
                  break;
          return 0;
      }`,
        solution: "Missing braces after switch",
        testCases: [{ input: "", expectedOutput: "Missing braces after switch" }]
      },
      
      {
        id: "pointer-out-of-bounds-18",
        title: "Pointer Out-of-Bounds Dereference.L1.c",
        description: "Tests pointer arithmetic leading to out-of-bounds dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int arr[] = {1, 2, 3};
          int *p = arr + 4;
          printf("%d", *p);
          return 0;
      }`,
        solution: "Pointer dereference out of bounds",
        testCases: [{ input: "", expectedOutput: "Pointer dereference out of bounds" }]
      },
      
      {
        id: "undefined-behavior-increment-19",
        title: "Undefined Behavior with a = a++.L1.c",
        description: "Tests undefined behavior when using a = a++.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int a = 5;
          printf("a = %d\\n", a);
          a = a++;
          printf("a = %d\\n", a);
          return 0;
      }`,
        solution: "Undefined behavior with a = a++",
        testCases: [{ input: "", expectedOutput: "Undefined behavior with a = a++" }]
      },
      
      {
        id: "char-signedness-20",
        title: "Signedness of Char Type.L1.c",
        description: "Tests implementation-defined behavior for signed/unsigned char.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          char c = 255;
          printf("%d", c);
          return 0;
      }`,
        solution: "char may be signed or unsigned (implementation-defined)",
        testCases: [{ input: "", expectedOutput: "char may be signed or unsigned (implementation-defined)" }]
      },
      {
        id: "uninitialized-pointer-deref-01",
        title: "Uninitialized Pointer Dereference.L2.c",
        description: "Tests understanding of uninitialized pointer dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node *head;
          head->data = 10;
          head->next = NULL;
          return 0;
      }`,
        solution: "Uninitialized pointer being dereferenced",
        testCases: [{ input: "", expectedOutput: "Uninitialized pointer being dereferenced" }]
      },
      
      {
        id: "null-pointer-deref-02",
        title: "NULL Pointer Dereference in Linked List.L2.c",
        description: "Tests understanding of NULL pointer dereferencing in linked lists.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node node1, node2;
          node1.data = 5;
          node1.next = &node2;
          node2.data = 10;
          node2.next = NULL;
          printf("%d", node1.next->next->data);
          return 0;
      }`,
        solution: "Dereferencing NULL pointer (node2.next)",
        testCases: [{ input: "", expectedOutput: "Dereferencing NULL pointer (node2.next)" }]
      },
      
      {
        id: "local-variable-address-03",
        title: "Returning Address of Local Variable.L2.c",
        description: "Tests understanding of local variable scope and returning addresses.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      void addNode(struct Node *head) {
          struct Node newNode;
          newNode.data = 100;
          newNode.next = NULL;
          head->next = &newNode;
      }
      
      int main() {
          struct Node head = {1, NULL};
          addNode(&head);
          printf("%d", head.next->data);
          return 0;
      }`,
        solution: "Returning address of local variable that goes out of scope",
        testCases: [{ input: "", expectedOutput: "Returning address of local variable that goes out of scope" }]
      },
      
      {
        id: "null-pointer-deref-04",
        title: "NULL Pointer Dereference.L2.c",
        description: "Tests understanding of NULL pointer dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          struct Node {
              int data;
              struct Node *next;
          } *head = NULL;
      
          head->data = 10;
          return 0;
      }`,
        solution: "Dereferencing NULL pointer",
        testCases: [{ input: "", expectedOutput: "Dereferencing NULL pointer" }]
      },
      
      {
        id: "pass-by-value-05",
        title: "Pass by Value vs. Pass by Reference.L2.c",
        description: "Tests understanding of pass by value vs. pass by reference.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void insert(struct Node *node) {
          node = malloc(sizeof(struct Node));
          node->data = 5;
          node->next = NULL;
      }
      
      int main() {
          struct Node *head = NULL;
          insert(head);
          printf("%d", head->data);
          return 0;
      }`,
        solution: "Pointer passed by value, changes don't affect original",
        testCases: [{ input: "", expectedOutput: "Pointer passed by value, changes don't affect original" }]
      },
      
      {
        id: "uninitialized-next-06",
        title: "Uninitialized Next Pointer Dereference.L2.c",
        description: "Tests understanding of uninitialized next pointer dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          struct Node {
              int data;
              struct Node *next;
          };
      
          struct Node *head = malloc(sizeof(struct Node));
          head->next->data = 20;
          return 0;
      }`,
        solution: "Dereferencing uninitialized next pointer",
        testCases: [{ input: "", expectedOutput: "Dereferencing uninitialized next pointer" }]
      },
      
      {
        id: "free-stack-variable-07",
        title: "Freeing Stack-Allocated Memory.L2.c",
        description: "Tests understanding of memory allocation and deallocation.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node node;
          node.data = 10;
          free(&node);
          return 0;
      }`,
        solution: "Attempting to free stack-allocated memory",
        testCases: [{ input: "", expectedOutput: "Attempting to free stack-allocated memory" }]
      },
      
      {
        id: "null-pointer-deref-08",
        title: "NULL Pointer Dereference in Condition.L2.c",
        description: "Tests understanding of NULL pointer dereferencing in conditions.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          struct Node {
              int data;
              struct Node *next;
          };
      
          struct Node *head = NULL;
          if (!head->next)
              printf("Empty");
          return 0;
      }`,
        solution: "Dereferencing NULL pointer in condition",
        testCases: [{ input: "", expectedOutput: "Dereferencing NULL pointer in condition" }]
      },
      
      {
        id: "infinite-loop-09",
        title: "Infinite Loop in Linked List Traversal.L2.c",
        description: "Tests understanding of linked list traversal and loop termination.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void print(struct Node *node) {
          while (node != NULL)
              printf("%d", node->data);
      }
      
      int main() {
          struct Node *head = malloc(sizeof(struct Node));
          head->data = 10;
          head->next = NULL;
          print(head);
          return 0;
      }`,
        solution: "Infinite loop - node pointer never updated",
        testCases: [{ input: "", expectedOutput: "Infinite loop - node pointer never updated" }]
      },
      
      {
        id: "uninitialized-next-deref-10",
        title: "Uninitialized Next Pointer Dereference.L2.c",
        description: "Tests understanding of uninitialized next pointer dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node *head = malloc(sizeof(struct Node));
          head->data = 10;
          head->next->data = 20;
          return 0;
      }`,
        solution: "Dereferencing uninitialized next pointer",
        testCases: [{ input: "", expectedOutput: "Dereferencing uninitialized next pointer" }]
      },
      
      {
        id: "free-stack-variable-11",
        title: "Freeing Stack-Allocated Memory.L2.c",
        description: "Tests understanding of memory allocation and deallocation.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node head;
          head.data = 10;
          free(&head);
          return 0;
      }`,
        solution: "Attempting to free non-dynamically allocated memory",
        testCases: [{ input: "", expectedOutput: "Attempting to free non-dynamically allocated memory" }]
      },
      
      {
        id: "double-free-12",
        title: "Double Free in Linked List.L2.c",
        description: "Tests understanding of memory deallocation issues.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node *node = malloc(sizeof(struct Node));
          node->next = node;
          free(node->next);
          return 0;
      }`,
        solution: "Double free - freeing same memory twice",
        testCases: [{ input: "", expectedOutput: "Double free - freeing same memory twice" }]
      },
      
      {
        id: "uninitialized-pointer-deref-13",
        title: "Uninitialized Pointer Dereference.L2.c",
        description: "Tests understanding of uninitialized pointer dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          struct Node {
              int data;
              struct Node *next;
          } *head;
      
          head->data = 10;
          return 0;
      }`,
        solution: "Dereferencing uninitialized pointer",
        testCases: [{ input: "", expectedOutput: "Dereferencing uninitialized pointer" }]
      },
      
      {
        id: "use-after-free-14",
        title: "Use After Free in Linked List.L2.c",
        description: "Tests understanding of memory deallocation and use after free.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node *node = NULL;
          node = malloc(sizeof(struct Node));
          node->data = 5;
          free(node);
          printf("%d", node->data);
          return 0;
      }`,
        solution: "Accessing freed memory",
        testCases: [{ input: "", expectedOutput: "Accessing freed memory" }]
      },
      
      {
        id: "missing-braces-15",
        title: "Missing Braces in Loop.L2.c",
        description: "Tests understanding of loop syntax and braces.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void display(struct Node *node) {
          while (node)
              printf("%d", node->data);
              node = node->next;
      }`,
        solution: "Missing braces - node = node->next is outside the loop",
        testCases: [{ input: "", expectedOutput: "Missing braces - node = node->next is outside the loop" }]
      },
      
      {
        id: "uninitialized-pointer-deref-16",
        title: "Uninitialized Pointer Dereference.L2.c",
        description: "Tests understanding of uninitialized pointer dereferencing.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node *p;
          p->data = 1;
          return 0;
      }`,
        solution: "Dereferencing uninitialized pointer",
        testCases: [{ input: "", expectedOutput: "Dereferencing uninitialized pointer" }]
      },
      
      {
        id: "use-after-free-17",
        title: "Use After Free with Alias.L2.c",
        description: "Tests understanding of memory deallocation and aliases.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          struct Node {
              int data;
              struct Node *next;
          };
      
          struct Node *node = malloc(sizeof(struct Node));
          node->data = 10;
          struct Node *next = node;
          free(node);
          printf("%d", next->data);
          return 0;
      }`,
        solution: "Accessing freed memory through alias",
        testCases: [{ input: "", expectedOutput: "Accessing freed memory through alias" }]
      },
      
      {
        id: "wrong-parameter-18",
        title: "Wrong Parameter Type in Function Call.L2.c",
        description: "Tests understanding of function parameters and double pointers.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void insert(struct Node **head) {
          struct Node *temp = malloc(sizeof(struct Node));
          temp->data = 100;
          temp->next = *head;
          *head = temp;
      }
      
      int main() {
          struct Node *head = NULL;
          insert(head);
          printf("%d", head->data);
          return 0;
      }`,
        solution: "Passing pointer instead of address of pointer",
        testCases: [{ input: "", expectedOutput: "Passing pointer instead of address of pointer" }]
      },
      
      {
        id: "use-after-free-19",
        title: "Use After Free with Self-Reference.L2.c",
        description: "Tests understanding of memory deallocation with self-referential structures.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          struct Node {
              int data;
              struct Node *next;
          };
      
          struct Node *list = malloc(sizeof(struct Node));
          list->next = list;
          free(list);
          list = list->next;
          printf("%d", list->data);
          return 0;
      }`,
        solution: "Accessing freed memory after self-reference",
        testCases: [{ input: "", expectedOutput: "Accessing freed memory after self-reference" }]
      },
      
      {
        id: "pass-by-value-20",
        title: "Pass by Value in Delete Function.L2.c",
        description: "Tests understanding of pass by value vs. pass by reference in deletion.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      void delete(struct Node *head) {
          free(head);
          head = NULL;
      }
      
      int main() {
          struct Node *head = malloc(sizeof(struct Node));
          delete(head);
          printf("%d", head->data);
          return 0;
      }`,
        solution: "Setting head to NULL only affects local copy in function",
        testCases: [{ input: "", expectedOutput: "Setting head to NULL only affects local copy in function" }]
      },
      {
        id: "pointer-out-of-bounds-01",
        title: "Pointer Out-of-Bounds Access.L3.c",
        description: "Accessing memory out of bounds using pointer arithmetic.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int arr[4] = {1, 2, 3, 4};
          printf("%d", *(arr + 4));
          return 0;
      }`,
        solution: "Pointer arithmetic out of bounds",
        testCases: [{ input: "", expectedOutput: "Pointer arithmetic out of bounds" }]
      },
      
      {
        id: "free-before-next-02",
        title: "Free Before Next in Linked List.L3.c",
        description: "Memory is freed before moving to the next node.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      void deleteAll(struct Node *head) {
          while (head != NULL) {
              free(head);
              head = head->next;
          }
      }`,
        solution: "Accessing next after freeing node",
        testCases: [{ input: "", expectedOutput: "Accessing next after freeing node" }]
      },
      
      {
        id: "array-out-of-bounds-03",
        title: "Array Out-of-Bounds Write.L3.c",
        description: "Array is accessed out of bounds.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int *arr = malloc(sizeof(int) * 5);
          for (int i = 0; i <= 5; i++)
              arr[i] = i;
          free(arr);
          return 0;
      }`,
        solution: "Array index out of bounds",
        testCases: [{ input: "", expectedOutput: "Array index out of bounds" }]
      },
      
      {
        id: "missing-base-case-04",
        title: "Missing Base Case in Recursion.L3.c",
        description: "No base case in recursive function.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `typedef struct Node {
          int data;
          struct Node *left, *right;
      } Node;
      
      void inorder(Node *root) {
          inorder(root->left);
          printf("%d ", root->data);
          inorder(root->right);
      }`,
        solution: "Missing base case in recursion",
        testCases: [{ input: "", expectedOutput: "Missing base case in recursion" }]
      },
      
      {
        id: "queue-underflow-05",
        title: "Queue Underflow Not Checked.L3.c",
        description: "No underflow protection in queue.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#define MAX 100
      
      int queue[MAX];
      int front = -1, rear = -1;
      
      int main() {
          queue[++rear] = 10;
          queue[++rear] = 20;
          front++;
          front++;
          front++;
          printf("%d", queue[front]);
          return 0;
      }`,
        solution: "Queue underflow not checked",
        testCases: [{ input: "", expectedOutput: "Queue underflow not checked" }]
      },
      
      {
        id: "bad-hash-function-06",
        title: "Bad Hash Function.L3.c",
        description: "Hash function always returns 0.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int hash(int key) {
          return key & 0;
      }`,
        solution: "Hash function always returns 0",
        testCases: [{ input: "", expectedOutput: "Hash function always returns 0" }]
      },
      
      {
        id: "wrong-top-increment-07",
        title: "Wrong Top Increment in Stack.L3.c",
        description: "Incorrect increment of top pointer.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void push(int *stack, int *top, int val) {
          stack[*top] = val;
          *top++;
      }`,
        solution: "Incorrect increment of top pointer",
        testCases: [{ input: "", expectedOutput: "Incorrect increment of top pointer" }]
      },
      
      {
        id: "local-head-modification-08",
        title: "Local Head Modification in Linked List.L3.c",
        description: "Head modification is local to function.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void addNode(struct Node *head) {
          struct Node *new = malloc(sizeof(struct Node));
          new->data = 10;
          new->next = head;
          head = new;
      }`,
        solution: "Head modification is local, does not affect caller",
        testCases: [{ input: "", expectedOutput: "Head modification is local, does not affect caller" }]
      },
      
      {
        id: "use-after-free-09",
        title: "Use After Free.L3.c",
        description: "Accessing memory after it has been freed.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int *arr;
          arr = calloc(5, sizeof(int));
          for (int i = 0; i < 5; i++)
              printf("%d ", arr[i]);
          free(arr);
          printf("%d", arr[0]);
          return 0;
      }`,
        solution: "Accessing memory after free",
        testCases: [{ input: "", expectedOutput: "Accessing memory after free" }]
      },
      
      {
        id: "struct-by-value-10",
        title: "Passing Struct by Value.L3.c",
        description: "Changes to struct lost due to pass by value.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Tree {
          int val;
          struct Tree *left, *right;
      };
      
      void build(struct Tree t) {
          t.left = malloc(sizeof(struct Tree));
          t.left->val = 10;
      }`,
        solution: "Changes to struct lost due to pass by value",
        testCases: [{ input: "", expectedOutput: "Changes to struct lost due to pass by value" }]
      },
      
      {
        id: "pointer-local-malloc-11",
        title: "Pointer Local Malloc Assignment.L3.c",
        description: "Memory assigned to local pointer only.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int val;
          struct Node *next;
      };
      
      void insert(struct Node *n) {
          n = malloc(sizeof(struct Node));
          n->val = 5;
      }`,
        solution: "Memory assigned to local pointer only",
        testCases: [{ input: "", expectedOutput: "Memory assigned to local pointer only" }]
      },
      
      {
        id: "stack-top-off-by-one-12",
        title: "Stack Top Off-by-One.L3.c",
        description: "Stack top incremented before use; stack[-1] on first push.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#define N 5
      int stack[N];
      int top = -1;
      
      void push(int x) {
          stack[top++] = x;
      }`,
        solution: "Stack top incremented before use; stack[-1] accessed",
        testCases: [{ input: "", expectedOutput: "Stack top incremented before use; stack[-1] accessed" }]
      },
      
      {
        id: "uninitialized-next-deref-13",
        title: "Uninitialized Next Pointer Dereference.L3.c",
        description: "Dereferencing uninitialized next pointer.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      } n1;
      
      int main() {
          n1.next->data = 5;
          return 0;
      }`,
        solution: "Dereferencing uninitialized next pointer",
        testCases: [{ input: "", expectedOutput: "Dereferencing uninitialized next pointer" }]
      },
      
      {
        id: "uninitialized-adj-matrix-14",
        title: "Uninitialized Adjacency Matrix.L3.c",
        description: "Adjacency matrix pointer not initialized.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Graph {
          int **adj;
          int size;
      };
      
      int main() {
          struct Graph g;
          g.adj[0][1] = 1;
          return 0;
      }`,
        solution: "Adjacency matrix pointer not initialized",
        testCases: [{ input: "", expectedOutput: "Adjacency matrix pointer not initialized" }]
      },
      
      {
        id: "realloc-leak-15",
        title: "Realloc Result Ignored.L3.c",
        description: "Result of realloc is ignored.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `void insert(int *arr, int val) {
          realloc(arr, sizeof(int) * 20);
          arr[19] = val;
      }`,
        solution: "Result of realloc is ignored",
        testCases: [{ input: "", expectedOutput: "Result of realloc is ignored" }]
      },
      
      {
        id: "stack-overflow-16",
        title: "Stack Overflow in Push.L3.c",
        description: "No top increment, array overwritten, potential overflow.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int top = 0;
      
      void push(int s[], int val) {
          s[top] = val;
      }
      
      int main() {
          int stack[2];
          push(stack, 10);
          push(stack, 20);
          push(stack, 30);
          return 0;
      }`,
        solution: "No top increment; array overwritten; overflow possible",
        testCases: [{ input: "", expectedOutput: "No top increment; array overwritten; overflow possible" }]
      },
      
      {
        id: "missing-null-check-17",
        title: "Missing NULL Check in Recursion.L3.c",
        description: "Missing NULL check in recursive function.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      void print(struct Node *p) {
          if (p->next != NULL)
              print(p->next);
          printf("%d ", p->data);
      }`,
        solution: "Missing NULL check in recursion",
        testCases: [{ input: "", expectedOutput: "Missing NULL check in recursion" }]
      },
      
      {
        id: "return-local-array-18",
        title: "Returning Local Array Address.L3.c",
        description: "Returning pointer to local array (dangling pointer).",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int *createQueue() {
          int q[10];
          return q;
      }`,
        solution: "Returning pointer to local array",
        testCases: [{ input: "", expectedOutput: "Returning pointer to local array" }]
      },
      
      {
        id: "stack-overflow-large-array-19",
        title: "Stack Overflow Large Array.L3.c",
        description: "Stack overflow due to large array allocation.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `int main() {
          int arr[100000000];
          arr[0] = 1;
          return 0;
      }`,
        solution: "Stack overflow from large array allocation",
        testCases: [{ input: "", expectedOutput: "Stack overflow from large array allocation" }]
      },
      
      {
        id: "free-next-leak-20",
        title: "Free Next Node Leak.L3.c",
        description: "Frees next node instead of current, leaks first node.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `struct Node {
          int data;
          struct Node *next;
      };
      
      void freeList(struct Node *head) {
          struct Node *temp;
          while (head != NULL) {
              temp = head->next;
              free(temp);
              head = temp;
          }
      }`,
        solution: "Leaks first node, frees next instead of current",
        testCases: [{ input: "", expectedOutput: "Leaks first node, frees next instead of current" }]
      },
    ],
    programmingLanguages: ['JavaScript', 'Python', 'Java', 'C', 'PHP']
  },
  {
    id: 'algorithm-puzzles',
    title: 'Algorithm Puzzles',
    description: 'Solve algorithmic challenges and optimize solutions.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'dynamic-fib',
        title: 'Dynamic Programming - Fibonacci',
        description: 'Optimize the Fibonacci sequence calculation using dynamic programming.',
        points: 300,
        timeLimit: 600,
        codeTemplate: `// This naive recursive implementation is very inefficient
// Optimize it using dynamic programming
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// TODO: Implement an efficient version
function efficientFibonacci(n) {
  // Your code here
}`,
        solution: `// This naive recursive implementation is very inefficient
// Optimize it using dynamic programming
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function efficientFibonacci(n) {
  if (n <= 1) return n;
  
  let fib = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[n];
}`,
        testCases: [
          { input: '10', expectedOutput: '55' },
          { input: '20', expectedOutput: '6765' },
          { input: '30', expectedOutput: '832040' }
        ]
      },
      {
        id: 'greedy-coins',
        title: 'Greedy Algorithms - Coin Change',
        description: 'Implement a greedy algorithm to find the minimum number of coins needed to make change.',
        points: 250,
        timeLimit: 600,
        codeTemplate: `// Implement a greedy algorithm for coin change
// Coins available: [1, 5, 10, 25]
// Return the minimum number of coins needed to make 'amount'
function minCoins(coins, amount) {
  // Your code here
}`,
        solution: `function minCoins(coins, amount) {
  // Sort coins in descending order
  coins.sort((a, b) => b - a);
  
  let coinCount = 0;
  let remaining = amount;
  
  for (const coin of coins) {
    // Use as many of the current coin as possible
    const count = Math.floor(remaining / coin);
    coinCount += count;
    remaining -= coin * count;
    
    if (remaining === 0) break;
  }
  
  return coinCount;
}`,
        testCases: [
          { input: '([1, 5, 10, 25], 36)', expectedOutput: '3' },  // 25 + 10 + 1
          { input: '([1, 5, 10, 25], 42)', expectedOutput: '5' },  // 25 + 10 + 5 + 1 + 1
          { input: '([1, 5, 10, 25], 100)', expectedOutput: '4' }  // 25 + 25 + 25 + 25
        ]
      }
    ],
    programmingLanguages: ['JavaScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'frontend-frameworks',
    title: 'Frontend Framework Challenge',
    description: 'Test your skills with popular frontend frameworks like React, Vue, and Angular.',
    icon: 'Code',
    category: 'Web Development',
    phase: 'Phase 1',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        id: 'react-component',
        title: 'React Component Architecture',
        description: 'Build a reusable React component with proper state management and props.',
        points: 200,
        timeLimit: 1800,
        codeTemplate: `// Create a reusable React counter component with the following features:
// - Increment/decrement buttons
// - Reset functionality
// - Custom step size (via props)
// - Optional max/min values (via props)

import React from 'react';

// TODO: Implement the Counter component
export const Counter = () => {
  // Your code here
};`,
        solution: `import React, { useState } from 'react';

export const Counter = ({ 
  initialValue = 0, 
  step = 1, 
  min = null, 
  max = null 
}) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + step;
      return max !== null ? Math.min(newCount, max) : newCount;
    });
  };
  
  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - step;
      return min !== null ? Math.max(newCount, min) : newCount;
    });
  };
  
  const reset = () => {
    setCount(initialValue);
  };
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="controls">
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increase</button>
      </div>
      <p>Step size: {step}</p>
      {min !== null && <p>Minimum value: {min}</p>}
      {max !== null && <p>Maximum value: {max}</p>}
    </div>
  );
};`
      },
      {
        id: 'vue-reactivity',
        title: 'Vue.js Reactivity',
        description: 'Implement a reactive system using Vue.js composition API.',
        points: 250,
        timeLimit: 1800,
        codeTemplate: `// Create a Vue.js composition function that manages a shopping cart
// The cart should support adding items, removing items, and calculating totals

export default function useShoppingCart() {
  // TODO: Implement a reactive shopping cart
  
  return {
    // Export functions and reactive state here
  };
}`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript']
  },
  {
    id: 'python',
    title: 'Python complete the code',
    description: 'Fill in the missing code to make the function work as expected.',
    icon: 'Code',
    category: 'Code Completion',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College', 'Masters', 'PhD'],
    challenges: [
     {
          "id": "arrays-loops-sum-beginner",
          "title": "Sum of Array Elements L1.py",
          "description": "Complete the function to calculate the sum of elements in an array.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def array_sum(arr, size):\n    # Complete code here\n    pass",
          "solution": "def array_sum(arr, size):\n    sum = 0\n    for i in range(size):\n        sum += arr[i]\n    return sum",
          "testCases": [
            {
              "input": "array_sum([1, 2, 3, 4, 5], 5)",
              "expectedOutput": "15"
            },
            {
              "input": "array_sum([10, 20, 30, 40, 50], 5)",
              "expectedOutput": "150"
            },
            {
              "input": "array_sum([-1, 0, 1], 3)",
              "expectedOutput": "0"
            }
          ]
        },
        {
          "id": "strings-loops-count-vowels-beginner",
          "title": "Count Vowels in a String L1.py",
          "description": "Complete the function to count vowels (a, e, i, o, u) in a string, case-insensitive.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def count_vowels(text):\n    # Complete code here\n    pass",
          "solution": "def count_vowels(text):\n    vowels = \"aeiou\"\n    count = 0\n    for char in text.lower():\n        if char in vowels:\n            count += 1\n    return count",
          "testCases": [
            {
              "input": "count_vowels('Hello World')",
              "expectedOutput": "3"
            },
            {
              "input": "count_vowels('Python')",
              "expectedOutput": "1"
            },
            {
              "input": "count_vowels('Brrr')",
              "expectedOutput": "0"
            }
          ]
        },
        {
          "id": "recursion-loops-factorial-beginner",
          "title": "Calculate Factorial of a Number L1.py",
          "description": "Complete the function to calculate the factorial of a number.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def factorial(n):\n    # Complete code here\n    pass",
          "solution": "def factorial(n):\n    if n <= 1:\n        return 1\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result",
          "testCases": [
            {
              "input": "factorial(0)",
              "expectedOutput": "1"
            },
            {
              "input": "factorial(1)",
              "expectedOutput": "1"
            },
            {
              "input": "factorial(5)",
              "expectedOutput": "120"
            },
            {
              "input": "factorial(7)",
              "expectedOutput": "5040"
            }
          ]
        },
        {
          "id": "strings-pointers-reverse-string-beginner",
          "title": "Reverse a String L1.py",
          "description": "Complete the function to reverse a string in place.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def reverse_string(s):\n    # Complete code here\n    pass",
          "solution": "def reverse_string(s):\n    s_list = list(s)\n    length = len(s_list)\n    for i in range(length // 2):\n        s_list[i], s_list[length - 1 - i] = s_list[length - 1 - i], s_list[i]\n    s = ''.join(s_list)\n    return s",
          "testCases": [
            {
              "input": "reverse_string('Hello')",
              "expectedOutput": "olleH"
            },
            {
              "input": "reverse_string('Programming')",
              "expectedOutput": "gnimmargorP"
            },
            {
              "input": "reverse_string('C')",
              "expectedOutput": "C"
            }
          ]
        },
        {
          "id": "loops-recursion-fibonacci-beginner",
          "title": "Generate Fibonacci Sequence L1.py",
          "description": "Complete the function to generate the first n Fibonacci numbers.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def fibonacci(n):\n    # Complete code here\n    pass",
          "solution": "def fibonacci(n):\n    sequence = []\n    a, b = 0, 1\n    for _ in range(n):\n        sequence.append(a)\n        a, b = b, a + b\n    return sequence",
          "testCases": [
            {
              "input": "fibonacci(5)",
              "expectedOutput": "[0, 1, 1, 2, 3]"
            },
            {
              "input": "fibonacci(10)",
              "expectedOutput": "[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]"
            }
          ]
        },
        {
          "id": "lists-math-average-beginner",
          "title": "Calculate Average of List L1.py",
          "description": "Complete the function to calculate the average of numbers in a list.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def list_average(numbers):\n    # Complete code here\n    pass",
          "solution": "def list_average(numbers):\n    return sum(numbers) / len(numbers) if numbers else 0",
          "testCases": [
            {
              "input": "list_average([1,2,3,4,5])",
              "expectedOutput": "3.0"
            },
            {
              "input": "list_average([10,20,30])",
              "expectedOutput": "20.0"
            },
            {
              "input": "list_average([-1,0,1])",
              "expectedOutput": "0.0"
            }
          ]
        },
        {
          "id": "numbers-loops-palindrome-beginner",
          "title": "Check if Number is Palindrome L1.py",
          "description": "Complete the function to check if a number is a palindrome.",
          "points": 150,
          "timeLimit": 180,
          "codeTemplate": "def is_palindrome(num):\n    # Complete code here\n    pass",
          "solution": "def is_palindrome(num):\n    if num < 0:\n        return False\n    original = num\n    reversed_num = 0\n    while num > 0:\n        reversed_num = reversed_num * 10 + num % 10\n        num = num // 10\n    return original == reversed_num",
          "testCases": [
            {
              "input": "is_palindrome(121)",
              "expectedOutput": "True"
            },
            {
              "input": "is_palindrome(123)",
              "expectedOutput": "False"
            },
            {
              "input": "is_palindrome(1)",
              "expectedOutput": "True"
            },
            {
              "input": "is_palindrome(12321)",
              "expectedOutput": "True"
            }
          ]
        },
        {
          "id": "avl-tree-insertion-advanced",
          "title": "Implement AVL Tree Insertion and Balancing L2.py",
          "description": "Implement an AVL tree with insertion and balancing operations.",
          "points": 400,
          "timeLimit": 600,
          "codeTemplate": "class AVLNode:\n    def __init__(self, key):\n        self.key = key\n        self.left = None\n        self.right = None\n        self.height = 1\n\ndef height(node):\n    # Complete code here\n    pass\n\ndef get_balance(node):\n    # Complete code here\n    pass\n\ndef right_rotate(y):\n    # Complete code here\n    pass\n\ndef left_rotate(x):\n    # Complete code here\n    pass\n\ndef insert(node, key):\n    # Complete code here\n    pass\n\ndef inorder_traversal(root):\n    if root:\n        inorder_traversal(root.left)\n        print(root.key, end=\" \")\n        inorder_traversal(root.right)",
          "solution": "def height(node):\n    if node is None:\n        return 0\n    return node.height\n\ndef get_balance(node):\n    if node is None:\n        return 0\n    return height(node.left) - height(node.right)\n\ndef right_rotate(y):\n    x = y.left\n    T2 = x.right\n\n    x.right = y\n    y.left = T2\n\n    y.height = max(height(y.left), height(y.right)) + 1\n    x.height = max(height(x.left), height(x.right)) + 1\n\n    return x\n\ndef left_rotate(x):\n    y = x.right\n    T2 = y.left\n\n    y.left = x\n    x.right = T2\n\n    x.height = max(height(x.left), height(x.right)) + 1\n    y.height = max(height(y.left), height(y.right)) + 1\n\n    return y\n\ndef insert(node, key):\n    if node is None:\n        return AVLNode(key)\n\n    if key < node.key:\n        node.left = insert(node.left, key)\n    elif key > node.key:\n        node.right = insert(node.right, key)\n    else:\n        return node\n\n    node.height = 1 + max(height(node.left), height(node.right))\n\n    balance = get_balance(node)\n\n    # Left Left Case\n    if balance > 1 and key < node.left.key:\n        return right_rotate(node)\n\n    # Right Right Case\n    if balance < -1 and key > node.right.key:\n        return left_rotate(node)\n\n    # Left Right Case\n    if balance > 1 and key > node.left.key:\n        node.left = left_rotate(node.left)\n        return right_rotate(node)\n\n    # Right Left Case\n    if balance < -1 and key < node.right.key:\n        node.right = right_rotate(node.right)\n        return left_rotate(node)\n\n    return node",
          "testCases": [
            {
              "input": "root = None\nkeys = [10, 20, 30, 40, 50, 25]\nfor key in keys:\n    root = insert(root, key)\ninorder_traversal(root)",
              "expectedOutput": "10 20 25 30 40 50"
            }
          ]
        },
        {
          "id": "binary-tree-valid-bst-advanced",
          "title": "Validate Binary Search Tree L2.py",
          "description": "Complete the function to check if a binary tree is a valid binary search tree (BST).",
          "points": 400,
          "timeLimit": 600,
          "codeTemplate": "import sys\n\nclass TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef create_node(val):\n    return TreeNode(val)\n\ndef is_valid_bst_helper(node, min_val, max_val):\n    # Complete code here\n    pass\n\ndef is_valid_bst(root):\n    # Complete code here\n    pass",
          "solution": "def is_valid_bst_helper(node, min_val, max_val):\n    if node is None:\n        return True\n\n    if node.val <= min_val or node.val >= max_val:\n        return False\n\n    return (is_valid_bst_helper(node.left, min_val, node.val) and\n            is_valid_bst_helper(node.right, node.val, max_val))\n\ndef is_valid_bst(root):\n    import sys\n    return is_valid_bst_helper(root, -sys.maxsize, sys.maxsize)",
          "testCases": [
            {
              "input": "# Test case 1: Valid BST\nroot1 = create_node(5)\nroot1.left = create_node(3)\nroot1.right = create_node(7)\nroot1.left.left = create_node(2)\nroot1.left.right = create_node(4)\nroot1.right.left = create_node(6)\nroot1.right.right = create_node(8)\nprint(f\"Is tree 1 a valid BST? {'Yes' if is_valid_bst(root1) else 'No'}\")",
              "expectedOutput": "Is tree 1 a valid BST? Yes"
            },
            {
              "input": "# Test case 2: Invalid BST\nroot2 = create_node(5)\nroot2.left = create_node(3)\nroot2.right = create_node(7)\nroot2.left.left = create_node(2)\nroot2.left.right = create_node(6)  # Invalid: 6 > 5\nprint(f\"Is tree 2 a valid BST? {'Yes' if is_valid_bst(root2) else 'No'}\")",
              "expectedOutput": "Is tree 2 a valid BST? No"
            }
          ]
        },
        {
          "id": "graph-dijkstra-shortest-path-advanced",
          "title": "Dijkstra's Algorithm for Shortest Path L2.py",
          "description": "Implement Dijkstra's algorithm to find the shortest path from a source vertex to all other vertices in a graph.",
          "points": 400,
          "timeLimit": 600,
          "codeTemplate": "import sys\n\nV = 6\n\ndef min_distance(dist, visited):\n    # Complete code here\n    pass\n\ndef print_solution(dist):\n    print(\"Vertex \\t Distance from Source\")\n    for i in range(V):\n        print(f\"{i} \\t {dist[i]}\")\n\ndef dijkstra(graph, src):\n    # Complete code here\n    pass\n\ngraph = [\n    [0, 4, 0, 0, 0, 0],\n    [4, 0, 8, 0, 0, 0],\n    [0, 8, 0, 7, 0, 4],\n    [0, 0, 7, 0, 9, 14],\n    [0, 0, 0, 9, 0, 10],\n    [0, 0, 4, 14, 10, 0]\n]\n\ndijkstra(graph, 0)",
          "solution": "def min_distance(dist, visited):\n    min_dist = sys.maxsize\n    min_index = 0\n    \n    for v in range(V):\n        if not visited[v] and dist[v] <= min_dist:\n            min_dist = dist[v]\n            min_index = v\n    \n    return min_index\n\ndef dijkstra(graph, src):\n    dist = [sys.maxsize] * V\n    visited = [False] * V\n    dist[src] = 0\n    \n    for _ in range(V - 1):\n        u = min_distance(dist, visited)\n        visited[u] = True\n        \n        for v in range(V):\n            if (not visited[v] and graph[u][v] and dist[u] != sys.maxsize and\n                dist[u] + graph[u][v] < dist[v]):\n                dist[v] = dist[u] + graph[u][v]\n    \n    print_solution(dist)",
          "testCases": [
            {
              "input": "graph = [\n    [0, 4, 0, 0, 0, 0],\n    [4, 0, 8, 0, 0, 0],\n    [0, 8, 0, 7, 0, 4],\n    [0, 0, 7, 0, 9, 14],\n    [0, 0, 0, 9, 0, 10],\n    [0, 0, 4, 14, 10, 0]\n]\ndijkstra(graph, 0)",
              "expectedOutput": "Vertex \t Distance from Source\n0 \t 0\n1 \t 4\n2 \t 12\n3 \t 19\n4 \t 21\n5 \t 11"
            }
          ]
        },
        {
          "id": "hash-table-chaining-advanced",
          "title": "Implement Hash Table with Chaining L2.py",
          "description": "Implement a basic hash table with set/get methods using chaining for collision resolution.",
          "points": 400,
          "timeLimit": 600,
          "codeTemplate": "class HashTable:\n    def __init__(self, size=10):\n        # Complete initialization\n        pass\n    \n    def _hash(self, key):\n        # Complete hash function\n        pass\n    \n    def set(self, key, value):\n        # Complete set method\n        pass\n    \n    def get(self, key):\n        # Complete get method\n        pass",
          "solution": "class HashTable:\n    def __init__(self, size=10):\n        self.size = size\n        self.table = [[] for _ in range(size)]\n    \n    def _hash(self, key):\n        return hash(key) % self.size\n    \n    def set(self, key, value):\n        hash_key = self._hash(key)\n        for i, (k, v) in enumerate(self.table[hash_key]):\n            if k == key:\n                self.table[hash_key][i] = (key, value)\n                return\n        self.table[hash_key].append((key, value))\n    \n    def get(self, key):\n        hash_key = self._hash(key)\n        for k, v in self.table[hash_key]:\n            if k == key:\n                return v\n        raise KeyError(key)",
          "testCases": [
            {
              "input": "ht = HashTable()\nht.set(\"apple\", 5)\nht.set(\"banana\", 10)\nprint(\"Value for 'apple':\", ht.get(\"apple\"))",
              "expectedOutput": "Value for 'apple': 5"
            },
            {
              "input": "ht = HashTable()\nht.set(\"apple\", 5)\nht.set(\"banana\", 10)\nprint(\"Value for 'banana':\", ht.get(\"banana\"))",
              "expectedOutput": "Value for 'banana': 10"
            }
          ]
        },
        {
          "id": "concurrency-thread-pool-advanced",
          "title": "Implement a Basic Thread Pool L2.py",
          "description": "Implement a basic thread pool that executes tasks concurrently using multiple threads.",
          "points": 400,
          "timeLimit": 600,
          "codeTemplate": "import threading\nfrom queue import Queue\n\nclass ThreadPool:\n    def __init__(self, num_threads):\n        # Complete initialization\n        pass\n    \n    def _worker(self):\n        # Complete worker method\n        pass\n    \n    def submit(self, task):\n        # Complete submit method\n        pass\n    \n    def wait_completion(self):\n        # Complete wait method\n        pass",
          "solution": "class ThreadPool:\n    def __init__(self, num_threads):\n        self.tasks = Queue()\n        self.threads = []\n        for _ in range(num_threads):\n            t = threading.Thread(target=self._worker)\n            t.start()\n            self.threads.append(t)\n    \n    def _worker(self):\n        while True:\n            task = self.tasks.get()\n            if task is None:  # Sentinel value\n                self.tasks.task_done()\n                break\n            task()\n            self.tasks.task_done()\n    \n    def submit(self, task):\n        self.tasks.put(task)\n    \n    def wait_completion(self):\n        for _ in self.threads:\n            self.tasks.put(None)  # Add sentinel\n        for t in self.threads:\n            t.join()",
          "testCases": [
            {
              "input": "def sample_task(x):\n    import time\n    time.sleep(1)\n    return x * x\n\npool = ThreadPool(3)\nresults = []\nfor i in range(5):\n    pool.submit(lambda i=i: results.append(sample_task(i)))\npool.wait_completion()\nprint(\"Results:\", sorted(results))",
              "expectedOutput": "Results: [0, 1, 4, 9, 16]"
            }
          ]
        }
      
    ],
    programmingLanguages: ['Python']
  },
  {
    id: 'java-challenges',
    title: 'Java Mastery',
    description: 'Tackle Java challenges focusing on OOP principles, concurrency, and enterprise patterns.',
    icon: 'LayoutGrid',
    category: 'Software Engineering',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        id: 'design-patterns',
        title: 'Design Pattern Implementation',
        description: 'Implement a solution using appropriate design patterns.',
        points: 250,
        timeLimit: 2400,
        codeTemplate: `// TODO: Implement an online shopping system using appropriate design patterns
// Required patterns: Factory, Observer, Decorator
// The system should allow creating products, notifying customers of price changes,
// and adding features/addons to products dynamically

// Product interface and implementations
interface Product {
    // Your code here
}

// Factory implementation
class ProductFactory {
    // Your code here
}

// Observer implementation for price notifications
interface PriceObserver {
    // Your code here
}

// Decorator implementation for product features
abstract class ProductDecorator implements Product {
    // Your code here
}

// Main class to demonstrate the pattern implementations
public class ShoppingSystem {
    public static void main(String[] args) {
        // Your demo code here
    }
}`
      },
      {
        id: 'concurrency',
        title: 'Concurrent Data Processing',
        description: 'Implement a concurrent solution for processing large datasets.',
        points: 300,
        timeLimit: 1800,
        codeTemplate: `import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.*;

// TODO: Implement a concurrent data processing system
// The system should read data from multiple sources concurrently,
// transform the data, and then aggregate the results

class DataProcessor {
    // Your code here
}

class DataSource {
    private final String name;
    
    public DataSource(String name) {
        this.name = name;
    }
    
    public List<String> readData() {
        // Simulate reading data from a source
        try {
            Thread.sleep(100); // Simulating I/O delay
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        List<String> data = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            data.add(name + "-data-" + i);
        }
        return data;
    }
}

public class ConcurrencyExample {
    public static void main(String[] args) {
        // Your demo code here
    }
}`
      }
    ],
    programmingLanguages: ['Java']
  },
  {
    id: 'backend-api',
    title: 'Backend API Challenge',
    description: 'Design and implement robust backend APIs using various technologies.',
    icon: 'Code',
    category: 'Backend Development',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        id: 'nodejs-api',
        title: 'Node.js REST API',
        description: 'Build a RESTful API with Node.js, Express, and MongoDB.',
        points: 250,
        timeLimit: 2400,
        codeTemplate: `// TODO: Implement a RESTful API for a blog platform with the following features:
// - User authentication (signup, login)
// - CRUD operations for blog posts
// - Comments functionality
// - User profiles

// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Your code here

// File: models/userModel.js
const mongoose = require('mongoose');

// Your code here

// File: controllers/authController.js
// Your code here

// File: controllers/postController.js
// Your code here

// File: routes/apiRoutes.js
// Your code here`
      },
      {
        id: 'graphql-api',
        title: 'GraphQL API Design',
        description: 'Create a GraphQL API with proper schema design and resolver implementation.',
        points: 300,
        timeLimit: 2400,
        codeTemplate: `// TODO: Implement a GraphQL API for an e-commerce platform with:
// - Product catalog with categories
// - User accounts and authentication
// - Shopping cart functionality
// - Order processing

// File: schema.graphql
// Your schema definitions here

// File: resolvers.js
// Your resolver implementations here

// File: server.js
const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// Your code here`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java']
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization',
    description: 'Optimize database queries, design schemas, and improve performance.',
    icon: 'LayoutGrid',
    category: 'Database Management',
    phase: 'Phase 2',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'sql-optimization',
        title: 'SQL Query Optimization',
        description: 'Optimize complex SQL queries for better performance.',
        points: 300,
        timeLimit: 1800,
        codeTemplate: `-- TODO: Optimize the following SQL queries for an e-commerce database

-- Query 1: Find top customers by order total
SELECT c.customer_id, c.name, SUM(o.total_amount) as total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2023-01-01'
GROUP BY c.customer_id, c.name
ORDER BY total_spent DESC
LIMIT 10;

-- Query 2: Find products that are frequently purchased together
SELECT p1.product_id, p2.product_id, COUNT(*) as frequency
FROM order_items oi1
JOIN order_items oi2 ON oi1.order_id = oi2.order_id
JOIN products p1 ON oi1.product_id = p1.product_id
JOIN products p2 ON oi2.product_id = p2.product_id
WHERE p1.product_id < p2.product_id
GROUP BY p1.product_id, p2.product_id
ORDER BY frequency DESC
LIMIT 20;

-- Query 3: Calculate monthly sales by category
SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') as month,
    pc.category_name,
    SUM(oi.quantity * oi.price) as total_sales
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN product_categories pc ON p.category_id = pc.category_id
WHERE o.order_date BETWEEN '2022-01-01' AND '2023-12-31'
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m'), pc.category_name
ORDER BY month, total_sales DESC;`
      },
      {
        id: 'nosql-design',
        title: 'NoSQL Database Design',
        description: 'Design an efficient NoSQL database schema for a social media platform.',
        points: 250,
        timeLimit: 1800,
        codeTemplate: `// TODO: Design a MongoDB schema for a social media platform
// Requirements:
// - User profiles with followers/following
// - Posts with comments and likes
// - News feed generation
// - Direct messaging
// - Notifications

// User schema
const userSchema = {
  // Your code here
};

// Post schema
const postSchema = {
  // Your code here
};

// Comment schema
const commentSchema = {
  // Your code here
};

// Message schema
const messageSchema = {
  // Your code here
};

// Notification schema
const notificationSchema = {
  // Your code here
};

// Indexing strategy
const indexes = [
  // Your indexing strategy here
];

// Example queries
const queries = {
  // generateNewsFeed: {...},
  // getUserFollowers: {...},
  // getPostComments: {...},
};`
      }
    ],
    programmingLanguages: ['SQL', 'NoSQL', 'JavaScript', 'Python']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Create components and features for mobile applications using various frameworks.',
    icon: 'Code',
    category: 'Mobile Development',
    phase: 'Phase 1',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College'],
    challenges: [
      {
        id: 'flutter-ui',
        title: 'Flutter UI Challenge',
        description: 'Build a complex UI component with Flutter and Dart.',
        points: 200,
        timeLimit: 1800,
        codeTemplate: `// TODO: Implement an interactive contact card component in Flutter
// The component should include:
// - Profile picture with online status indicator
// - Contact info with name, title, phone, email
// - Expandable section for additional details
// - Action buttons (call, message, video)
// - Animations for state changes

import 'package:flutter/material.dart';

class ContactCard extends StatefulWidget {
  // Your code here
  
  @override
  _ContactCardState createState() => _ContactCardState();
}

class _ContactCardState extends State<ContactCard> with SingleTickerProviderStateMixin {
  // Your code here
  
  @override
  Widget build(BuildContext context) {
    // Your code here
    return Container();
  }
}`
      },
      {
        id: 'react-native-nav',
        title: 'React Native Navigation',
        description: 'Implement a complex navigation system in React Native.',
        points: 250,
        timeLimit: 2100,
        codeTemplate: `// TODO: Implement a navigation system for an e-commerce app with:
// - Bottom tab navigation (Home, Search, Cart, Profile)
// - Stack navigation for product details and checkout flow
// - Drawer navigation for categories and settings
// - Modal screens for quick actions
// - Deep linking support

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Your code here

export default function App() {
  return (
    <NavigationContainer>
      {/* Your navigation structure here */}
    </NavigationContainer>
  );
}`
      }
    ],
    programmingLanguages: ['Dart', 'JavaScript', 'TypeScript', 'Kotlin', 'Swift']
  },
  {
    id: 'devops-challenge',
    title: 'DevOps Automation',
    description: 'Create automation scripts and workflows for modern DevOps practices.',
    icon: 'Award',
    category: 'DevOps',
    phase: 'Phase 2',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'ci-pipeline',
        title: 'CI Pipeline Configuration',
        description: 'Create a comprehensive CI pipeline configuration for a web application.',
        points: 300,
        timeLimit: 1800,
        codeTemplate: `# TODO: Create a GitHub Actions workflow for a full-stack web application
# Requirements:
# - Run tests for frontend (React) and backend (Node.js)
# - Build and bundle the application
# - Run security scanning
# - Deploy to staging on PR merge to develop branch
# - Deploy to production on release tag
# - Send notifications on failure

name: CI/CD Pipeline

# Your workflow configuration here`
      },
      {
        id: 'kubernetes-config',
        title: 'Kubernetes Deployment',
        description: 'Design a Kubernetes deployment for a microservices architecture.',
        points: 350,
        timeLimit: 2400,
        codeTemplate: `# TODO: Create Kubernetes deployment files for a microservices application
# The application consists of:
# - Frontend service
# - Authentication service
# - Product catalog service
# - Order processing service
# - Database (PostgreSQL)
# - Redis cache
# - Message queue (RabbitMQ)

# Requirements:
# - Proper resource management
# - Horizontal scaling for appropriate services
# - Health checks and restart policies
# - ConfigMaps and Secrets management
# - Service discovery and load balancing
# - Persistent storage for databases
# - Ingress configuration

# frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  # Your configuration here

# Your additional K8s configuration files here`
      }
    ],
    programmingLanguages: ['YAML', 'Shell', 'HCL', 'Docker']
  },
  {
    id: 'read-code',
    title: 'read the Code',
    description: 'Read the program and guess the output.',
    icon: 'Code',
    category: 'Code Reading',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['1st Year College', '2nd Year College', '3rd Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: "undefined-behavior-01",
        title: "Undefined Behavior with Increment Operators.L1.c",
        description: "Test understanding of sequence points and undefined behavior in C.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 5;
          printf("%d", a++ * ++a);
          return 0;
      }`,
        solution: "Undefined Behavior",
        testCases: [{ input: "", expectedOutput: "Undefined Behavior" }]
      },
      
      {
        id: "sizeof-string-02",
        title: "Sizeof Operator on String Array.L1.c",
        description: "Checks knowledge of how the sizeof operator works on character arrays including the null terminator.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char str[] = "CS";
          printf("%d", sizeof(str));
          return 0;
      }`,
        solution: "3",
        testCases: [{ input: "", expectedOutput: "3" }]
      },
      
      {
        id: "assignment-in-if-03",
        title: "Assignment in If Condition.L1.c",
        description: "Tests understanding of assignment inside an if condition and its effect on control flow.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 10, b = 20;
          if (a = b - a)
              printf("True");
          else
              printf("False");
          return 0;
      }`,
        solution: "True",
        testCases: [{ input: "", expectedOutput: "True" }]
      },
      
      {
        id: "pointer-arithmetic-04",
        title: "Pointer Arithmetic with Arrays.L1.c",
        description: "Tests pointer arithmetic and array indexing equivalence in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int arr[] = {1, 2, 3, 4};
          printf("%d", *(arr + 2));
          return 0;
      }`,
        solution: "3",
        testCases: [{ input: "", expectedOutput: "3" }]
      },
      
      {
        id: "ascii-arithmetic-05",
        title: "Character Arithmetic and ASCII Values.L1.c",
        description: "Tests understanding of character arithmetic and ASCII value manipulation.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char c = 'A';
          printf("%d", c + 1);
          return 0;
      }`,
        solution: "66",
        testCases: [{ input: "", expectedOutput: "66" }]
      },
      
      {
        id: "while-increment-06",
        title: "While Loop with Post-Increment.L1.c",
        description: "Tests the behavior of a while loop using post-increment in its condition.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int i = 0;
          while (i++ < 3)
              printf("%d", i);
          return 0;
      }`,
        solution: "123",
        testCases: [{ input: "", expectedOutput: "123" }]
      },
      
      {
        id: "logical-and-increment-07",
        title: "Logical AND and Post-Increment.L1.c",
        description: "Tests the use of logical AND with post-increment and its effect on variable value.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 5;
          printf("%d", a == 5 && a++);
          printf("%d", a);
          return 0;
      }`,
        solution: "15",
        testCases: [{ input: "", expectedOutput: "15" }]
      },
      
      {
        id: "string-manipulation-08",
        title: "String Manipulation with Character Arithmetic.L1.c",
        description: "Tests understanding of string manipulation by modifying character values.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char s[] = "hello";
          s[0] = s[1] + 1;
          printf("%s", s);
          return 0;
      }`,
        solution: "ifllo",
        testCases: [{ input: "", expectedOutput: "ifllo" }]
      },
      
      {
        id: "undefined-behavior-09",
        title: "Undefined Behavior with Multiple Increments.L1.c",
        description: "Tests understanding of undefined behavior when incrementing a variable multiple times without a sequence point.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int x = 3;
          printf("%d", x++ + ++x);
          return 0;
      }`,
        solution: "Undefined Behavior",
        testCases: [{ input: "", expectedOutput: "Undefined Behavior" }]
      },
      
      {
        id: "assignment-in-if-10",
        title: "Assignment in If Statement.L1.c",
        description: "Tests understanding of assignment versus comparison in if statements.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 1;
          if (a = 0)
              printf("Zero");
          else
              printf("Non-zero");
          return 0;
      }`,
        solution: "Non-zero",
        testCases: [{ input: "", expectedOutput: "Non-zero" }]
      },
      
      {
        id: "pointer-arithmetic-11",
        title: "Pointer Arithmetic with String Literals.L1.c",
        description: "Tests understanding of pointer arithmetic with string literals.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char *s = "hello";
          printf("%c", *(s + 1));
          return 0;
      }`,
        solution: "e",
        testCases: [{ input: "", expectedOutput: "e" }]
      },
      
      {
        id: "integer-division-12",
        title: "Integer Division Assigned to Float.L1.c",
        description: "Tests understanding of integer division assigned to a float variable.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 5;
          int b = 2;
          float result = a / b;
          printf("%.1f", result);
          return 0;
      }`,
        solution: "2.0",
        testCases: [{ input: "", expectedOutput: "2.0" }]
      },
      
      {
        id: "increment-logic-13",
        title: "Order of Increments and Conditionals.L1.c",
        description: "Tests understanding of increment order and conditional branching.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 5;
          if (a++ == 5)
              printf("Match ");
          if (++a == 7)
              printf("Again");
          return 0;
      }`,
        solution: "Match Again",
        testCases: [{ input: "", expectedOutput: "Match Again" }]
      },
      
      {
        id: "string-array-null-14",
        title: "String Array with Embedded Null Character.L1.c",
        description: "Tests understanding of how null characters terminate strings in C arrays.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char arr[] = {'C', 'S', '\0', 'X'};
          printf("%s", arr);
          return 0;
      }`,
        solution: "CS",
        testCases: [{ input: "", expectedOutput: "CS" }]
      },
      
      {
        id: "do-while-decrement-15",
        title: "Do-While Loop with Post-Decrement.L1.c",
        description: "Tests the behavior of a do-while loop with post-decrement in its condition.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 0;
          do {
              printf("%d", a);
          } while (a-- > 0);
          return 0;
      }`,
        solution: "10",
        testCases: [{ input: "", expectedOutput: "10" }]
      },
      
      {
        id: "reverse-index-array-16",
        title: "Reverse Indexing in Arrays.L1.c",
        description: "Tests knowledge that C allows both a[n] and n[a] for array access.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a[] = {10, 20, 30};
          printf("%d", 2[a]);
          return 0;
      }`,
        solution: "30",
        testCases: [{ input: "", expectedOutput: "30" }]
      },
      
      {
        id: "null-terminator-value-17",
        title: "Null Terminator Value in Character Arrays.L1.c",
        description: "Tests understanding that the null terminator in a character array is zero.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char s[5] = "hi";
          printf("%d", s[2]);
          return 0;
      }`,
        solution: "0",
        testCases: [{ input: "", expectedOutput: "0" }]
      },
      
      {
        id: "undefined-behavior-18",
        title: "Undefined Behavior with Multiple Post-Increments.L1.c",
        description: "Tests understanding of undefined behavior with multiple unsequenced modifications.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int i = 3;
          printf("%d", i++ + i++);
          return 0;
      }`,
        solution: "Undefined Behavior",
        testCases: [{ input: "", expectedOutput: "Undefined Behavior" }]
      },
      
      {
        id: "char-overflow-19",
        title: "Signed Char Overflow.L1.c",
        description: "Tests understanding of overflow behavior for signed char variables.",
        points: 200,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char a = 127;
          a += 1;
          printf("%d", a);
          return 0;
      }`,
        solution: "-128",
        testCases: [{ input: "", expectedOutput: "-128" }]
      },
      
      {
        id: "plusplus-parsing-20",
        title: "Parsing Ambiguity with Post-Increment.L1.c",
        description: "Tests understanding of how C parses ambiguous expressions with post-increment and addition.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a = 1;
          int b = 2;
          int c = a+++b;
          printf("%d", c);
          return 0;
      }`,
        solution: "3",
        testCases: [{ input: "", expectedOutput: "3" }]
      },
      {
        "id": "read-simple-addition-l1",
        "title": "Simple Addition.L1.java",
        "description": "What does this print?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int a = 5;
        int b = 3;
        System.out.println(a + b);
      }
    }"`,
        "solution": "8",
        "testCases": [{ "input": "", "expectedOutput": "8" }]
      },
      {
        "id": "read-string-concat-l1",
        "title": "String Concatenation.L1.java",
        "description": "What gets printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "World";
        System.out.println(s1 + " " + s2);
      }
    }"`,
        "solution": "Hello World",
        "testCases": [{ "input": "", "expectedOutput": "Hello World" }]
      },
      {
        "id": "read-boolean-evaluation-l1",
        "title": "Boolean Evaluation.L1.java",
        "description": "What will be printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        boolean a = true;
        boolean b = false;
        System.out.println(a && b);
      }
    }"`,
        "solution": "false",
        "testCases": [{ "input": "", "expectedOutput": "false" }]
      },
      {
        "id": "read-array-access-l1",
        "title": "Array Indexing.L1.java",
        "description": "What does this print?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int[] numbers = {10, 20, 30};
        System.out.println(numbers[1]);
      }
    }"`,
        "solution": "20",
        "testCases": [{ "input": "", "expectedOutput": "20" }]
      },
      {
        "id": "read-if-else-l1",
        "title": "If-Else Condition.L1.java",
        "description": "What gets printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int x = 7;
        if (x > 5) {
          System.out.println("Big");
        } else {
          System.out.println("Small");
        }
      }
    }"`,
        "solution": "Big",
        "testCases": [{ "input": "", "expectedOutput": "Big" }]
      },
      {
        "id": "read-loop-counting-l1",
        "title": "Simple Loop Counting.L1.java",
        "description": "What does this print?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
          System.out.println(i);
        }
      }
    }"`,
        "solution": "0\n1\n2",
        "testCases": [{ "input": "", "expectedOutput": "0\n1\n2" }]
      },
      {
        "id": "read-method-call-l1",
        "title": "Method Call Execution.L1.java",
        "description": "What will be printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void greet() {
        System.out.println("Hello, Java!");
      }
    
      public static void main(String[] args) {
        greet();
      }
    }"`,
        "solution": "Hello, Java!",
        "testCases": [{ "input": "", "expectedOutput": "Hello, Java!" }]
      },
      {
        "id": "read-array-length-l1",
        "title": "Array Length.L1.java",
        "description": "What does this output?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(arr.length);
      }
    }"`,
        "solution": "5",
        "testCases": [{ "input": "", "expectedOutput": "5" }]
      },
      {
        "id": "read-switch-case-l1",
        "title": "Switch Case Evaluation.L1.java",
        "description": "What will be printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int num = 2;
        switch (num) {
          case 1: System.out.println("One"); break;
          case 2: System.out.println("Two"); break;
          default: System.out.println("Other"); break;
        }
      }
    }"`,
        "solution": "Two",
        "testCases": [{ "input": "", "expectedOutput": "Two" }]
      },
      {
        "id": "read-string-methods-l1",
        "title": "String Method Execution.L1.java",
        "description": "What is the output?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        String text = "Hello";
        System.out.println(text.toUpperCase());
      }
    }"`,
        "solution": "HELLO",
        "testCases": [{ "input": "", "expectedOutput": "HELLO" }]
      },

      {
        "id": "read-scope-chain-01",
        "title": "Scope Chain.L1.js",
        "description": "What gets printed?",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"let a = 1;
    function f() {
      let a = 2;
      function g() {
        console.log(a);
      }
      g();
    }
    f();"`,
        "solution": "2",
        "testCases": [{ "input": "", "expectedOutput": "2" }]
      },
      {
        "id": "read-args-mismatch-01",
        "title": "Missing Function Arguments.L1.js",
        "description": "What is the output?",
        "points": 150,
        "timeLimit": 150,
        "codeTemplate": `"function add(a, b) {
      return a + b;
    }
    console.log(add(5));"`,
        "solution": "NaN",
        "testCases": [{ "input": "", "expectedOutput": "NaN" }]
      },
      {
        "id": "read-array-hole-01",
        "title": "Sparse Arrays.L1.js",
        "description": "What does this array contain?",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"const arr = [1,,3];
    console.log(arr.length);"`,
        "solution": "3",
        "testCases": [{ "input": "", "expectedOutput": "3" }]
      },
      {
        "id": "read-obj-identity-01",
        "title": "Object Identity.L1.js",
        "description": "What is the output?",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"const x = {};
    const y = {};
    console.log(x === y);"`,
        "solution": "false",
        "testCases": [{ "input": "", "expectedOutput": "false" }]
      },
      {
        "id": "read-falsy-01",
        "title": "Falsy Comparison.L1.js",
        "description": "What is printed?",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"console.log(false == 0);
    console.log(false === 0);"`,
        "solution": "true\nfalse",
        "testCases": [{ "input": "", "expectedOutput": "true\nfalse" }]
      },
      {
        "id": "read-scope-var-l1",
        "title": "Function Scope with var.L1.js",
        "description": "What will be printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function test() {
      if (true) {
        var x = 5;
      }
      console.log(x);
    }
    test();"`,
        "solution": "5",
        "testCases": [{ "input": "", "expectedOutput": "5" }]
      },
      {
        "id": "read-string-plus-number-l1",
        "title": "String and Number Addition.L1.js",
        "description": "What does this log?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"console.log('2' + 1);"`,
        "solution": "21",
        "testCases": [{ "input": "", "expectedOutput": "21" }]
      },
      {
        "id": "read-unary-plus-l1",
        "title": "Unary Plus Operator.L1.js",
        "description": "What is the result of this expression?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"console.log(+'42');"`,
        "solution": "42",
        "testCases": [{ "input": "", "expectedOutput": "42" }]
      },
      {
        "id": "read-logical-or-default-l1",
        "title": "Logical OR Default.L1.js",
        "description": "What is the output of this expression?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"const user = null;
    const name = user || 'Guest';
    console.log(name);"`,
        "solution": "Guest",
        "testCases": [{ "input": "", "expectedOutput": "Guest" }]
      },
      {
        "id": "read-simple-for-loop-l1",
        "title": "Basic For Loop.L1.js",
        "description": "What does this code print?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"for (let i = 0; i < 2; i++) {
      console.log(i);
    }"`,
        "solution": "0\n1",
        "testCases": [{ "input": "", "expectedOutput": "0\n1" }]
      },
      {
        "id": "read-typeof-null-l1",
        "title": "typeof null Confusion.L1.js",
        "description": "What is the type of null?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"console.log(typeof null);"`,
        "solution": "object",
        "testCases": [{ "input": "", "expectedOutput": "object" }]
      },
      {
        "id": "read-array-length-l1",
        "title": "Array Length Surprise.L1.js",
        "description": "What will be logged?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"const arr = [1,,3];
    console.log(arr.length);"`,
        "solution": "3",
        "testCases": [{ "input": "", "expectedOutput": "3" }]
      },
      {
        "id": "read-double-equal-l1",
        "title": "Loose Equality.L1.js",
        "description": "What will be logged?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"console.log(null == undefined);
    console.log(null === undefined);"`,
        "solution": "true\nfalse",
        "testCases": [{ "input": "", "expectedOutput": "true\nfalse" }]
      },
      {
        "id": "read-undefined-param-l1",
        "title": "Missing Function Argument.L1.js",
        "description": "What is the output of this function call?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"function add(a, b) {
      return a + b;
    }
    console.log(add(3));"`,
        "solution": "NaN",
        "testCases": [{ "input": "", "expectedOutput": "NaN" }]
      },
      {
        "id": "read-object-equality-l1",
        "title": "Object Comparison.L1.js",
        "description": "What gets printed?",
        "points": 100,
        "timeLimit": 120,
        "codeTemplate": `"const a = {};
    const b = {};
    console.log(a === b);"`,
        "solution": "false",
        "testCases": [{ "input": "", "expectedOutput": "false" }]
      },
      {
        id: "c-output-function-01",
        title: "C Output Function.L2.c",
        description: "Test knowledge of the standard output function in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of the following is a C language function to print output?
      // A) printf()
      // B) print()
      // C) output()`,
        solution: "A) printf()",
        testCases: [{ input: "", expectedOutput: "A) printf()" }]
      },
      
      {
        id: "html-hyperlink-tag-02",
        title: "HTML Hyperlink Tag.L2.c",
        description: "Test knowledge of the HTML tag for creating hyperlinks.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of these is a basic HTML tag to create a hyperlink?
      // A) <a>
      // B) <link>
      // C) <button>`,
        solution: "A) <a>",
        testCases: [{ input: "", expectedOutput: "A) <a>" }]
      },
      
      {
        id: "c-for-loop-purpose-03",
        title: "Purpose of For Loop in C.L2.c",
        description: "Test understanding of the purpose of a for loop in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What is the main purpose of a for loop in C?
      // A) To repeat a set of instructions multiple times
      // B) To get user input
      // C) To declare variables`,
        solution: "A) To repeat a set of instructions multiple times",
        testCases: [{ input: "", expectedOutput: "A) To repeat a set of instructions multiple times" }]
      },
      
      {
        id: "html-main-heading-tag-04",
        title: "HTML Main Heading Tag.L2.c",
        description: "Test knowledge of the HTML tag for the main heading.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// In HTML, which tag is used to define the main heading?
      // A) <title>
      // B) <h1>
      // C) <header>`,
        solution: "B) <h1>",
        testCases: [{ input: "", expectedOutput: "B) <h1>" }]
      },
      
      {
        id: "c-variable-syntax-05",
        title: "C Variable Declaration Syntax.L2.c",
        description: "Test correct syntax for declaring a variable in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of the following is the correct C syntax to define a variable?
      // A) int x=5;
      // B) x int =5;
      // C) 5=x int;`,
        solution: "A) int x=5;",
        testCases: [{ input: "", expectedOutput: "A) int x=5;" }]
      },
      
      {
        id: "c-hello-world-06",
        title: "C Hello World Output.L2.c",
        description: "Test knowledge of the output of a basic printf statement in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What does the following C code do? printf("Hello World");
      // A) Prints "Hello World" on the screen
      // B) Declares a variable
      // C) Defines a function`,
        solution: 'A) Prints "Hello World" on the screen',
        testCases: [{ input: "", expectedOutput: 'A) Prints "Hello World" on the screen' }]
      },
      
      {
        id: "html-image-tag-07",
        title: "HTML Image Tag.L2.c",
        description: "Test knowledge of the HTML tag for embedding images.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// In HTML, which tag is used to insert an image?
      // A) <img>
      // B) <image>
      // C) <src>`,
        solution: "A) <img>",
        testCases: [{ input: "", expectedOutput: "A) <img>" }]
      },
      
      {
        id: "c-comments-08",
        title: "C Comment Syntax.L2.c",
        description: "Test knowledge of valid comment syntax in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What is the correct way to write a comment in C?
      // A) // This is a comment
      // B) /* This is a comment */
      // C) Both A and B`,
        solution: "C) Both A and B",
        testCases: [{ input: "", expectedOutput: "C) Both A and B" }]
      },
      
      {
        id: "html-list-item-tag-09",
        title: "HTML List Item Tag.L2.c",
        description: "Test knowledge of the HTML tag for list items.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of these HTML tags is used to define a list item?
      // A) <item>
      // B) <li>
      // C) <list>`,
        solution: "B) <li>",
        testCases: [{ input: "", expectedOutput: "B) <li>" }]
      },
      
      {
        id: "c-format-specifier-10",
        title: "C %d Format Specifier.L2.c",
        description: "Test understanding of the %d format specifier in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// In C, what does the %d format specifier do?
      // A) It prints a string
      // B) It prints an integer
      // C) It prints a floating-point number`,
        solution: "B) It prints an integer",
        testCases: [{ input: "", expectedOutput: "B) It prints an integer" }]
      },
      
      {
        id: "html-title-tag-11",
        title: "HTML Title Tag Function.L2.c",
        description: "Test understanding of the function of the <title> tag in HTML.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What is the function of the <title> tag in HTML?
      // A) Defines the title of the webpage
      // B) Creates a link
      // C) Inserts an image`,
        solution: "A) Defines the title of the webpage",
        testCases: [{ input: "", expectedOutput: "A) Defines the title of the webpage" }]
      },
      
      {
        id: "c-program-start-12",
        title: "C Program Start Syntax.L2.c",
        description: "Test knowledge of how a C program typically starts.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of these is the correct way to start a C program?
      // A) #include <stdio.h>
      // B) int main()
      // C) Both A and B`,
        solution: "C) Both A and B",
        testCases: [{ input: "", expectedOutput: "C) Both A and B" }]
      },
      
      {
        id: "html-paragraph-tag-13",
        title: "HTML Paragraph Tag.L2.c",
        description: "Test knowledge of the HTML tag for paragraphs.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which HTML tag is used to create a paragraph?
      // A) <p>
      // B) <para>
      // C) <paragraph>`,
        solution: "A) <p>",
        testCases: [{ input: "", expectedOutput: "A) <p>" }]
      },
      
      {
        id: "c-integer-division-output-14",
        title: "C Integer Division Output.L2.c",
        description: "Test understanding of integer division output in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What is the output of printf("%d", 10 / 3); in C?
      // A) 3
      // B) 3.33
      // C) 10`,
        solution: "A) 3",
        testCases: [{ input: "", expectedOutput: "A) 3" }]
      },
      
      {
        id: "html-hyperlink-definition-15",
        title: "HTML Hyperlink Definition Tag.L2.c",
        description: "Test knowledge of the HTML tag used to define a hyperlink.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of these is used to define a hyperlink in HTML?
      // A) <a>
      // B) <link>
      // C) <href>`,
        solution: "A) <a>",
        testCases: [{ input: "", expectedOutput: "A) <a>" }]
      },
      {
        id: "c-scanf-purpose-16",
        title: "Purpose of scanf() in C.L2.c",
        description: "Test understanding of the use of scanf() in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What is the purpose of the scanf() function in C?
      // A) To output data
      // B) To read input from the user
      // C) To declare variables`,
        solution: "B) To read input from the user",
        testCases: [{ input: "", expectedOutput: "B) To read input from the user" }]
      },
      {
        id: "html-h2-tag-17",
        title: "HTML <h2> Tag Purpose.L2.c",
        description: "Test knowledge of the <h2> tag in HTML.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What does the <h2> tag in HTML do?
      // A) Defines a second-level heading
      // B) Defines a hyperlink
      // C) Defines a footer`,
        solution: "A) Defines a second-level heading",
        testCases: [{ input: "", expectedOutput: "A) Defines a second-level heading" }]
      },
      {
        id: "c-basic-data-type-18",
        title: "Basic Data Type in C.L2.c",
        description: "Test knowledge of basic data types in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which of these is a basic data type in C?
      // A) int
      // B) list
      // C) string`,
        solution: "A) int",
        testCases: [{ input: "", expectedOutput: "A) int" }]
      },
      
      {
        id: "c-return-0-purpose-19",
        title: "Purpose of return 0 in C.L2.c",
        description: "Test understanding of the purpose of return 0 in C.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// What is the purpose of the return 0; statement in C?
      // A) To end the program
      // B) To start the program
      // C) To print output`,
        solution: "A) To end the program",
        testCases: [{ input: "", expectedOutput: "A) To end the program" }]
      },
      
      {
        id: "html-largest-heading-20",
        title: "HTML Largest Heading Tag.L2.c",
        description: "Test knowledge of the HTML tag for the largest heading.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `// Which tag is used to define the largest heading in HTML?
      // A) <h1>
      // B) <h6>
      // C) <title>`,
        solution: "A) <h1>",
        testCases: [{ input: "", expectedOutput: "A) <h1>" }]
      },
      {
        "id": "read-recursive-factorial-l2",
        "title": "Recursive Factorial.L2.java",
        "description": "What does this output?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static int factorial(int n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
      }
    
      public static void main(String[] args) {
        System.out.println(factorial(4));
      }
    }"`,
        "solution": "24",
        "testCases": [{ "input": "", "expectedOutput": "24" }]
      },
      {
        "id": "read-array-reversal-l2",
        "title": "Reverse Array.L2.java",
        "description": "What gets printed?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"import java.util.Arrays;
    public class Main {
      public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        System.out.println(Arrays.toString(arr));
      }
    }"`,
        "solution": "[4, 3, 2, 1]",
        "testCases": [{ "input": "", "expectedOutput": "[4, 3, 2, 1]" }]
      },
      {
        "id": "read-fibonacci-iteration-l2",
        "title": "Fibonacci Iteration.L2.java",
        "description": "What will be printed?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int n = 6;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
          int temp = a + b;
          a = b;
          b = temp;
        }
        System.out.println(b);
      }
    }"`,
        "solution": "8",
        "testCases": [{ "input": "", "expectedOutput": "8" }]
      },
      {
        "id": "read-switch-missing-break-l2",
        "title": "Switch Without Break.L2.java",
        "description": "What is the output?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int num = 2;
        switch (num) {
          case 1: System.out.println("One");
          case 2: System.out.println("Two");
          case 3: System.out.println("Three");
        }
      }
    }"`,
        "solution": "Two\nThree",
        "testCases": [{ "input": "", "expectedOutput": "Two\nThree" }]
      },
      {
        "id": "read-missing-return-l2",
        "title": "Missing Return.L2.java",
        "description": "What does this print?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static String checkNumber(int n) {
        if (n > 0) return "Positive";
        if (n < 0) return "Negative";
      }
    
      public static void main(String[] args) {
        System.out.println(checkNumber(0));
      }
    }"`,
        "solution": "Compilation error: missing return statement",
        "testCases": [{ "input": "", "expectedOutput": "Compilation error: missing return statement" }]
      },
      {
        "id": "read-method-overloading-l2",
        "title": "Method Overloading Behavior.L2.java",
        "description": "What does this print?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void print(int num) {
        System.out.println("Integer: " + num);
      }
    
      public static void print(double num) {
        System.out.println("Double: " + num);
      }
    
      public static void main(String[] args) {
        print(5);
        print(5.0);
      }
    }"`,
        "solution": "Integer: 5\nDouble: 5.0",
        "testCases": [{ "input": "", "expectedOutput": "Integer: 5\nDouble: 5.0" }]
      },
      {
        "id": "read-string-immutability-l2",
        "title": "String Immutability.L2.java",
        "description": "What is printed?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        String text = "Hello";
        text.toUpperCase();
        System.out.println(text);
      }
    }"`,
        "solution": "Hello",
        "testCases": [{ "input": "", "expectedOutput": "Hello" }]
      },
      {
        "id": "read-for-each-loop-l2",
        "title": "For-Each Loop Behavior.L2.java",
        "description": "What does this output?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"import java.util.Arrays;
    public class Main {
      public static void main(String[] args) {
        int[] numbers = {3, 6, 9};
        for (int num : numbers) {
          num *= 2;
        }
        System.out.println(Arrays.toString(numbers));
      }
    }"`,
        "solution": "[3, 6, 9]",
        "testCases": [{ "input": "", "expectedOutput": "[3, 6, 9]" }]
      },
      {
        "id": "read-object-reference-l2",
        "title": "Object Reference Change.L2.java",
        "description": "What gets printed?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"class Person {
      String name;
      Person(String name) {
        this.name = name;
      }
    }
    
    public class Main {
      public static void main(String[] args) {
        Person p1 = new Person("Alice");
        Person p2 = p1;
        p2.name = "Bob";
        System.out.println(p1.name);
      }
    }"`,
        "solution": "Bob",
        "testCases": [{ "input": "", "expectedOutput": "Bob" }]
      },
      {
        "id": "read-array-out-of-bounds-l2",
        "title": "Array Index Out of Bounds.L2.java",
        "description": "What happens?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        System.out.println(arr[3]);
      }
    }"`,
        "solution": "Exception: ArrayIndexOutOfBoundsException",
        "testCases": [{ "input": "", "expectedOutput": "Exception: ArrayIndexOutOfBoundsException" }]
      },

      {
        "id": "read-object-reference-l2",
        "title": "Object Reference Equality.L2.js",
        "description": "What is the result of this comparison?",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"const obj1 = {};
    const obj2 = {};
    console.log(obj1 === obj2);"`,
        "solution": "false",
        "testCases": [{ "input": "", "expectedOutput": "false" }]
      },
      {
        "id": "read-nullish-coalescing-l2",
        "title": "Nullish Coalescing Operator.L2.js",
        "description": "What will this expression print?",
        "points": 150,
        "timeLimit": 180,
        "codeTemplate": `"let name = null;
    console.log(name ?? 'Anonymous');"`,
        "solution": "Anonymous",
        "testCases": [{ "input": "", "expectedOutput": "Anonymous" }]
      },
      {
        id: "array-pointer-arithmetic-01",
        title: "Pointer Arithmetic and Array Update.L3.c",
        description: "Tests pointer arithmetic and updating array elements via pointers.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int arr[5] = {1, 2, 3, 4, 5};
          int *p = arr;
          *(p + 2) = *(p + 2) + *(p + 1);
          printf("%d", arr[2]);
          return 0;
      }`,
        solution: "5",
        testCases: [{ input: "", expectedOutput: "5" }]
      },
      
      {
        id: "linked-list-pointer-02",
        title: "Accessing Next Node in Linked List.L3.c",
        description: "Tests struct pointer dereferencing in a linked list.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      typedef struct Node {
          int data;
          struct Node *next;
      } Node;
      
      int main() {
          Node a = {10, NULL};
          Node b = {20, &a};
          Node *p = &b;
          printf("%d", p->next->data);
          return 0;
      }`,
        solution: "10",
        testCases: [{ input: "", expectedOutput: "10" }]
      },
      
      {
        id: "queue-print-03",
        title: "Printing a Subsection of a Queue.L3.c",
        description: "Tests printing a range of elements from a queue using indices.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      void printQueue(int *q, int front, int rear) {
          while (front <= rear) {
              printf("%d ", q[front++]);
          }
      }
      
      int main() {
          int q[] = {5, 10, 15, 20};
          printQueue(q, 1, 2);
          return 0;
      }`,
        solution: "10 15",
        testCases: [{ input: "", expectedOutput: "10 15" }]
      },
      
      {
        id: "pointer-array-of-strings-04",
        title: "Array of String Pointers and Pointer Arithmetic.L3.c",
        description: "Tests pointer arithmetic with arrays of string literals.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          char *hash[3] = {"A", "B", "C"};
          printf("%c", ((hash + 1)[0][0]));
          return 0;
      }`,
        solution: "B",
        testCases: [{ input: "", expectedOutput: "B" }]
      },
      
      {
        id: "binary-tree-array-05",
        title: "Binary Tree as Array Indexing.L3.c",
        description: "Tests binary tree representation using arrays and index calculations.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int tree[7] = {0, 1, 2, 3, 4, 5, 6}; // binary tree as array
          printf("%d", tree[2 * 2 + 1]);
          return 0;
      }`,
        solution: "5",
        testCases: [{ input: "", expectedOutput: "5" }]
      },
      
      {
        id: "stack-top-06",
        title: "Stack Simulation with Array and Top Index.L3.c",
        description: "Tests stack operations using an array and a top pointer.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int stack[3], top = -1;
          stack[++top] = 5;
          stack[++top] = 10;
          --top;
          printf("%d", stack[top]);
          return 0;
      }`,
        solution: "5",
        testCases: [{ input: "", expectedOutput: "5" }]
      },
      
      {
        id: "pointer-arithmetic-07",
        title: "Pointer Arithmetic with Arrays.L3.c",
        description: "Tests pointer arithmetic for accessing elements in an array.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int arr[] = {1, 2, 3, 4};
          int *p = arr + 2;
          printf("%d", *(p - 1));
          return 0;
      }`,
        solution: "2",
        testCases: [{ input: "", expectedOutput: "2" }]
      },
      
      {
        id: "linked-list-multi-next-08",
        title: "Linked List Multi-Next Dereference.L3.c",
        description: "Tests dereferencing multiple next pointers in a linked list.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      struct Node {
          int data;
          struct Node *next;
      };
      
      int main() {
          struct Node a = {1, NULL};
          struct Node b = {2, &a};
          struct Node c = {3, &b};
          printf("%d", c.next->next->data);
          return 0;
      }`,
        solution: "1",
        testCases: [{ input: "", expectedOutput: "1" }]
      },
      
      {
        id: "pointer-arithmetic-update-09",
        title: "Pointer Arithmetic and Array Update.L3.c",
        description: "Tests updating array elements via pointer arithmetic.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int arr[] = {10, 20, 30, 40};
          int *p = arr;
          *(p + 1) += 5;
          printf("%d", arr[1]);
          return 0;
      }`,
        solution: "25",
        testCases: [{ input: "", expectedOutput: "25" }]
      },
      
      {
        id: "queue-range-print-10",
        title: "Queue Printing with Front and Rear Indices.L3.c",
        description: "Tests printing a range of elements from a queue using front and rear indices.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int queue[5] = {10, 20, 30, 40, 50};
          int front = 2;
          int rear = 4;
          while (front <= rear)
              printf("%d ", queue[front++]);
          return 0;
      }`,
        solution: "30 40 50",
        testCases: [{ input: "", expectedOutput: "30 40 50" }]
      },
      
      {
        id: "pointer-offset-11",
        title: "Pointer Offset in Array.L3.c",
        description: "Tests pointer offset arithmetic to access array elements.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int arr[] = {1, 2, 3, 4, 5};
          int *p = &arr[1];
          printf("%d", *(p + 2));
          return 0;
      }`,
        solution: "4",
        testCases: [{ input: "", expectedOutput: "4" }]
      },
      
      {
        id: "linked-list-count-12",
        title: "Counting Nodes in a Linked List.L3.c",
        description: "Tests traversing a linked list and counting its nodes.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      struct Node {
          int val;
          struct Node *next;
      };
      
      int main() {
          struct Node a = {3, NULL};
          struct Node b = {2, &a};
          struct Node c = {1, &b};
          struct Node *p = &c;
          int count = 0;
          while (p) {
              count++;
              p = p->next;
          }
          printf("%d", count);
          return 0;
      }`,
        solution: "3",
        testCases: [{ input: "", expectedOutput: "3" }]
      },
      
      {
        id: "calloc-zero-init-13",
        title: "calloc and Zero Initialization.L3.c",
        description: "Tests calloc's zero-initialization for dynamically allocated arrays.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      #include <stdlib.h>
      
      int main() {
          int *arr = calloc(3, sizeof(int));
          arr[0] = 4;
          arr[2] = 8;
          printf("%d", *(arr + 1));
          return 0;
      }`,
        solution: "0",
        testCases: [{ input: "", expectedOutput: "0" }]
      },
      
      {
        id: "adjacency-matrix-14",
        title: "Adjacency Matrix Access.L3.c",
        description: "Tests accessing elements in a 2D adjacency matrix.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int adj[2][2] = {{0, 1}, {1, 0}};
          printf("%d", adj[1][0]);
          return 0;
      }`,
        solution: "1",
        testCases: [{ input: "", expectedOutput: "1" }]
      },
      
      {
        id: "array-index-indirection-15",
        title: "Array Index Indirection.L3.c",
        description: "Tests using the value of one array element as an index for another.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int a[5] = {10, 20, 30, 40, 50};
          printf("%d", *(a + *(a + 1) / 10));
          return 0;
      }`,
        solution: "30",
        testCases: [{ input: "", expectedOutput: "30" }]
      },
      {
        id: "malloc-use-after-free-16",
        title: "Use After Free with malloc.L3.c",
        description: "Tests understanding of undefined behavior when accessing freed memory.",
        points: 200,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      #include <stdlib.h>
      
      int main() {
          int *a = malloc(sizeof(int) * 3);
          a[0] = 1;
          a[1] = 2;
          a[2] = 3;
          free(a);
          printf("%d", *(a + 1));
          return 0;
      }`,
        solution: "Undefined behavior",
        testCases: [{ input: "", expectedOutput: "Undefined behavior" }]
      },
      
      {
        id: "adjacency-matrix-graph-17",
        title: "Accessing Graph Adjacency Matrix.L3.c",
        description: "Tests accessing values in a 2D adjacency matrix representing a graph.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int graph[3][3] = {
              {0, 1, 0},
              {1, 0, 1},
              {0, 1, 0}
          };
          printf("%d", graph[1][2]);
          return 0;
      }`,
        solution: "1",
        testCases: [{ input: "", expectedOutput: "1" }]
      },
      
      {
        id: "pointer-to-pointer-18",
        title: "Pointer to Pointer Arithmetic.L3.c",
        description: "Tests pointer to pointer dereferencing and arithmetic.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int x = 5, *p = &x, **pp = &p;
          **pp += 2;
          printf("%d", x);
          return 0;
      }`,
        solution: "7",
        testCases: [{ input: "", expectedOutput: "7" }]
      },
      
      {
        id: "array-initialization-19",
        title: "Array Initialization and Access.L3.c",
        description: "Tests array initialization and direct access.",
        points: 100,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int h[10] = {0};
          h[3] = 42;
          printf("%d", h[3]);
          return 0;
      }`,
        solution: "42",
        testCases: [{ input: "", expectedOutput: "42" }]
      }, 
      {
        id: "matrix-pointer-arithmetic-20",
        title: "Matrix Pointer Arithmetic.L3.c",
        description: "Tests pointer arithmetic for accessing elements in a 2D matrix.",
        points: 150,
        timeLimit: 180,
        codeTemplate: `#include <stdio.h>
      
      int main() {
          int matrix[2][2] = {{1, 2}, {3, 4}};
          int *p = &matrix[0][0];
          printf("%d", *(p + 3));
          return 0;
      }`,
        solution: "4",
        testCases: [{ input: "", expectedOutput: "4" }]
      },
      {
        "id": "read-multithreading-sync-l3",
        "title": "Multithreading Synchronization.L3.java",
        "description": "What does this print?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class Counter {
      private int count = 0;
      public synchronized void increment() {
        count++;
      }
      public int getCount() {
        return count;
      }
    }
    
    public class Main {
      public static void main(String[] args) {
        Counter counter = new Counter();
        Thread t1 = new Thread(() -> {
          for (int i = 0; i < 1000; i++) counter.increment();
        });
        Thread t2 = new Thread(() -> {
          for (int i = 0; i < 1000; i++) counter.increment();
        });
    
        t1.start();
        t2.start();
    
        try {
          t1.join();
          t2.join();
        } catch (InterruptedException e) {}
    
        System.out.println(counter.getCount());
      }
    }"`,
        "solution": "2000",
        "testCases": [{ "input": "", "expectedOutput": "2000" }]
      },
      {
        "id": "read-deadlock-l3",
        "title": "Deadlock Scenario.L3.java",
        "description": "What happens?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class Resource {
    }
    
    public class Main {
      public static void main(String[] args) {
        Resource r1 = new Resource();
        Resource r2 = new Resource();
    
        Thread t1 = new Thread(() -> {
          synchronized (r1) {
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            synchronized (r2) {
              System.out.println("Thread 1 completed");
            }
          }
        });
    
        Thread t2 = new Thread(() -> {
          synchronized (r2) {
            synchronized (r1) {
              System.out.println("Thread 2 completed");
            }
          }
        });
    
        t1.start();
        t2.start();
      }
    }"`,
        "solution": "Deadlock occurs, threads get stuck.",
        "testCases": [{ "input": "", "expectedOutput": "Deadlock occurs, threads get stuck." }]
      },
      {
        "id": "read-custom-hashmap-collision-l3",
        "title": "HashMap Collision Handling.L3.java",
        "description": "What will be printed?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.HashMap;
    public class Main {
      public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(1, "A");
        map.put(1, "B");
        System.out.println(map.get(1));
      }
    }"`,
        "solution": "B",
        "testCases": [{ "input": "", "expectedOutput": "B" }]
      },
      {
        "id": "read-lambda-expression-l3",
        "title": "Lambda Expression Behavior.L3.java",
        "description": "What does this print?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.function.Function;
    public class Main {
      public static void main(String[] args) {
        Function<Integer, Integer> square = x -> x * x;
        System.out.println(square.apply(5));
      }
    }"`,
        "solution": "25",
        "testCases": [{ "input": "", "expectedOutput": "25" }]
      },
      {
        "id": "read-class-initialization-order-l3",
        "title": "Class Initialization Order.L3.java",
        "description": "What is the output?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class Parent {
      Parent() { System.out.println("Parent Constructor"); }
    }
    
    class Child extends Parent {
      Child() { System.out.println("Child Constructor"); }
    }
    
    public class Main {
      public static void main(String[] args) {
        new Child();
      }
    }"`,
        "solution": "Parent Constructor\nChild Constructor",
        "testCases": [{ "input": "", "expectedOutput": "Parent Constructor\nChild Constructor" }]
      },
      {
        "id": "read-custom-iterator-l3",
        "title": "Custom Iterator Behavior.L3.java",
        "description": "What will be printed?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.Iterator;
    import java.util.List;
    import java.util.Arrays;
    
    public class CustomIterator implements Iterator<Integer> {
      private List<Integer> list;
      private int index = 0;
    
      public CustomIterator(List<Integer> list) {
        this.list = list;
      }
    
      @Override
      public boolean hasNext() {
        return index < list.size();
      }
    
      @Override
      public Integer next() {
        return list.get(index++);
      }
    
      public static void main(String[] args) {
        CustomIterator it = new CustomIterator(Arrays.asList(10, 20, 30));
        while (it.hasNext()) {
          System.out.print(it.next() + " ");
        }
      }
    }"`,
        "solution": "10 20 30",
        "testCases": [{ "input": "", "expectedOutput": "10 20 30" }]
      },
      {
        "id": "read-custom-exception-l3",
        "title": "Custom Exception Handling.L3.java",
        "description": "What happens when this runs?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class CustomException extends Exception {
      public CustomException(String message) {
        super(message);
      }
    }
    
    public class Main {
      public static void check(int x) throws CustomException {
        if (x < 0) throw new CustomException("Negative value not allowed");
      }
    
      public static void main(String[] args) {
        try {
          check(-1);
        } catch (CustomException e) {
          System.out.println(e.getMessage());
        }
      }
    }"`,
        "solution": "Negative value not allowed",
        "testCases": [{ "input": "", "expectedOutput": "Negative value not allowed" }]
      },
      {
        "id": "read-thread-interruption-l3",
        "title": "Thread Interruption Behavior.L3.java",
        "description": "What does this print?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"public class Main {
      public static void main(String[] args) {
        Thread t = new Thread(() -> {
          try {
            Thread.sleep(2000);
            System.out.println("Completed");
          } catch (InterruptedException e) {
            System.out.println("Interrupted");
          }
        });
    
        t.start();
        t.interrupt();
      }
    }"`,
        "solution": "Interrupted",
        "testCases": [{ "input": "", "expectedOutput": "Interrupted" }]
      },
      {
        "id": "read-concurrent-modification-l3",
        "title": "Concurrent Modification Behavior.L3.java",
        "description": "What happens when this runs?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.*;
    
    public class Main {
      public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        for (Integer num : numbers) {
          if (num == 2) {
            numbers.remove(num);
          }
        }
        System.out.println(numbers);
      }
    }"`,
        "solution": "Exception: ConcurrentModificationException",
        "testCases": [{ "input": "", "expectedOutput": "Exception: ConcurrentModificationException" }]
      },
      {
        "id": "read-reflection-access-l3",
        "title": "Reflection Access Behavior.L3.java",
        "description": "What gets printed?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.lang.reflect.Field;
    
    class Person {
      private String name = "Alice";
    }
    
    public class Main {
      public static void main(String[] args) throws Exception {
        Person p = new Person();
        Field field = Person.class.getDeclaredField("name");
        field.setAccessible(true);
        System.out.println(field.get(p));
      }
    }"`,
        "solution": "Alice",
        "testCases": [{ "input": "", "expectedOutput": "Alice" }]
      },
      {
        "id": "read-missing-hashcode-l3",
        "title": "Missing hashCode Implementation.L3.java",
        "description": "What happens when executing this code?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.HashSet;
    class Person {
      String name;
      Person(String name) { this.name = name; }
    }
    
    public class Main {
      public static void main(String[] args) {
        HashSet<Person> set = new HashSet<>();
        set.add(new Person("Alice"));
        set.add(new Person("Alice"));
        System.out.println(set.size());
      }
    }"`,
        "solution": "2 (Because hashCode is not overridden, duplicate detection fails.)",
        "testCases": [{ "input": "", "expectedOutput": "2" }]
      },
      {
        "id": "read-static-initializer-l3",
        "title": "Static Initializer Behavior.L3.java",
        "description": "What gets printed?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class Test {
      static { System.out.println("Static Block"); }
      Test() { System.out.println("Constructor"); }
    }
    
    public class Main {
      public static void main(String[] args) {
        new Test();
        new Test();
      }
    }"`,
        "solution": "Static Block\nConstructor\nConstructor",
        "testCases": [{ "input": "", "expectedOutput": "Static Block\nConstructor\nConstructor" }]
      },
      {
        "id": "read-memory-leak-l3",
        "title": "Memory Leak Simulation.L3.java",
        "description": "What is the issue with this code?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"import java.util.*;
    
    public class Main {
      public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        while (true) {
          list.add("Memory Leak");
        }
      }
    }"`,
        "solution": "OutOfMemoryError (Infinite memory allocation causes a crash.)",
        "testCases": [{ "input": "", "expectedOutput": "Exception: OutOfMemoryError" }]
      },
      {
        "id": "read-immutable-class-l3",
        "title": "Immutable Class Behavior.L3.java",
        "description": "What is printed?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"final class Immutable {
      private final String name;
      Immutable(String name) { this.name = name; }
      public String getName() { return name; }
    }
    
    public class Main {
      public static void main(String[] args) {
        Immutable obj = new Immutable("Test");
        System.out.println(obj.getName());
      }
    }"`,
        "solution": "Test",
        "testCases": [{ "input": "", "expectedOutput": "Test" }]
      },
      {
        "id": "read-circular-dependency-l3",
        "title": "Circular Dependency Problem.L3.java",
        "description": "What happens?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"class A {
      B b = new B();
    }
    
    class B {
      A a = new A();
    }
    
    public class Main {
      public static void main(String[] args) {
        new A();
      }
    }"`,
        "solution": "StackOverflowError (Infinite recursive object creation.)",
        "testCases": [{ "input": "", "expectedOutput": "Exception: StackOverflowError" }]
      },
      {
        "id": "read-prototype-override-l3",
        "title": "Prototype Override.L3.js",
        "description": "What does this print?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function Person() {}
    Person.prototype.greet = function () {
      return 'Hi';
    };
    const p = new Person();
    p.greet = function () {
      return 'Hello';
    };
    delete p.greet;
    console.log(p.greet());"`,
        "solution": "Hi",
        "testCases": [{ "input": "", "expectedOutput": "Hi" }]
      },
      {
        "id": "read-async-loop-trap-l3",
        "title": "Async Loop Trap.L3.js",
        "description": "What will be logged?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 100);
    }"`,
        "solution": "3\n3\n3",
        "testCases": [{ "input": "", "expectedOutput": "3\n3\n3" }]
      },
      {
        "id": "read-memoization-trick-l3",
        "title": "Memoization Behavior.L3.js",
        "description": "What’s the output?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"const memo = (() => {
      const cache = {};
      return (x) => {
        if (cache[x]) return 'Cached';
        cache[x] = true;
        return 'New';
      };
    })();
    console.log(memo('a'));
    console.log(memo('a'));"`,
        "solution": "New\nCached",
        "testCases": [{ "input": "", "expectedOutput": "New\nCached" }]
      },
      {
        "id": "read-hoisting-trap-l3",
        "title": "Function Hoisting Trap.L3.js",
        "description": "What does this log?",
        "points": 250,
        "timeLimit": 300,
        "codeTemplate": `"console.log(foo());
    function foo() {
      return 'hoisted';
    }"`,
        "solution": "hoisted",
        "testCases": [{ "input": "", "expectedOutput": "hoisted" }]
      },
      {
        "id": "read-var-hoisting-undefined-l3",
        "title": "Variable Hoisting with var.L3.js",
        "description": "What is printed?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"console.log(a);
    var a = 5;"`,
        "solution": "undefined",
        "testCases": [{ "input": "", "expectedOutput": "undefined" }]
      },
      {
        "id": "read-this-call-l3",
        "title": "Explicit this with call.L3.js",
        "description": "What is the result?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"function sayHi() {
      return this.name;
    }
    const user = { name: 'Lena' };
    console.log(sayHi.call(user));"`,
        "solution": "Lena",
        "testCases": [{ "input": "", "expectedOutput": "Lena" }]
      },
      {
        "id": "read-unary-plus-NaN-l3",
        "title": "Unary Plus and NaN.L3.js",
        "description": "What is printed?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"console.log(+undefined);"`,
        "solution": "NaN",
        "testCases": [{ "input": "", "expectedOutput": "NaN" }]
      },
      {
        "id": "read-empty-array-boolean-l3",
        "title": "Empty Array as Boolean.L3.js",
        "description": "What’s the output?",
        "points": 200,
        "timeLimit": 240,
        "codeTemplate": `"console.log([] == false);"`,
        "solution": "true",
        "testCases": [{ "input": "", "expectedOutput": "true" }]
      }
    ],
    programmingLanguages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  }
];
