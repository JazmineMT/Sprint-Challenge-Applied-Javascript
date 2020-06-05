// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {

    console.log(response.data)
    tabMaker(response.data)

    response.data.topics.forEach(item =>{
    tabMaker(item)
    const tabContainer = document.querySelector('.topics')
    tabContainer.appendChild(tabMaker(item))

    })

 
  })




function tabMaker(tabInfo){
   
const tab = document.createElement('div')
tab.classList.add('tab')
tab.textContent = tabInfo 
return tab
}

