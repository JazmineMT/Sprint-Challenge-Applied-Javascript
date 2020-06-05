// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
   
    const articleContainer = document.querySelector('.cards-container')
    const values = Object.values(response.data.articles)

    
        values.forEach(element=>{
            element.forEach(article =>{
            articleMaker(article)
            articleContainer.appendChild(articleMaker(article))
            })
        })
   
})








function articleMaker (articleInfo) {

const {headline , authorName , authorPhoto, } = articleInfo

const cardDiv = document.createElement('div')
const headlineTitle = document.createElement ('div')
const authorDiv = document.createElement('div')
const imgContainer = document.createElement('div')
const image = document.createElement('img')
const author = document.createElement('span')

cardDiv.classList.add('card')
headlineTitle.classList.add('headline')
authorDiv.classList.add('author')
imgContainer.classList.add('img-container')


cardDiv.appendChild(headlineTitle)
cardDiv.appendChild(authorDiv)
authorDiv.appendChild(imgContainer)
imgContainer.appendChild(image)
authorDiv.appendChild(author)

headlineTitle.textContent = headline
image.src = authorPhoto
author.textContent = `By ${authorName}`

return cardDiv

}

