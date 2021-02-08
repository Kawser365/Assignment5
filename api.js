fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(res => res.json())
.then(data => display(data.meals))

const display = meal => {
    const displayMeal = document.getElementById('display-section');
    for (let i = 0; i < meal.length; i++) {
        const element = meal[i];
        console.log(element.strMeal);
        // const mealName = document.createElement('h3');
        // mealName.innerText = element.strMeal;
        // displayMeal.appendChild(mealName);

    }
    
}

// const search = document.getElementById('display-Section');
// search.addEventListener('click', function(){
//     display(catagories);
// })

// const detailsMeal = details => {
//    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`
//    console.log(url);
//    fetch(url)
//    .then(res => res.json())
//    .then(data => renderMealInfo(data))
//    const renderMealInfo = details => {
   
//    }

// }