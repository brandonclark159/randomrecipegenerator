const arrayOfRecipes = [
   {
      recipeTitle: 'Chicken Alfredo',
      ingredientList: '1lb pasta of choice, 1 or 2 can garlic alfredo sauce, 1lb chicken breast'
   },
   {
      recipeTitle: 'Chicken Parmesan',
      ingredientList: '1lb chicken breast, 1 can tomato sauce + seasonings, Panko breadcrumbs + seasoning, 2 eggs, fresh Mozzarella, 1lb pasta of choice',
   },
   // {
   //    recipeTitle: 'Beef and Broccoli'
   // },
   {
      recipeTitle: 'Spaghetti',
      ingredientList: '1lb ground beef, 2 cans tomato sauce, 2tbsp tomato paste, 1lb spaghetti, red wine + seasonings to taste'
   },
   {
      recipeTitle: 'Roasted Chicken and Veggies',
      ingredientList: '2lbs chicken breast, veggies of choice, seasoning/marinade of choice'
   },
   // {
   //    recipeTitle: 'Pot Roast'
   // },
   // {
   //    recipeTitle: 'Cajun Salmon'
   // },
   // {
   //    recipeTitle: 'Lemon and Herb Salmon'
   // },
   // {
   //    recipeTitle: 'Penne a la Vodka'
   // },
   // {
   //    recipeTitle: 'Pad Thai'
   // },
   {
      recipeTitle: 'Shrimp and Grits',
      ingredientList: '1lb shrimp + cajun seasoning, 4 slices bacon, 4 cups grits, chicken broth, cheddar cheese'
   },
   // {
   //    recipeTitle: 'Shrimp Bake'
   // },
   // {
   //    recipeTitle: 'Beef Pho'
   // },
   {
      recipeTitle: 'Schnitzel',
      ingredientList: '1lb pork chops + seasonings, 2 eggs, breadcrumbs'
   },
   // {
   //    recipeTitle: 'Butter Chicken'
   // },
]

document.getElementById('recipeBtn').onclick = () => {
   let random = Number.parseInt(Math.random() * arrayOfRecipes.length);
   document.getElementById('recipeTitleOutput').innerHTML = `<span>${arrayOfRecipes[random].recipeTitle}</span>`;
   document.getElementById('ingredientOutput').innerHTML = `<span>${arrayOfRecipes[random].ingredientList}</span>`;
}