const searchMeal = () => {
const searchName = document.getElementById('search-field').value;
if(searchName ==""){
    alert('Field Must Not Be Empty')
}
else{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeal(data.meals))
    
}


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
           <p>Area:${info.strIngredient1}</p>
           <p>Categories:${info.strIngredient2}</p>
           <p>Element:${info.strIngredient3}</p>
           <p>Element:${info.strIngredient4}</p>
           <p>Element:${info.strIngredient5}</p>
           <p>Element:${info.strIngredient6}</p>
           <p>Element:${info.strIngredient7}</p>
           <p>Element:${info.strIngredient8}</p>
           <p>Element:${info.strIngredient9}</p>
           <p>Element:${info.strIngredient10}</p>

        </div>
        
        `
}