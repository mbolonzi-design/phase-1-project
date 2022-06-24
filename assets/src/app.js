function renderCockTailOne(cockTail){
    cockTail()
    .then((data)=>{
      const drinks = data.drinks
      for (drink of drinks){
        if (drinks.indexOf(drink) < drinks.length-14){
          let card = document.createElement('div')
          card.className = 'card'
          card.id = `${drink.idDrink}`
          card.innerHTML=`
          <h2>${drink.strDrink}</h2>
          <img src = "${drink.strDrinkThumb}" />
          <p id="description">${drink.strInstructions}</p>
          <button class="remove">Remove</button>
          <button class="favorite">Select</button>
          `
          document.querySelector('#more').appendChild(card)
  
          card.querySelector('.favorite').addEventListener('click', ()=>{  //Event Listener
              const el = card.querySelector('.favorite')
              el.textContent = "Selected"
              card.style.backgroundColor = "#e2ea7b";
          })
          card.querySelector('.remove').addEventListener('click', (e)=>{//Event Listener
            e.target.parentElement.remove()
            })
        }
      }
    })
  }
  renderCockTailOne(getData)
//fetching API

  function getData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
            'X-RapidAPI-Key': 'fedf1dd524msh1cf534605192167p136515jsn5200bf26f1a5'
        }
    };

    const response= fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
    return response
}
// DOM CONTENT LOADED EVENT LISTENER >====================
//--------------------(FUNCTION RENDERING THE DOM)--------------------
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#add-element').addEventListener('submit', submitHandler)
   
})