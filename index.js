//Joininng HTML IDS to subsequent javascriptvariables
const mealImage = document.getElementById('mealImage');
const mealTitle = document.getElementById('recipe-title');
const mealInstructions = document.getElementById('mealInstructions');
const mealContainer=document.getElementById('mealContainer');
const searchBtn= document.querySelector('.searchBtn');
const inputField=document.getElementById('input');
const selectBtn=document.getElementById('SelectBtn');
const mealList = document.getElementById('mealList');


//Declaring api source
const allMealsurl='https://www.themealdb.com/api/json/v1/1/search.php?s=';

//function to fect api data based on query
function fetchMeals(query) {

fetch(`${allMealsurl}${query}`)
.then(response => response.json())
.then(data=> {
    if (data.meals) {
        displayMeal(data.meals[0]);
        displayMealList(data.meals);
    } else {alert('Meal Unavailable');

    }
})
.catch(error => console.error('Unable to fetch meals',error));
}

//Function to fetch a random meal(nipike button)
function fetchRandomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response =>response.json())
    .then(data =>{displayMeal(data.meals[0]);
    })
    .catch(error => console.error('Unable to locate random recipe',error));
}
//Function to display Meals
function displayMeal(meal){
mealImage.src = meal.strMealThumb;
mealTitle.textContent = meal.strMeal;
mealInstructions.textContent = meal.strMealInstructions;
mealContainer.textContent=meal.idMeal

}
//Function to configure the mealList
function displayMealList(meals) {
mealList.innerHTML=''
meals.forEach(meal => {
    const mealItem = document.createElement('li')
    mealItem.textContent=meal.strMeal;
    mealList.appendChild(mealItem);

    //Adding an eventlistener to meal items
    mealItem.addEventListener('click', () => {
        displayMeal(meal);
    });
});
}
//Adding event listener to buttons
searchBtn.addEventListener('click', (event) => {
   event.preventDefault();
   const query =inputField.value.trim();
   if(query){
    fetchMeals(query);
    inputField.value='';
   }
    });

//Adding event listener to nipike button
selectBtn.addEventListener('click',() => {fetchRandomMeal();
})