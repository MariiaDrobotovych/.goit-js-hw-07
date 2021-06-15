const categoriesRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesRef.length} категории.`);


const categoryList = () => {
    return categoriesRef.forEach((category)=>{
        const titleRef = category.querySelector('.item h2');
        const categoryListItemRef = category.children;
    
        console.log(`Категория: ${titleRef.textContent}.
        Количество элементов: ${categoryListItemRef.length}`) ;
    })
    
}

categoryList();

























