const searchMeal = () => {
const searchName = document.getElementById('search-field').value;
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeal(data.meals))
    

}
const displayMeal = meal =>{
    const display = document.getElementById('display-Section')
    display.innerHTML = "";
    meal.forEach(mealItem => {
        display.className = 'item';
        display.innerHTML += `
        <div>
       
        <div onClick="details('${mealItem.idMeal}')">
           <img src="${mealItem.strMealThumb}">
           <h3>${mealItem.strMeal}</h3>

        </div>
        </div>
        
        `
    })
}
const details = mealInfo => {
    console.log(mealInfo)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealInfo}`)
    .then(res=> res.json())
    .then(data=> mealDetails(data.meals[0]))

}    

const mealDetails = info =>{
    const display = document.getElementById('meal-info')
        display.innerHTML = `
        <div onClick="details('${info}')">
           <img src="${info.strMealThumb}">
           <h5>Ingredient</h5>
           <p>Name:${info.strMeal}</p>
           <p>Area:${info.strArea}</p>
           <p>Categories:${info.strCategory}</p>
           <p>Element:${info.strIngredient4}</p>

        </div>
        
        `
}