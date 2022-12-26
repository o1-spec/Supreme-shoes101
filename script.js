//Implementing date in footer
let date = document.querySelector('.date')
const year = new Date().getFullYear()
date.textContent = year

// Implementing collection scroll

const collection = [...document.querySelectorAll('.collection-boxes')];
const nextBtn = [...document.querySelectorAll('.btn-2-collection')];
const prevBtn = [...document.querySelectorAll('.btn-1-collection')]

collection.forEach(function(item , i){
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click',function(){
        item.scrollLeft +=  containerWidth;
    })

    prevBtn[i].addEventListener('click',function(){
        item.scrollLeft -= containerWidth;
    })
})