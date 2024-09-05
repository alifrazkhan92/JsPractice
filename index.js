const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .filter((people) => people.age <= 25)
  .map((people) => ({
    name: people.firstName,
    Email: people.email,
  }));

const namePhone = people
  .filter((people) => people.age <= 25)
  .map((people) => ({ name: people.firstName }));

console.log(youngPeople);
console.log(namePhone);

const price = [100, 200, 500, 100];

const sum = price.reduce(function (acc, currentPrice) {
  return acc + currentPrice;
}, 0);

console.log(sum);

setTimeout(() => {
  document.querySelector("h1").textContent = "Hello from the callback.";
}, 2000);

/*const posts = [
  { title: "First Post", body: "This is my first post" },
  { title: "Second Post", body: "This is my second post" },
  { title: "Third Post", body: "This is my third post" },
];

function getPost(){
  setTimeout(forEach(function (post){
    const div = document.createElement("div");
    div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
    document.querySelector('posts').appendChild(div);
  });
}, 1000);
}

createPost({title: 'Post Three', body: 'This is post'}, getPosts);*/

const results = [22, 23, 25, 55, 15, 12, 13, 100, 5];

const filterResults = results.filter((result) => result < 20);
console.log(filterResults);

//map values to the new array (use to manipilate.)

const prices = [100, 55, 50, 66, 60, 35, 17];

const mappedPrices = prices.map((price) => price / 2);
console.log(mappedPrices);

const productPrices = [
  { name: "Product 1", price: 100 },
  { name: "Product 2", price: 200 },
  { name: "Product 3", price: 300 },
  { name: "Product 4", price: 400 },
  { name: "Product 5", price: 500 },
  { name: "Product 6", price: 600 },
  { name: "Product 7", price: 700 },
  { name: "Product 8", price: 800 },
];

const newProductPrices = productPrices.map((product) => {
  if (product.price >= 500) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(newProductPrices, productPrices);

//Reduce Methods
const score = [10, 20, 30, 40, 50, 60, 80, 70, 90, 100];

const result = score.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc++;
}, 0);

console.log(result + 10);

const gameScore = [
  { name: "TRex", points: 50 },
  { name: "Gammer Boy", points: 100 },
  { name: "TRex", points: 150 },
  { name: "Gamer", points: 200 },
  { name: "TRex", points: 50 },
  { name: "Gammer Boy", points: 100 },
  { name: "TRex", points: 150 },
  { name: "Gamer", points: 200 },
  { name: "TRex", points: 50 },
  { name: "Gammer Boy", points: 100 },
  { name: "TRex", points: 150 },
  { name: "Gamer", points: 200 },
  { name: "TRex", points: 50 },
  { name: "Gammer Boy", points: 100 },
  { name: "TRex", points: 150 },
  { name: "Gamer", points: 200 },
  { name: "TRex", points: 50 },
  { name: "Gammer Boy", points: 100 },
  { name: "TRex", points: 150 },
  { name: "Gamer", points: 200 },
  { name: "TRex", points: 50 },
  { name: "Gammer Boy", points: 100 },
  { name: "TRex", points: 150 },
  { name: "Gamer", points: 200 },
];

const totalGameScore = gameScore.reduce((acc, curr) => {
  if (curr.name === "TRex") {
    acc += curr.points;
  }
  return acc;
}, 0);

console.log(totalGameScore);

//Find Method

const numbers = [341, 62, 43, 84, 35, 60];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//Sort, compare and reverse Method
const names = [
  "Ali",
  "Afnan",
  "Zahra",
  "Sherry",
  "Khadija",
  "Maryum",
  "Farrukh",
  "Fatima",
];

names.sort();
console.log(names);
names.reverse();
console.log(names);
names.sort();
console.log(names);

numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.sort();
console.log(numbers);

gameScore.sort((a, b) => {
  if (a.points > b.points) {
    return -1;
  } else if (b.points > a.points) {
    return 1;
  } else {
    return 0;
  }
});

console.log(gameScore);
