const categoriesRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesRef.length} категории.`);


const categoryList = () => {
    const titleRef = document.querySelector('#categories .item h2');
    const categoryListRef = document.querySelector('.item ul');
    const categoryListItemRef = categoryListRef.children;

    return `Категория: ${titleRef.textContent}.
            Количество элементов: ${categoryListItemRef.length}`;
}

console.log(categoryList());
































