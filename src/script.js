document.addEventListener('DOMContentLoaded', () => {
    const allPetsUrl = 'http://localhost:3000/pets'
    const petContainer = document.getElementById('pet-container')
    function getPets(){
        fetch(allPetsUrl)
        .then(response => response.json())
        .then(pets => pets.forEach(pet => renderPets(pet)))
    }
    function renderPets(pet){
        let petDiv = document.createElement('div') //imagecard?
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id
        let petName = document.createElement('h2')
        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        let petBio = document.createElement('ul')
        petBio.setAttribute('class', 'pet-bio')
        petName.innerText = pet.name
        petImg.src = pet.imageUrl
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
        petDiv.append(petName, petImg, petBio)
        petBio.append(petBreed, petAge, petGender, petLocation, petSize)
        petContainer.append(petDiv)
    }

    function renderPet(pet){
      petContainer.innerHTML = ""
      let petDiv = document.createElement('div') //imagecard?
        petDiv.setAttribute('class', 'pet-div')
        petDiv.dataset.id = pet.id
        let petName = document.createElement('h2')
        let petImg = document.createElement('img')
        petImg.setAttribute('class', 'index-img')
        let petBio = document.createElement('ul')
        petBio.setAttribute('class', 'pet-bio')
        petName.innerText = pet.name
        petImg.src = pet.imageUrl
        petDiv.dataset.id = pet.id
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
        let postedDate = document.createElement('li')
        postedDate.innerText = `Available for Adoption Since: ${pet.postedDate}`
        petDiv.dataset.adopted = pet.isAdopted
        let petSize = document.createElement('li')
        petSize.innerText = `Size: ${pet.size}`
        let petFixed = document.createElement('li')
        petFixed.innerText = `Spayed/Neutered: ${pet.spayed_neutered}`
        let petTrained = document.createElement('li')
        petTrained.innerText = `House Trained? ${pet.house_trained}`
        let petGender = document.createElement('li')
        petGender.innerText = `Gender: ${pet.gender}`
        let petColors = document.createElement('li')
        petColors.innerText = `Color: ${pet.colors}`
        let petSpecies = document.createElement('li')
        petSpecies.innerText = `Species: ${pet.species}`
        petDiv.append(petName, petImg, petBio)
        petBio.append(petSpecies, petBreed, petAge, petGender, petLocation, petSize, petFixed, petTrained, petColors, postedDate, petDrescription)
        petContainer.append(petDiv)
    }

    petContainer.addEventListener('click', (e) => {
      if(e.target.className === 'pet-div'){
        const dogId = e.target.dataset.id
        console.log(`${allPetsUrl}/${dogId}`)
      fetch(`${allPetsUrl}/${dogId}`)
      .then(response => response.json())
      .then(pet => renderPet(pet))
    
    }
    })
    
    getPets()
}) //closes domcontent loaded