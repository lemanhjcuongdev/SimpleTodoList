export function add(a: number, b: number) {
  return a + b;
}
const result = add(2, 5);
console.log(result);

let age: number | string | boolean = 24;
age = 12;
let username: string;
username = "Max";
let isDone: boolean;
isDone = false;
let hobbies: null;

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["1", "2", "3"], "abc");
