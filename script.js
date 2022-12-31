//IMPLEMENTING DATE IN FOOTER
let date = document.querySelector('.date')
const year = new Date().getFullYear()
date.textContent = year


// IMPLEMENTING COLLECTION SCROLL
const collection = [...document.querySelectorAll('.collection-boxes')];
//console.log(collection)
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


//FEATURES BUTTON
const btnLeft1 = document.getElementById('btn-left1');
const btnRight1 = document.getElementById('btn-right1');
const btnLeft2 = document.getElementById('btn-left2');
const btnRight2 = document.getElementById('btn-right2');
const btnLeft3 = document.getElementById('btn-left3');
const btnRight3 = document.getElementById('btn-right3');
const btnLeft4 = document.getElementById('btn-left4');
const btnRight4 = document.getElementById('btn-right4');
const btnLeft5 = document.getElementById('btn-left5');
const btnRight5 = document.getElementById('btn-right5');

//FIRST BUTTONS
btnRight1.addEventListener('click',function(){
    let item = document.getElementById('item-1')
    item.style.display = 'none'
    let item2 = document.getElementById('item-2')
    item2.style.display = 'flex'
})
btnLeft1.addEventListener('click',function(){
    let item = document.getElementById('item-1')
    item.style.display = 'none'
    let item2 = document.getElementById('item-5')
    item2.style.display = 'flex'
})

//SECOND BUTTONS
btnLeft2.addEventListener('click',function(){
    let item = document.getElementById('item-2')
    item.style.display = 'none'
    let item2 = document.getElementById('item-1')
    item2.style.display = 'flex'
})
btnRight2.addEventListener('click',function(){
    let item = document.getElementById('item-2')
    item.style.display = 'none'
    let item2 = document.getElementById('item-3')
    item2.style.display = 'flex'
})

//THIRD BUTTONS
btnLeft3.addEventListener('click',function(){
    let item = document.getElementById('item-3')
    item.style.display = 'none'
    let item2 = document.getElementById('item-2')
    item2.style.display = 'flex'
})
btnRight3.addEventListener('click',function(){
    let item = document.getElementById('item-3')
    item.style.display = 'none'
    let item2 = document.getElementById('item-4')
    item2.style.display = 'flex'
})

//FOURTH BUTTONS
btnLeft4.addEventListener('click',function(){
    let item = document.getElementById('item-4')
    item.style.display = 'none'
    let item2 = document.getElementById('item-3')
    item2.style.display = 'flex'
})
btnRight4.addEventListener('click',function(){
    let item = document.getElementById('item-4')
    item.style.display = 'none'
    let item2 = document.getElementById('item-5')
    item2.style.display = 'flex'
})

//FIFTH BUTTONS
btnLeft5.addEventListener('click',function(){
    let item = document.getElementById('item-5')
    item.style.display = 'none'
    let item2 = document.getElementById('item-4')
    item2.style.display = 'flex'
})
btnRight5.addEventListener('click',function(){
    let item = document.getElementById('item-5')
    item.style.display = 'none'
    let item2 = document.getElementById('item-1')
    item2.style.display = 'flex'
})


//MOBILE-NAVIGATION

////nav mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(function(link){
    if (link.classList.contains('nav-link'))
      headerEl.classList.toggle('nav-open')
})


//STICKY NAVIGATION
/*
const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent)

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  }
)
obs.observe(sectionHeroEl);
*/

function clickCollection(){
    alert('Thank you for shopping with supreme shoes')
}