<<<<<<< HEAD
<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here first we declare a variable named greeting,but we console greetign.The variable greetign is not used anywhere else in the code, so it doesn't affect the result.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>when we add an integer type variable to a string-type variable, it concatenates the integer as a string beside the existing string value without performing numerical addition.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here a new value is assigned to food[0] in favoriteFood property .This doesn't affect the food array. That's why the array remains same as before.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Here a parameter is passed in sayHi function but while they called the function they didn't provided any value for this parameter,that's why it shows undefined and 'Hi there' is written inside the template string as string,So, it will print this.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The forEach() loop iterates over all elements of the array and increments count if the element is greater than 0. Since the array contains four elements that are greater than 0, the value of count after the loop completes will be 3.</i>

</p>
</details>

# Event Management Website

Welcome to the Event Management Website! This platform simplifies event planning and organization, offering several key features:

1. **User Authentication and Registration**:
   - Users can create accounts and log in securely.

2. **Event Listings and Details**:
   - Browse a comprehensive list of managed events on the homepage.
   - Click on an event to access detailed information and descriptions.

3. **Private User Sections**:
   - Access exclusive content such as a gallery and contact information after logging in.

4. **Sign Out Functionality**:
   - Easily log out from the website by clicking the "Sign Out" button.

5. **User Profile Information**:
   - Display the user's name and profile picture in the navigation bar.

## Getting Started

To get started with the Event Management Website, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies.
3. Set up your database and configure the authentication system.
4. Run the application locally.

Feel free to explore, customize, and enhance the website to meet your specific event management needs.

## Live Website

Here is our live website: [SEvents](https://event-management-9111f.web.app/)

Happy event planning!