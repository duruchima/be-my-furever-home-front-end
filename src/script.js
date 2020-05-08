document.addEventListener('DOMContentLoaded', () => {
  
    const allPetsUrl = 'http://localhost:3000/pets'
    const petContainer = document.getElementById('pet-container')
    const body = document.getElementsByTagName('body')[0]
    function getPets(){
        fetch(allPetsUrl)
        .then(response => response.json())
        .then(pets => pets.forEach(pet => renderPets(pet)))
        // .then(pets => pets.forEach(pet => adoptedPetsIndex(pet)))
    }
    function renderPets(pet){
        let petDiv = document.createElement('div') //imagecard?
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id

        let petName = document.createElement('h2')
        petName.innerText = pet.name

        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        petImg.src = pet.imageUrl

        let petBio = document.createElement('div')
        petBio.setAttribute('class', 'pet-bio')

        let petBreed = document.createElement('p')
        petBreed.innerText = `Breed: ${pet.breed}`

        let petLocation = document.createElement('p')
        petLocation.innerText = `Location: ${pet.petLocation}`
        
        let petAge = document.createElement('p')
        petAge.innerText = `Age: ${pet.age}`
        
        let petSize = document.createElement('p')
        petSize.innerText = `Size: ${pet.size}`
        
        let petGender = document.createElement('p')
        petGender.innerText = `Gender: ${pet.gender}`
        
        let petSpecies = document.createElement('p')
        petSpecies.innerText = `Species: ${pet.species}`
        
        petDiv.append(petName, petImg, petBio)
        petBio.append(petSpecies, petBreed, petAge, petGender, petLocation, petSize)
        petContainer.append(petDiv)
    }

    function adoptedPetsIndex(pet) {
      if(pet.isAdopted === true) {
        let petDiv = document.createElement('div')
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id

        let petName = document.createElement('h2')
        petName.innerText = pet.name

        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        petImg.src = pet.imageUrl

        let petBio = document.createElement('div')
        petBio.setAttribute('class', 'pet-bio')
        let petBreed = document.createElement('p')
        petBreed.innerText = `Breed: ${pet.breed}`
        
        let petLocation = document.createElement('p')
        petLocation.innerText = `Location: ${pet.petLocation}`
        
        let petAge = document.createElement('p')
        petAge.innerText = `Age: ${pet.age}`
        
        let petDrescription = document.createElement('p')
        petDrescription.innerText = `Description: ${pet.description}`
        
        let petSize = document.createElement('p')
        petSize.innerText = `Size: ${pet.size}`
        
        let petGender = document.createElement('p')
        petGender.innerText = `Gender: ${pet.gender}`
        
        let petSpecies = document.createElement('p')
        petSpecies.innerText = `Species: ${pet.species}`
        
        petDiv.append(petName, petImg, petBio)
        petBio.append(petSpecies, petBreed, petAge, petGender, petLocation, petSize, petDrescription)
        petContainer.append(petDiv)
      }
    }

  //INDEX PG: PETS TO BE ADOPTED 
  function renderPets(pet) {
    let petDiv = document.createElement('div') //imagecard?
    petDiv.setAttribute('class', 'pet-div')
    petDiv.dataset.id = pet.id

    let petName = document.createElement('h2')
    petName.innerText = pet.name

    let petImg = document.createElement('img')
    petImg.setAttribute('class', 'index-img')
    petImg.src = pet.imageUrl

    let petBio = document.createElement('ul')
    petBio.setAttribute('class', 'pet-bio')

    let petBreed = document.createElement('li')
    petBreed.setAttribute('class', 'list-item')
    petBreed.innerText = `Breed: ${pet.breed}`
    
    let petLocation = document.createElement('li')
    petLocation.innerText = `Location: ${pet.petLocation}`
    petLocation.setAttribute('class', 'list-item')
    
    let petAge = document.createElement('li')
    petAge.innerText = `Age: ${pet.age}`
    
    let petSize = document.createElement('li')
    petSize.innerText = `Size: ${pet.size}`
    
    let petGender = document.createElement('li')
    petGender.innerText = `Gender: ${pet.gender}`
    
    let petSpecies = document.createElement('li')
    petSpecies.innerText = `Species: ${pet.species}`
    
    petDiv.append(petName, petImg, petBio)
    petBio.append(petSpecies, petBreed, petAge, petGender, petLocation, petSize)
    petContainer.append(petDiv)
  }

  //INDEX PG: ADOPTED PETS
  function adoptedPetsIndex(pet) {
    if(pet.isAdopted === true) {
      let petDiv = document.createElement('div')
      petDiv.setAttribute('class', 'pet-div')
      petDiv.dataset.id = pet.id

      let petName = document.createElement('h2')
      petName.innerText = pet.name

      let petImg = document.createElement('img')
      petImg.setAttribute('class', 'index-img')
      petImg.src = pet.imageUrl

      let petBio = document.createElement('ul')
      petBio.setAttribute('class', 'pet-bio')

      let petBreed = document.createElement('li')
      petBreed.setAttribute('class', 'list-item')
      petBreed.innerText = `Breed: ${pet.breed}`
      
      let petLocation = document.createElement('li')
      petLocation.innerText = `Location: ${pet.petLocation}`
      petLocation.setAttribute('class', 'list-item')
      
      let petAge = document.createElement('li')
      petAge.innerText = `Age: ${pet.age}`
      
      let petDrescription = document.createElement('li')
      petDrescription.innerText = `Description: ${pet.description}`
      
      let petSize = document.createElement('li')
      petSize.innerText = `Size: ${pet.size}`
      
      let petGender = document.createElement('li')
      petGender.innerText = `Gender: ${pet.gender}`
      
      let petSpecies = document.createElement('li')
      petSpecies.innerText = `Species: ${pet.species}`
      
      petDiv.append(petName, petImg, petBio)
      petBio.append(petSpecies, petBreed, petAge, petGender, petLocation, petSize, petDrescription)
      petContainer.append(petDiv)
    }
  }
  
  //SHOW PG: PETS TO BE ADOPTED
  function adoptionShow() {
    petContainer.addEventListener('click', (e) => {
      if(e.target.className === 'pet-div'){
        console.log(e.target)
        const dogId = e.target.dataset.id
        petContainer.innerHTML = ''
        // console.log(dogId)
      
        fetch(`${allPetsUrl}/${dogId}`)
          .then(response => response.json())
          .then(pet => renderPet(pet))
      }
      formButton()
    })
  }
  adoptionShow()
  
  function formButton() {
    const formBtn = document.createElement('button')
    formBtn.textContent = 'Apply to Adopt Me!'
    formBtn.setAttribute('class', 'form-btn')
    formBtn.style.display = 'block'
    console.log(formBtn)

    petContainer.insertAdjacentElement('afterend', formBtn)
  }

function renderPet(pet){
        petContainer.innerHTML = ""
        let petDiv = document.createElement('div') //imagecard?
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id

        let petName = document.createElement('h2')
        petName.innerText = pet.name

        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        petImg.src = pet.imageUrl

        let petBio = document.createElement('div')
        petBio.setAttribute('class', 'pet-bio')

        let petBreed = document.createElement('p')
        petBreed.innerText = `Breed: ${pet.breed}`
        
        let petLocation = document.createElement('p')
        petLocation.innerText = `Location: ${pet.petLocation}`
        
        let petAge = document.createElement('p')
        petAge.innerText = `Age: ${pet.age}`
        
        let petDrescription = document.createElement('p')
        petDrescription.innerText = `Description: ${pet.description}`
        
        let postedDate = document.createElement('p')
        postedDate.innerText = `Available for Adoption Since: ${pet.postedDate}`
        petDiv.dataset.adopted = pet.isAdopted
        
        let petSize = document.createElement('p')
        petSize.innerText = `Size: ${pet.size}`
        
        let petFixed = document.createElement('p')
        petFixed.innerText = `Spayed/Neutered: ${pet.spayed_neutered}`
        
        let petTrained = document.createElement('p')
        petTrained.innerText = `House Trained? ${pet.house_trained}`
        
        let petGender = document.createElement('p')
        petGender.innerText = `Gender: ${pet.gender}`
        
        let petColors = document.createElement('p')
        petColors.innerText = `Color: ${pet.colors}`
        
        let petSpecies = document.createElement('p')
        petSpecies.innerText = `Species: ${pet.species}`
        
        petDiv.append(petName, petImg, petBio)
        petBio.append(petSpecies, petBreed, petAge, petGender, petLocation, petSize, petFixed, petTrained, petColors, postedDate, petDrescription)
        petContainer.append(petDiv)
    }
  // petContainer.addEventListener('click', (e) => {
  //   if(e.target.className === 'pet-div'){
  //     const dogId = e.target.dataset.id
  //     petContainer.innerHTML = ''
  //     // console.log(dogId)
    
  //     fetch(`${allPetsUrl}/${dogId}`)
  //       .then(response => response.json())
  //       .then(pet => renderPets(pet))
  //   }
  // })

  // function formSubmission(pet) {
  //   const formBtn = document.createElement('button')
  //   formBtn.textContent = 'Apply to Adopt Me!'
  //   formBtn.setAttribute('class', 'form-btn')
  // }
    getPets()

    function renderSignUp(){
      petContainer.innerHTML = ""
      let signUp = document.createElement('form')
      signUp.setAttribute('class', 'sign-up-form')
      signUp.innerHTML = 
`      <label for="new-user">New User form</label>
      <input name="name" type="text" class="sign-up" id="new-user" placeholder="Enter your name.">
      <label for="new-username">New Username</label>
      <input name="username" type="text" class="sign-up" id="new-username" placeholder="Enter username."></input>
      <label for="location">Location</label>
      <input name="location" type="text" class="sign-up" id="new-location" placeholder="Enter your city."></input>
      <button type="submit" class="btn btn-primary">Submit</button>`
      body.append(signUp)
      console.log(signUp)
    }

  document.addEventListener('click', (e) => {
    if (e.target.className === 'Sign-Up'){
      renderSignUp()
    }
  })
    getPets()
}) //closes domcontent loaded