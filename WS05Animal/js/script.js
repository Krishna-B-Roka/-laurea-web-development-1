// WS05 student starter
// Complete the TODOs.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.
    const animalNameValue = animalName.value.trim();
    const animalSpeciesValue = animalSpecies.value.trim();
    const careNoteValue = careNote.value.trim();
   

    // TODO: Validate and show errors / Validoi ja näytä virheet.
    let valid = true;
    if (animalNameValue === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }
    if (animalSpeciesValue === "") {
        speciesError.textContent = "Species is required.";
        valid = false;
    }
    if (careNoteValue === "" || careNoteValue.length > 150) {
        noteError.textContent = "The care note must contain 1–150 characters after trimming.";
        valid = false;
    }
    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    if (valid) {
        formResult.textContent = `${animalNameValue} / ${animalSpeciesValue} / ${careNoteValue}`;

        const animal = {
            name: animalNameValue,
            species: animalSpeciesValue,
            note: careNoteValue
        };

        localStorage.setItem("ws05Animal", JSON.stringify(animal));
    }
});




// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().
    const annualcost = Number(animalType.value);
    const years = Number(yearsInput.value);

    // TODO: Muunna syötteet numeroiksi Number()-funktiolla.
    if (years <= 0 || !Number.isInteger(years)) {
    cost.textContent = "Please enter a positive whole number of years.";
    discountMessage.textContent = "";
    return;
    }

    // TODO: Calculate the price and apply discounts.
    let totalCost = annualcost * years;

    // TODO: Laske hinta ja alennukset.
    if (years > 2) {
        totalCost *= 0.8;
        discountMessage.textContent = "A 20% discount has been applied.";
    } else {
        discountMessage.textContent = "";
    }
    if (years >= 5) {
        totalCost = totalCost - 5;
        discountMessage.textContent += " An additional 5€ discount has been applied.";
    }
    // TODO: Show the result / Näytä tulos.
    cost.textContent = `Total cost: ${totalCost.toFixed(2)}€`;
});





// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    const savedAnimalData = localStorage.getItem("ws05Animal");

    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    if (savedAnimalData === null) {
        savedAnimal.textContent = "No saved animal yet.";
        return;
    }
    // TODO: Display name, species and note with textContent.
    const animal = JSON.parse(savedAnimalData);
    
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.
    savedAnimal.textContent = `${animal.name} / ${animal.species} / ${animal.note}`;
}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
    // TODO: Remove ws05Animal and update the displayed result.
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "No saved animal data.";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
loadAnimal();