document.addEventListener('DOMContentLoaded', () => {
  
    const allPetsUrl = 'http://localhost:3000/pets'
    const petContainer = document.getElementById('pet-container')
    const body = document.getElementsByTagName('body')[0]
    function getPets(){
        fetch(allPetsUrl)
        .then(response => response.json())
        .then(pets => pets.forEach(pet => renderPets(pet)))
    }

    function getAdoptedPets(){
      fetch(allPetsUrl)
      .then(response => response.json())
      .then(pets => pets.forEach(pet => adoptedPetsIndex(pet)))
  }
    //INDEX PG: PETS TO BE ADOPTED 
    function renderPets(pet){
      if(pet.isAdopted === false){
        let petDiv = document.createElement('div') //imagecard?
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id
        petDiv.dataset.adopted = pet.isAdopted

        let petName = document.createElement('h2')
        petName.innerText = pet.name

        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        petImg.src = pet.imageUrl

        let petBio = document.createElement('div')
        petBio.setAttribute('class', 'pet-bio')

        let petBreed = document.createElement('p')
        petBreed.innerText = `Breed: ${pet.breed}`
        
        let petAge = document.createElement('p')
        petAge.innerText = `Age: ${pet.age}`
        
        let petSize = document.createElement('p')
        petSize.innerText = `Size: ${pet.size}`
        
        let petGender = document.createElement('p')
        petGender.innerText = `Gender: ${pet.gender}`
        
        let petSpecies = document.createElement('p')
        petSpecies.innerText = `Species: ${pet.species}`
        
        petDiv.append(petName, petImg, petBio)
        petBio.append(petSpecies, petBreed, petAge, petGender, petSize)
        petContainer.append(petDiv)} //closes if statement
    }

    //INDEX PG: ADOPTED PETS
    function adoptedPetsIndex(pet) {
      if(pet.isAdopted === true) {
        let petDiv = document.createElement('div')
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id
        petDiv.dataset.adopted = pet.isAdopted

        let petName = document.createElement('h2')
        petName.innerText = pet.name

        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        petImg.src = pet.imageUrl

        let petBio = document.createElement('div')
        petBio.setAttribute('class', 'pet-bio')
        let petBreed = document.createElement('p')
        petBreed.innerText = `Breed: ${pet.breed}`
        
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
        petBio.append(petSpecies, petBreed, petAge, petGender, petSize, petDrescription)
        petContainer.append(petDiv)
      }
    }

    function renderAdoptedPet(pet){
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
        
        let petAge = document.createElement('p')
        petAge.innerText = `Age: ${pet.age}`
        
        let petDrescription = document.createElement('p')
        petDrescription.innerText = `Description: ${pet.description}`
        
        let petGender = document.createElement('p')
        petGender.innerText = `Gender: ${pet.gender}`
        
        petDiv.append(petName, petImg, petBio)
        petBio.append(petBreed, petAge, petGender, petDrescription)
        petContainer.append(petDiv)
    }
  
  //SHOW PG: PETS TO BE ADOPTED
    petContainer.addEventListener('click', (e) => {
      const dogId = e.target.dataset.id
      if(e.target.className === 'pet-div' && e.target.dataset.adopted === 'false'){
        petContainer.innerHTML = ""
      
        fetch(`${allPetsUrl}/${dogId}`)
          .then(response => response.json())
          .then(pet => renderPet(pet))
        }
        else if (e.target.className === 'pet-div' && e.target.dataset.adopted === 'true'){
          petContainer.innerHTML = ""
          fetch(`${allPetsUrl}/${dogId}`)
          .then(response => response.json())
          .then(pet => renderAdoptedPet(pet))
        }
      
    })
  
  
  
  //FORM BUTTON ON PETS TO BE ADOPTED
  function formButton() {
    const formBtn = document.createElement('button')
    formBtn.textContent = 'Apply to Adopt Me!'
    formBtn.setAttribute('class', 'form-btn')
    formBtn.style.display = 'block'

    petContainer.append(formBtn)

    formBtn.addEventListener('click', event => {
      
      let body = document.getElementsByTagName('body')[0]
      let formContainer = document.createElement('div')
      formContainer.setAttribute('id', 'form-container')
      formContainer.dataset.id = event.target.previousElementSibling.dataset.id
      body.append(formContainer)
      console.log(formContainer.dataset.id)
      petContainer.innerHTML = ''

      let formAdoption = document.createElement('form')
      formAdoption.setAttribute('class', 'adoption-form')

      formAdoption.innerHTML = `
        <label for="user-adoption">Pet Adoption Form:</label><br>
        <input name="name" type="text" class="user-input" placeholder="Please enter your name."><br>
        <input name="contact" type="text" class="user-num" placeholder="Please enter your phone number."><br>
        <input name="location" type="text" class="user-address" placeholder="Please enter your city."></input><br>
        <input name="Home Visit" type="text" class="user-availability" placeholder="Please enter the best time for a visit."></input><br>
        <input name="Previous Owner" type="text" class="previous-owner" placeholder="Have you been a pet owner before?"></input><br>
        <button type="submit" class="btn btn-primary">Submit</button>
      `
      formContainer.append(formAdoption)

      document.addEventListener('submit', event => {
        event.preventDefault()
        let petId = event.target.parentNode.dataset.id
    
        fetch((`${allPetsUrl}/${petId}`), {
          method: 'PATCH',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
          body: JSON.stringify({"isAdopted": true})
        })  
      })
    })
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
    petBio.append(petSpecies, petBreed, petAge, petGender, petSize, petFixed, petTrained, petColors, postedDate, petDrescription)
    petContainer.append(petDiv)
    formButton()
  } //closes renderPet

  document.addEventListener('click', (e) => {
    if (e.target.className === 'Sign-Up'){
      renderSignUp()
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.className === 'adopted-pets'){
      petContainer.innerHTML = ""
      getAdoptedPets()
    }
    else if (e.target.className === 'for-adoption'){
    petContainer.innerHTML = ""
    getPets()
  }
  })

    getPets()
}) //closes domcontent loaded