// issue with older javascript

var x = 1;

var x = 2;

// issue
{
  var x = 1;
}

console.log(x);

// overcome this issue with
{
  let x = 1;
}

console.log(x);

// const

const y = 1;

y = 2;

console.log(y);

// exception

const x = { a: 1, b: 2 };

x.b = 3;

console.log(x);

// array exception

const x = [1, 2, 3];

x.push(4);

console.log(x);

const fname = "yagnesh";
const lname = "modh";

const name = `${fname}'s car`;

console.log(name);

// string interpolation

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const oldJS =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>Document</title>" +
  "</head>" +
  "<body>" +
  "" +
  "</body>" +
  "</html>";

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(es6);

// spread operator for object

const obj = { a: 1, b: 2 };

const obj1 = { ...obj, c: 3 };

console.log(obj1);

const obj = { a: 1, b: 2, c: 3 };

const { a, b, c } = obj;

console.log(a);
console.log(b);
console.log(c);

// spread operator for object

const obj = { a: 1, b: 2, c: 3 };

const { c, b, ...rest } = obj;

console.log(c);
console.log(rest);

// const add = function(a, b) {
//     return a + b;
// }

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 3));

const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex(x => x === 3);

console.log(index);

const arr1 = [...arr.slice(0, index), ...arr.slice(index + 1)];

const arr2 = arr.filter(x => x !== 3);

console.log(arr2);

console.log(arr1);

const people = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "male"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const newPeople = [...people, { name: "priyanka", gender: "female" }];

const index = newPeople.findIndex(x => x.name === "dipika");

const newPeople1 = [
  ...newPeople.slice(0, index),
  { ...people[index], gender: "female" },
  ...newPeople.slice(index + 1)
];

console.log(newPeople1);

const newPeople2 = newPeople1.filter(x => x.name !== "virat");

console.log(newPeople2);

// map
// reduce
// for in
// for of

// map
const people = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const people1 = people.map((item, index) => {
  console.log(item);
  if (item.name === "yagnesh") {
    return { ...item, profession: "trainer" };
  }
  if (item.gender == "male") {
    return { ...item, profession: "cricketer" };
  }
  if (item.gender == "female") {
    return { ...item, profession: "actor" };
  }
});

// console.log(people1);

const arr = [1, 2, 3, 4, 5];

let sum = 5;
for (let index = 0; index < arr.length; index++) {
  sum += arr[index];
}

const sum1 = arr.reduce((previous, current, index, arr) => {
  console.log(previous);
  console.log(current);
  return previous + current;
}, 5);

console.log(sum1);
