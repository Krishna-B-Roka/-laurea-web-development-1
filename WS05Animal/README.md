# Animal Care Workshop 5

## Overview

This project is a JavaScript practice application for animal care. It demonstrates form validation, calculations, JSON, `localStorage`, and loading saved data.

## Features

### Exercise 1: Animal Care Form

- Reads the animal name, species, and care note.
- Removes extra spaces with `.trim()`.
- Checks that the animal name and species are not empty.
- Checks that the care note contains 1–150 characters.
- Displays an error message when a value is invalid.

### Exercise 2: Animal Sponsorship Calculator

The calculator uses these fictional annual fees:

- Elephant: €10 per year
- Penguin: €15 per year
- Panda: €20 per year
- Tiger: €25 per year

The calculator:

- Accepts only positive whole years.
- Calculates the total using `annual fee × years`.
- Displays the total with two decimal places.
- Applies a 20% discount for more than two years.
- Subtracts an additional €5 for five years or more.

### Exercise 3: Saving an Animal

When the animal form is valid, the application:

1. Creates an object containing `name`, `species`, and `note`.
2. Converts the object into JSON using `JSON.stringify()`.
3. Saves the JSON in `localStorage` with the key `ws05Animal`.



### Exercise 4: Loading the Animal

The application:

- Reads `ws05Animal` using `localStorage.getItem()`.
- Displays `No saved animal yet.` if no data exists.
- Converts saved JSON back into an object using `JSON.parse()`.
- Displays the saved animal's name, species, and note.
- Loads the saved animal automatically when the page opens.
- Removes only `ws05Animal` when the Clear saved animal button is clicked.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Web Storage API
- JSON




