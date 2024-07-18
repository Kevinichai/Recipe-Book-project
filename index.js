//Joininng HTML IDS to subsequent javascriptvariables
const mealImage = document.getElementById('mealImage')
const recipeTitle = document.getElementById('recipe-title')
const mealDetails = document.getElementById('mealDetails')
const mealContainer=document.getElementById('mealContainer')
const searchBtn= document.querySelector('.searchBtn')
const inputField=document.getElementById('input')
const selectBtn=document.getElementById('SelectBtn')
const recipeDetails=document.getElementById('recipe-details')


//Declaring api source
const allMealsurl=`www.themealdb.com/api/json/v1/1/search.php?s=${meals}`

fetchMeals();
//function to fect api data
function fetchMeals() {
fetch(allMealsurl)
.then(response => response.json())

}



//Adding event listener to buttons
searchBtn.addEventListener('click', () => {
    const newItem = itemInserted.value.trim();
    if (newItem) {
        addItem(newItem);
        itemInserted.value = '';
    }
});