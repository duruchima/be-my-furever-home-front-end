document.addEventListener('DOMContentLoaded', () => {
  const allPetsUrl = 'http://localhost:3000/pets'
  const petContainer = document.getElementById('pet-container')
    
  function getPets(){
      fetch(allPetsUrl)
      .then(response => response.json())
      .then(pets => pets.forEach(pet => renderPets(pet)))
      // .then(pets => pets.forEach(pet => adoptedPetsIndex(pet)))
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
          .then(pet => renderPets(pet))
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

    // petDiv = document.getElementsByClassName('pet-div')[0]
    // console.log(petDiv)
    petContainer.insertAdjacentElement('afterend', formBtn)
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
}) //closes domcontent loaded
