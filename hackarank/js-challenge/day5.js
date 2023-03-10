// Objective

// In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

if (
  JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) ===
  JSON.stringify(["constructor"])
) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(rec.area());
  console.log(sqr.area());
} else {
  console.log(-1);
  console.log(-1);
}

// Objective

// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// Finds the initial values of  and  by plugging the area and perimeter values into the formula:
// where  is the rectangle's area and  is its perimeter.
// Creates an array consisting of  and  and sorts it in ascending order.
// Returns the sorted array.
// Input Format

// The first line contains an integer denoting .
// The second line contains an integer denoting .

// Constraints

// Output Format

// Return an array consisting of  and , sorted in ascending order.

// Sample Input 0

// 10
// 14
// Sample Output 0

// 10
// 14
// Explanation 0

// The locked code in the editor passes the following arrays to the tag function:

// The value of  is [ 'The area is: ', '.\nThe perimeter is: ', '.' ].
// The value of  is [ 140, 48 ], where the first value denotes the rectangle's area, , and the second value denotes its perimeter, .
// When we plug those values into our formula, we get the following:

// We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our answer.

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [a, p] = [...expressions];
  let sides = [];

  sides[0] = (p + Math.sqrt(p * p - 16 * a)) / 4;
  sides[1] = (p - Math.sqrt(p * p - 16 * a)) / 4;

  sides.sort();
}

function main() {
  let s1 = +readLine();
  let s2 = +readLine();

  [s1, s2] = [s1, s2].sort();

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${
    2 * (s1 + s2)
  }.`;

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}

// Objective

// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by .
// If the element is odd, multiply the element by .
// The function must then return the modified array.

// Input Format

// The first line contains an integer, , denoting the size of .
// The second line contains  space-separated integers describing the respective elements of .

// Constraints

// , where  is the  element of .
// Output Format

// Return the modified array where every even element is doubled and every odd element is tripled.

// Sample Input 0

// 5
// 1 2 3 4 5
// Sample Output 0

// 3 4 9 8 15
// Explanation 0

// Given , we modify each element so that all even elements are multiplied by  and all odd elements are multipled by . In other words, . We then return the modified array as our answer.

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map((num) => {
        if (num % 2 == 0) {
            return num * 2
        } else return num * 3
    })   
}

function main() {
  const n = +readLine();
  const a = readLine().split(" ").map(Number);

  console.log(modifyArray(a).toString().split(",").join(" "));
}