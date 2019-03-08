// let container = document.getElementById('foodList');


// function dom(foodName, foodCountry, foodCalorie, foodFat, foodSugar) {
//     container.innerHTML += `<div><h1>${foodName}</h1><p>${foodCountry}</p><p>${foodCalorie}</p><p>${foodFat}</p><p>${foodSugar}</p></div>`
// }

// fetch("http://localhost:8088/foods")
//     .then(response => response.json())
//     .then(myParsedFoods => {
//         myParsedFoods.forEach(food => {
//             console.log(food) // Should have a `barcode` property

//             // Now fetch the food from the Food API
//             fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
//                 .then(response => response.json())
//                 .then(productInfo => {
//                     food.ingredients = productInfo.product.ingredients
//                     food.countryOfOrigin = productInfo.product.countries
//                     food.CaloriesPerServing = productInfo.product.nutriments.carbohydrates_100g
//                     food.fatPerServing = productInfo.product.nutriments.fat_100g
//                     food.sugarPerServing = productInfo.product.nutriments.sugars_100g


//                     dom(food.name, food.countryOfOrigin, food.CaloriesPerServing, food.fatPerServing, food.sugarPerServing)

//                     for (let i = 0; i < food.ingredients.length; i++){
//                         container.innerHTML += ` ${food.ingredients[i].text}`
//                     }

//                 })
//         })
//     })






// Produce HTML representation
// const foodAsHTML = foodFactory(food)

// Add representaiton to DOM
// addFoodToDom(foodAsHTML)

// Ingredients
// Country of origin
// Calories per serving
// Fat per serving
// Sugar per serving





let container = document.getElementById('foodList');

function dom(foodObj) {
    let string = `<div>
        <h1>${foodObj.name}</h1> 
        <p>${foodObj.countryOfOrigin}</p>
        <p>${foodObj.sugarPerServing}</p>
        <p>${foodObj.CaloriesPerServing}</p>
        <p>${foodObj.fatPerServing}</p>
    `
    string +=`<p>`



    foodObj.ingredients.forEach(ing => {
        string += ing.text + ', '
    })

    string += `</p>`

    string += `</div>`
    container.innerHTML += string;
}


fetch("http://localhost:8088/foods")
    .then(response => response.json())
    .then(myParsedFoods => {
            myParsedFoods.forEach(food => {
                    console.log(food) // Should have a `barcode` property

                    // Now fetch the food from the Food API
                    fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                        .then(response => response.json())
                        .then(productInfo => {
                                food.ingredients = productInfo.product.ingredients
                                food.countryOfOrigin = productInfo.product.countries
                                food.CaloriesPerServing = productInfo.product.nutriments.carbohydrates_100g
                                food.fatPerServing = productInfo.product.nutriments.fat_100g
                                food.sugarPerServing = productInfo.product.nutriments.sugars_100g


                                dom(food)
                        })

                        })
            })
    