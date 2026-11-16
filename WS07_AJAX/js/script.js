//Exercise 1: JSON Basic

var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Convert JSON text into a JavaScript object
var data = JSON.parse(text);


// Show only first and last names
function showNames() {

    var output = "";

    for (var i = 0; i < data.employees.length; i++) {

        output += data.employees[i].firstName + " " +
                  data.employees[i].lastName + "<br>";
    }

    document.getElementById("jsondata").innerHTML = output;
}

// Show all employee details
function showDetails() {

    var output = "";

    for (var i = 0; i < data.employees.length; i++) {

        output += "<strong>First name:</strong> " +
                  data.employees[i].firstName + "<br>";

        output += "<strong>Last name:</strong> " +
                  data.employees[i].lastName + "<br><br>";
    }

    document.getElementById("jsondata").innerHTML = output;
}


// ==========================================
// EXERCISE 2: FETCHING JSON FROM THE WEB
// ==========================================

var movieURL =
    "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";


// Function to load RAW JSON data
function loadRawData() {

    document.getElementById("rawdata").innerHTML =
        "Loading data...";

    fetch(movieURL)

        .then(function(response) {

            if (!response.ok) {
                throw new Error("Could not load data");
            }

            return response.text();
        })

        .then(function(data) {

            // Display raw JSON
            document.getElementById("rawdata").textContent = data;
        })

        .catch(function(error) {

            document.getElementById("rawdata").innerHTML =
                "Error loading data.";

            console.log(error);
        });
}


// Function to load and parse JSON data
function loadParsedData() {

    document.getElementById("rawdata").innerHTML =
        "Loading movie data...";

    fetch(movieURL)

        .then(function(response) {

            if (!response.ok) {
                throw new Error("Could not load data");
            }

            return response.json();
        })

        .then(function(data) {

            var output = "";

            output += "<table border='1'>";

            output += "<tr>";
            output += "<th>Poster</th>";
            output += "<th>Title</th>";
            output += "<th>Year</th>";
            output += "<th>Type</th>";
            output += "</tr>";


            for (var i = 0; i < data.Search.length; i++) {

                output += "<tr>";


                // Display movie poster
                output += "<td>";

                if (data.Search[i].Poster !== "N/A") {

                    output +=
                        "<img src='" +
                        data.Search[i].Poster +
                        "' width='80' alt='Movie poster'>";

                } else {

                    output += "No image";
                }

                output += "</td>";


                // Movie title
                output += "<td>" +
                          data.Search[i].Title +
                          "</td>";


                // Movie year
                output += "<td>" +
                          data.Search[i].Year +
                          "</td>";


                // Movie type
                output += "<td>" +
                          data.Search[i].Type +
                          "</td>";


                output += "</tr>";
            }

            output += "</table>";

            document.getElementById("rawdata").innerHTML = output;
        })

        .catch(function(error) {

            document.getElementById("rawdata").innerHTML =
                "Error loading movie data.";

            console.log(error);
        });
}



// ==========================================
// EXERCISE 3: OPENWEATHERMAP API
// ==========================================


// IMPORTANT:

var apiKey = "a5cd1156bfb400c2ce8e66b694414b1e";


// Function to fetch weather information
function getWeather(city) {

    var weatherDiv =
        document.getElementById("weatherdata");

    // Create API URL
    var weatherURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        encodeURIComponent(city) +
        "&units=metric&appid=" +
        apiKey;


    weatherDiv.innerHTML =
        "Loading weather data for " + city + "...";


    fetch(weatherURL)

        .then(function(response) {

            if (!response.ok) {

                if (response.status === 404) {
                    throw new Error("City not found.");
                }

                if (response.status === 401) {
                    throw new Error("Invalid API key.");
                }

                throw new Error("Could not load weather data.");
            }

            return response.json();
        })

        .then(function(data) {

            var output = "";

            output += "<h3>" +
                      data.name +
                      "</h3>";


            // Temperature
            output += "<p><strong>Temperature:</strong> " +
                      data.main.temp +
                      " °C</p>";


            // Humidity
            output += "<p><strong>Humidity:</strong> " +
                      data.main.humidity +
                      "%</p>";


            // Cloud cover
            output += "<p><strong>Cloud cover:</strong> " +
                      data.clouds.all +
                      "%</p>";


            // Weather description
            output += "<p><strong>Weather:</strong> " +
                      data.weather[0].description +
                      "</p>";


            // Weather icon
            var icon = data.weather[0].icon;

            var iconURL =
                "https://openweathermap.org/img/wn/" +
                icon +
                "@2x.png";


            output +=
                "<img src='" +
                iconURL +
                "' alt='Weather icon'>";


            weatherDiv.innerHTML = output;
        })

        .catch(function(error) {

            weatherDiv.innerHTML =
                "<p>" + error.message + "</p>";

            console.log(error);
        });
}



// ==========================================
// CONNECT BUTTONS TO FUNCTIONS
// ==========================================

// Get all buttons from your HTML
var buttons = document.querySelectorAll("button");


// Exercise 1 button 1
buttons[0].addEventListener("click", function() {

    showNames();

});


// Exercise 1 button 2
buttons[1].addEventListener("click", function() {

    showDetails();

});


// Exercise 2 button 1
buttons[2].addEventListener("click", function() {

    loadRawData();

});


// Exercise 2 button 2
buttons[3].addEventListener("click", function() {

    loadParsedData();

});


// Exercise 3 "Fetch data" button
buttons[4].addEventListener("click", function() {

    var city =
        document.getElementById("city").value;

    getWeather(city);

});



// ==========================================
// EXERCISE 3: CITY DROP-DOWN
// ==========================================

// Run when city selection changes
document.getElementById("city")
    .addEventListener("change", function() {

        var selectedCity = this.value;

        getWeather(selectedCity);

    });



// ==========================================
// EXERCISE 3: SEARCH BUTTON
// ==========================================

document.getElementById("search")
    .addEventListener("click", function() {

        var city =
            document.getElementById("citysearch")
                .value
                .trim();


        // Check if input is empty
        if (city === "") {

            document.getElementById("weatherdata").innerHTML =
                "Please enter a city name.";

            return;
        }


        getWeather(city);

    });



// ==========================================
// SEARCH USING ENTER KEY
// ==========================================

document.getElementById("citysearch")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            var city = this.value.trim();

            if (city !== "") {

                getWeather(city);

            }

        }

    });
