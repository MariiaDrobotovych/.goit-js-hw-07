const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsRef = document.querySelector('#ingredients');

const createIngredients = (allIngredients) => {
return allIngredients.map((oneIngredient)=>{
    const ingredient = document.createElement('li');
    ingredient.textContent = oneIngredient;
    return ingredient;
});
}

const createdIngredients = createIngredients(ingredients);
ingredientsRef.append(...createdIngredients);

