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