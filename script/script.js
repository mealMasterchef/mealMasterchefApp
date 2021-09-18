// Create an app object (app)

// Initialize preset data in the dedicated properties
// - apiURL
        // https://www.themealdb.com/api/json/v1/1/categories.php  (display categories)
        // https://www.themealdb.com/api/json/v1/1/filter.php?c=beef  (food by categories)
        // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874  (search by ID number)
// - userQuery


// MVP
    // Give user food categories to choose from "The Meal DB" api
    // display 3 random food from that category 

// STRETCH GOALS
    // Once user clicks one of the 3 food options, display prep instructions and ingredients
    // When displaying the meal, display video as well

// Pseudo Code
// Create an app object (app)
// Create an init method to setup and start the application
// Make an Api method (getCategory) to display all the food categories user can choose from
    // diplay the categories as images appened inside 'li's
        // each 'li' will have images and title
// using a forEach loop, event listeners will be added to the 'Li's
// Based on the userInput, make another API call which takes the user input as a parameter.
// When the API call is successful, randomly select 3 meals to display to the user from all the food in that category.
    // using Math.floor(Math.random) generate 3 random numbers
        // use conditionals to make sure the 3 numbers aren't the same 
// using the 3 random numbers, select 3 random meal from the category
// append the meals inside another ul
    // the meals will display an image and title inside li
// If the API call fails, display an error message

console.log("Hello, world!");

// namespace app
const masterChef = {};

// namespace variables
masterChef.categories = []

// functions
masterChef.getCategories = () => {
	// get the categories
	const url = new URL('https://www.themealdb.com/api/json/v1/1/categories.php')
	fetch(url).then((response) => {
		console.log();
	})
	// return array of categories

}

masterChef.displayCategories = () => {
	masterChef.categories = masterChef.getCategories()
}

masterChef.init = () => {
	console.log('💪😎🎶🐱‍🏍🐱‍👤');
	masterChef.displayCategories()
}


masterChef.init();