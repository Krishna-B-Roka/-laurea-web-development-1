// Task 1: Changing content

// Select elements
const taskoneheading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changetextButton = document.querySelector("#changeTextButton");
const changebackgroundButton = document.querySelector("#changebackgroundButton");

// Change heading
changeHeadingButton.addEventListener("click", function () {
    taskoneheading.textContent = "Updated heading!";
});

// Add/remove highlight class
changeStyleButton.addEventListener("click", function () {
    taskoneheading.classList.toggle("highlight");
});

// Change animal text
changetextButton.addEventListener("click", function () {
    animalText.textContent =  "Tigers are powerful predators and the largest members of the cat family.";
});

// Bonus task 01
changetextButton.addEventListener("click", function () {
    animalText.textContent += " They are known for their intelligence and strong social bonds.";
});

// Bonus task 02: Change the background color of the page
changebackgroundButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#6885b8"; // Change to a light gray color
});


// Task 2: Creating elements with JavaScript
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");
const animalContent = document.querySelector("#animalContent");

const heading = document.createElement("h3");
heading.textContent = "Animal of the Day";
heading.classList.add("animal-heading");

const paragraph = document.createElement("p");
paragraph.textContent =
  "Dolphins are intelligent marine mammals known for their playful behavior and excellent communication skills.";

const image = document.createElement("img");
image.src = "https://images.unsplash.com/photo-1544551763-46a013bb70d5";
image.alt = "Dolphin swimming in the ocean";
image.width = 300;

animalContent.append(heading, paragraph, image);


hideAnimalButton.addEventListener("click", function () {
  animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
  animalContent.style.display = "block";
});


// Task 3: Selecting animal
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent =
            "Elephants are the world's largest land animals.";
    } 
    else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tigers are the largest wild cats and powerful predators.";
    } 
    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent =
            "Penguins are flightless birds that spend much of their lives in the water.";
    } 
    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent =
            "Pandas mainly eat bamboo and are known for their black and white fur.";
    }
});


animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});


//Task 4: Adding animal observations
const animalForm = document.querySelector("#animalForm");
const animalInput = document.querySelector("#observationAnimal");
const locationInput = document.querySelector("#observationLocation");
const dateInput = document.querySelector("#observationDate");
const tableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = animalInput.value;
    const location = locationInput.value;
    const date = dateInput.value;


    const row = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    row.append(animalCell, locationCell, dateCell);

    tableBody.append(row);

    animalForm.reset();
});


