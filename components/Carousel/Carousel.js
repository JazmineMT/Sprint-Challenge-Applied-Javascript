/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker (){

const carousel = document.createElement('div')
const leftButton = document.createElement('div')
const image1 = document.createElement('img')
const image2  = document.createElement('img')
const image3 = document.createElement('img')
const image4 = document.createElement('img')
const rightButton = document.createElement('div')


carousel.classList.add('carousel')
leftButton.classList.add('left-button')
rightButton.classList.add('right-button')


carousel.appendChild(leftButton)
carousel.appendChild(image1)
carousel.appendChild(image2)
carousel.appendChild(image3)
carousel.appendChild(image4)
carousel.appendChild(rightButton)

image1.src = 'assets/carousel/computer.jpeg'
image2.src = 'assets/carousel/mountains.jpeg'
image3.src = 'assets/carousel/trees.jpeg'
image4.src = 'assets/carousel/turntable.jpeg'


leftButton.addEventListener ('click', event => { 
image1.style.display ="block"
image1.style.transition.opacity  = '2';

setTimeout(function(){
  image1.style.display= "";
 
setTimeout(function(){
  image2.style.display= "block";


setTimeout(function(){
  image2.style.display= "";


 
setTimeout(function(){
  image3.style.display= "block";

  setTimeout(function(){
    image3.style.display= "";


    setTimeout(function(){
      image4.style.display= "block";


      setTimeout(function(){
        image4.style.display= "";
      }, 900);
    }, 900);
  }, 900);

}, 900);
}, 900);
}, 900);

}, 900);
})


rightButton.addEventListener ('click', event => { 
  image2.style.display = "block"
setTimeout(function(){
  image2.style.display= "";
}, 700);
})



// leftButton.addEventListener ('click', event => { image3.style.display ='block'})
// leftButton.addEventListener ('click', event => { image4.style.display ='block'})
// rightButton.addEventListener ('click', event => { image4.style.display ='none'})


return carousel

}

const carouselContainer = document.querySelector(".carousel-container")
const newCarousel = carouselMaker();
carouselContainer.appendChild(newCarousel)

