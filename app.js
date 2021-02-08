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

        // const mealDiv = document.createElement('h3');
        // mealDiv.innerText = mealItem.strMeal;
        display.className = 'item';
        display.innerHTML += `
        <div>
       
        <div onClick="details('${mealItem.idMeal}')">
           <img src="${mealItem.strMealThumb}">
           <h3>${mealItem.strMeal}</h3>

        </div>
        </div>
        
        `
        // display.appendChild(mealDiv); 
        // <h3 class="item">${mealItem.strMeal}</h3>
        
    })
}
const details = mealInfo => {
    console.log(mealInfo)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealInfo}`)
    .then(res=> res.json())
    .then(data=> mealDetails(data.meals[0]))

}    

const mealDetails = info =>{
    // console.log(info)
    const display = document.getElementById('meal-info')
        // const mealInfoDiv = document.createElement('p');
        // mealInfoDiv.innerText = info.strMeal;
        // display.className = 'mealItem';
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
        // display.appendChild(mealInfoDiv);
}