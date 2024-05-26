//Global variables
const stops = [];
const driveTime = [];
const drivingHours = [];
let selectedStop;
let routeResults;
let currentRoute;
let currentDayType = "";
const resultElement = document.getElementById("result");
let currentTime;

const routeData = ["1", "2", "X2", "3"];
const stopData = [
    { id: "1", display: "1", name: "Eqalugalinnguit", lat: "64.1887001", lon: "-51.7128939" },
    { id: "2", display: "2", name: "Nunngarut", lat: "64.185182", lon: "-51.7051482" },
    { id: "3", display: "3", name: "Illorput", lat: "64.1806788", lon: "-51.7069689" },
    { id: "4", display: "4", name: "Nigerleq", lat: "64.1784781", lon: "-51.7106846" },
    { id: "5", display: "5", name: "Sangoriaq", lat: "64.1816733", lon: "-51.7108667" },
    { id: "6", display: "6", name: "Nuniaffik", lat: "64.1860343", lon: "-51.7105026" },
    { id: "70", display: "7", name: "Qajaasat (mod Nuussuaq)", lat: "64.1916859", lon: "-51.7097386" },
    { id: "71", display: "7", name: "Qajaasat (mod Nuuk)", lat: "64.1916859", lon: "-51.7097386" },
    { id: "8", display: "8", name: "Paarnat", lat: "64.187966", lon: "-51.7212763" },
    { id: "9", display: "9", name: "Eqalugalinnguit Tasiat", lat: "64.185276", lon: "-51.7206896" },
    { id: "10", display: "10", name: "H.J. Rinksvej", lat: "64.1776196", lon: "-51.7339269" },
    { id: "11", display: "11", name: "Rasmuuseeqqap Aqq.", lat: "64.1785416", lon: "-51.7403829" },
    { id: "12", display: "12", name: "Kuussuaq", lat: "64.1771636", lon: "-51.7404361" },
    { id: "13", display: "13", name: "Nuup Qeqqa", lat: "64.1744375", lon: "-51.7367254" },
    { id: "14", display: "14", name: "Katersortarfik", lat: "64.1732623", lon: "-51.737402" },
    { id: "15", display: "15", name: "N.I.", lat: "64.1718513", lon: "-51.7367524" },
    { id: "16", display: "16", name: "Qatserisut", lat: "64.1718513", lon: "-51.7367524" },
    { id: "17", display: "17", name: "Sarfaannguit", lat: "64.1793412", lon: "-51.7234424" },
    { id: "18", display: "18", name: "Akunnerit", lat: "64.185276", lon: "-51.7206896" },
    { id: "24", display: "24", name: "Narsarsuaq", lat: "64.1772066", lon: "-51.7315979" },
    { id: "27", display: "27", name: "Tuujuk", lat: "64.1711948", lon: "-51.7344789" },
    { id: "28", display: "28", name: "Røde etagehuse", lat: "64.1711948", lon: "-51.7344789" },
    { id: "350", display: "35", name: "Qernertunnguanut (mod Nuussuaq)", lat: "64.1889938", lon: "-51.7248637" },
    { id: "351", display: "35", name: "Qernertunnguanut (mod Nuuk)", lat: "64.1889938", lon: "-51.7248637" },
    { id: "36", display: "36", name: "Atertaq", lat: "64.188663", lon: "-51.7005409" },
    { id: "39", display: "39", name: "Nuuk Lufthavn", lat: "64.1916647", lon: "-51.6756845" },
    { id: "40", display: "40", name: "Air Greenland adm.", lat: "64.1901139", lon: "-51.6745258" },
    { id: "41", display: "41", name: "Asiarpak", lat: "64.1736119", lon: "-51.6695683" },
    { id: "46", display: "46", name: "Qattaaq", lat: "64.185024", lon: "-51.7046705" },
    { id: "47", display: "47", name: "Naluttarfik Malik", lat: "64.185024", lon: "-51.7046705" },
    { id: "48", display: "48", name: "Ilimmarfik", lat: "64.1912275", lon: "-51.696024" },
    { id: "49", display: "49", name: "Manguaraq", lat: "64.1894572", lon: "-51.6960991" },
    { id: "50", display: "50", name: "Tikiusaaq", lat: "64.1736119", lon: "-51.6695683" },
    { id: "52", display: "52", name: "400-rtalik", lat: "64.1793412", lon: "-51.7234424" },
    { id: "54", display: "54", name: "Atuarfik Hans Lynge", lat: "64.1692592", lon: "-51.6699001" },
    { id: "56", display: "56", name: "Suloraq", lat: "64.1653353", lon: "-51.6761817" },
    { id: "57", display: "57", name: "Unaaq Kitaa", lat: "64.164898", lon: "-51.678978" },
    { id: "58", display: "58", name: "Nuuk Center", lat: "64.1784755", lon: "-51.7408154" },
    { id: "59", display: "59", name: "Narsarviaq", lat: "64.1828066", lon: "-51.7049282" },
    { id: "60", display: "60", name: "Igimaq", lat: "64.1677585", lon: "-51.6783817" },
    { id: "61", display: "61", name: "Unaaq", lat: "64.1700691", lon: "-51.6700215" },
    { id: "62", display: "62", name: "Kommuneqarfik", lat: "64.1769488", lon: "-51.7372953" },
    { id: "63", display: "63", name: "Maligiaq", lat: "64.184623", lon: "-51.700291" },
    { id: "64", display: "64", name: "Pukuffik", lat: "64.183149", lon: "-51.695977" },
    { id: "65", display: "65", name: "Munck camp", lat: "64.187580", lon: "-51.673871" }
];
const routes = {
    "1": {
        name: "Rute 1",
        description: "Nuuk–Qinngorput",
        stops: [18, 1, 47, 63, 50, 54, 56, 57, 60, 61, 41, 64, 46, 8, 9, 52, 28, 27, 62, 58, 24],
        driveTime: [0, 1, 3, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 4, 2, 6, 2],
        drivingHours: {
            holiday: [
                { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                { startHour: 11, startMinute: 9, endHour: 17, endMinute: 47, interval: 40 }
            ],
            weekend: [
                { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                { startHour: 9, startMinute: 9, endHour: 17, endMinute: 47, interval: 40 }
            ],
            weekday: [
                { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                { startHour: 6, startMinute: 29, endHour: 21, endMinute: 7, interval: 40 },
                { startHour: 6, startMinute: 59, endHour: 8, endMinute: 57, interval: 40 },
                { startHour: 7, startMinute: 19, endHour: 9, endMinute: 17, interval: 40 },
                { startHour: 12, startMinute: 39, endHour: 17, endMinute: 17, interval: 40 },
                { startHour: 14, startMinute: 59, endHour: 17, endMinute: 37, interval: 40 }
            ]
        }
    },
    "2": {
        name: "Rute 2",
        description: "Nuuk–Nuussuaq",
        stops: [17, 18, 70, 1, 36, 48, 49, 19, 2, 59, 3, 4, 5, 6, 71, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        driveTime: [0, 2, 3, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 1, 2, 2, 1, 3, 1, 2, 1, 2],
        drivingHours: {
            holiday: [
                { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                { startHour: 11, startMinute: 0, endHour: 20, endMinute: 58, interval: 40 }
            ],
            weekend: [
                { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                { startHour: 9, startMinute: 0, endHour: 20, endMinute: 58, interval: 40 }
            ],
            weekday: [
                { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                { startHour: 6, startMinute: 20, endHour: 20, endMinute: 58, interval: 40 }
            ]
        }
    },
    "X2": {
        name: "Rute X2",
        description: "Nuuk–Nuussuaq Express",
        stops: [17, 18, 1, 2, 59, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        driveTime: [0, 2, 1, 2, 1, 1, 1, 2, 2, 3, 1, 2, 2, 1, 3, 1, 2, 2, 1],
        drivingHours: {
            weekday: [
                { startHour: 7, startMinute: 18, endHour: 9, endMinute: 16, interval: 30 },
                { startHour: 7, startMinute: 33, endHour: 9, endMinute: 1, interval: 30 },
                { startHour: 12, startMinute: 48, endHour: 18, endMinute: 1, interval: 30 },
                { startHour: 13, startMinute: 3, endHour: 17, endMinute: 16, interval: 30 }
            ]
        }
    },
    "3": {
        name: "Rute 3",
        description: "Nuuk–Qernertunnguanut–Nuussuaq–Airport",
        stops: [10, 11, 12, 13, 14, 15, 16, 17, 18, 350, 1, 2, 59, 3, 4, 5, 6, 36, 37, 38, 42, 39, 40, 44, 43, 48, 49, 19, 8, 351, 9],
        driveTime:[0, 2, 1, 2, 1, 1, 2, 2, 2, 3, 3, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 5, 1, 1, 2, 6, 1, 1, 2, 2, 3],
        drivingHours: {
            weekend: [
                { startHour: 12, startMinute: 26, endHour: 16, endMinute: 23, interval: 60 }
            ],
            weekday: [
                { startHour: 6, startMinute: 16, endHour: 8, endMinute: 23, interval: 60 },
                { startHour: 8, startMinute: 26, endHour: 17, endMinute: 23, interval: 60 }
            ]
        }
    }
};
const holidayDates = [
    "01-01", // 1. januar
    "01-06", // 6. januar (hvis det er i hverdagene) efter kl. 12
    "05-01", // 1. maj (hvis det er i hverdagene) efter kl. 12
    "06-21", // 21. juni
    "12-24", // 24. december indtil kl. 19
    "12-25", // 25. december
    "12-26", // 26. december
    "12-31", // 31. december indtil kl. 19
    "03-28", // Skærtorsdag 2024
    "03-29", // Langfredag 2024
    "03-31", // Påskedag 2024
    "04-01", // 2. Påskedag 2024
    "04-26", // Store Bededag 2024
    "05-09", // Kristi Himmelfartsdag 2024
    "05-19", // Pinsedag 2024
    "05-20",  // 2. Pinsedag 2024
    "04-17", // Skærtorsdag 2025
    "04-18", // Langfredag 2025
    "04-20", // Påskedag 2025
    "04-21", // 2. Påskedag 2025
    "05-16", // Store Bededag 2025
    "05-29", // Kristi Himmelfartsdag 2025
    "06-08", // Pinsedag 2025
    "06-09"  // 2. Pinsedag 2025
];

// Function to set a favorite stop
function setFavorite() {
    // Store favorite in local storage
    selectedStop = parseInt(document.getElementById("stopPicker").value);

    // Get current favorites or create new if does not exist
    let favorites = JSON.parse(localStorage.getItem("favoriteStop")) || [];

    // Check if the selected stop is already a favorite
    if (!favorites.includes(selectedStop)) {
        // Add selected stop to favorites
        favorites.push(selectedStop);
        console.log("Favorite added:", selectedStop);
    } else {
        // Remove the selected stop from favorites
        favorites = favorites.filter(function(stop) {
            return stop !== selectedStop;
        });
        console.log("Favorite removed:", selectedStop);
    }

    // Store updated favorites array in local storage
    localStorage.setItem("favoriteStop", JSON.stringify(favorites));
    
    // Highlight the favorite button if the stop is added or remove highlight if removed
    if (favorites.includes(selectedStop)) {
        document.getElementById("favoriteBtn").classList.add("active");
    } else {
        document.getElementById("favoriteBtn").classList.remove("active");
    }
}

// Function to check if the selected stop is the favorite stop
function checkFavorite() {
    // Get selected values
    selectedStop = parseInt(document.getElementById("stopPicker").value);

    // Get stored values
    const favorites = localStorage.getItem("favoriteStop");

    if(favorites) {
        // Highlight or unhighlight the button based on match
        const favoriteBtn = document.getElementById("favoriteBtn");
        if (favorites.includes(selectedStop)) {
            favoriteBtn.classList.add("active");
            console.log("Selection and stored favorite match:", selectedStop);
        } else {
            favoriteBtn.classList.remove("active");
            console.log("Selection and stored favorite do not match:", selectedStop);
        }
    }
}

// Main function to get the next bus
function getNextBus() {
    routeResults = 0;
    checkFavorite();

    // Set timestamp
    currentTime = new Date();

    // Get selection
    selectedStop = parseInt(document.getElementById("stopPicker").value);
    console.log(`Stop ${selectedStop} selected.`);

    // Reset HTML
    resultElement.innerHTML = "";

    // Get day type
    currentDayType = setDayType();
    console.log(currentDayType);

    // Loop routes
    routeData.forEach(route => {
        // Determine if route is active
        if (setVariables(route)) {

            //Determine if selected stop is in route
            if (stops.includes(selectedStop)) {
                console.log(`Found in route ${route}`);
                routeResults++;

                // Initiate calculation
                currentRoute = route;
                estimateRoute();
            } else {
                // Not found in route
                console.log(`Not found in route ${route}`);
            }
        } else {
            // Route not active
            console.log(`${route} was not active`);
        }
    });

    // Display a message if no routes are found
    if (routeResults === 0) {
        resultElement.innerHTML += `<div class="route-container">
            <div class="route-body">
                <strong class="route-time-left">Ingen ruter kører her p.t.</strong>
            </div>
        </div>`;
    }
}

// Function to set variables for the selected route
function setVariables(route) {
    const routeInfo = routes[route];
    if (!routeInfo) return false;
    console.log(`Checking route ${currentRoute}.`);
    stops.length = 0;
    driveTime.length = 0;
    drivingHours.length = 0;
    stops.push(...routeInfo.stops);
    driveTime.push(...routeInfo.driveTime);
    drivingHours.push(...routeInfo.drivingHours[currentDayType] || []);
    return drivingHours.length > 0;
}

// Function to determine the type of day
function setDayType(date = new Date()) {
    // Check if today is a holiday
    const formattedDate = ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    if (holidayDates.includes(formattedDate)) {
        return 'holiday';
    }

    // Otherwise check what day it is
    switch (date.getDay()) {
        case 0:
            return "holiday";  //Sunday and other holidays
        case 6:
            return "weekend";  //Saturday
        default:
            return "weekday";  //All other days
    }
}

// Function to estimate the route timings
function estimateRoute() {
    // Prepare timeslot start and end times
    var timeSlot = [];

    // Find current timeslots
    for (var i = 0; i < drivingHours.length; i++) {
        var startTime = new Date();
        startTime.setHours(drivingHours[i].startHour, drivingHours[i].startMinute, 0, 0);
        var endTime = new Date();
        endTime.setHours(drivingHours[i].endHour, drivingHours[i].endMinute, 0, 0);

        if (currentTime >= startTime && currentTime <= endTime) {
            timeSlot.push(i);
        }
    }

    if (timeSlot.length === 0) {
        // No timeslot found
        console.log("Stopped driving");
        routeResults--;
        // printResult("Kører ikke mere i dag");
    } else {
        // Timeslot found
        console.log("Active buses found: " + timeSlot.length);

        var departures = timeSlot.map(setTimeslot);
        nextBus(departures);
    }
}

function setTimeslot(timeSlot) {
    const currentStart = new Date();
    const currentEnd = new Date();

    // Set timeslot start and end times
    currentStart.setHours(drivingHours[timeSlot].startHour, drivingHours[timeSlot].startMinute, 0, 0);
    currentEnd.setHours(drivingHours[timeSlot].endHour, drivingHours[timeSlot].endMinute, 0, 0);
    console.log(`Timeslot start time: ${currentStart.toTimeString()}`);
    console.log(`Timeslot end time: ${currentEnd.toTimeString()}`);

    // Find index of stop in route
    const stopIndex = stops.indexOf(parseInt(selectedStop));
    console.log(`Selected stop is index ${stopIndex} in route`);

    if (stopIndex > -1) {
        // Stop found in route

        // Initiate time table calculation
        const nextDeparture = CreateTimeTable(stopIndex, currentStart, currentEnd, drivingHours[timeSlot].interval);

        if (nextDeparture !== null) {
            console.log(nextDeparture);
            return nextDeparture;
        } else {
            // No more departures. Try next timeslot, if available
            console.log("No more departures");
            return null;
        }
    } else {
        // Stop not found in route
        console.log("This stop is not in the route");
        printResult("Dette stop er ikke på ruten");
        return null;
    }
}

function CreateTimeTable(stopIndex, startHour, endHour, interval) {
    const startTime = new Date(startHour);

    // Find first departure time from selected stop
    for (var i = 0; i <= stopIndex; i++) {
        startTime.setMinutes(startTime.getMinutes() + driveTime[i]);
    }

    console.log("First departure is " + startTime.toTimeString());

    // Calculate next departure after the current time
    while (startTime <= endHour) {
        if (startTime > currentTime) {
            return startTime;
        }
        startTime.setMinutes(startTime.getMinutes() + interval);
    }

    // If calculation extends endHour
    return null;
}


function nextBus(departures) {
    console.log(`Departures found: ${departures.length}`);

    // Sort the departure times if needed
    departures.sort((a, b) => a - b);

    var departureTimes = [];
    var departureMinutes = [];

    departures.forEach(departure => {
        if (departure !== null) {
            var timeDiff = departure - currentTime;
            console.log("Difference: " + timeDiff);

            var minutes = Math.round(timeDiff / 60000);
            departureMinutes.push(minutes);
            departureTimes.push(departure);
        }
    });

    pushElement(departureMinutes, departureTimes);
}

function pushElement(departureMinutes, departureTimes) {
    const pluralize = (count, singular, plural) => (count === 1 ? singular : plural);
    const formatTime = time => `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

    const stringMinutes = pluralize(departureMinutes[0], 'minut', 'minutter');

    resultElement.innerHTML += `<div class="route-container">
            <div class="route-name route-${currentRoute}">${currentRoute}</div>
            <div class="route-body">
                <strong class="route-time-left">${departureMinutes[0]} ${stringMinutes}</strong>
                <small class="route-next-stop">
                    ${formatTime(departureTimes[0])}
                    ${departureTimes.length > 1 ? ` og igen ${formatTime(departureTimes[1])}` : ''}
</small>
            </div>
        </div>`;
}

function printResult(msg) {
    resultElement.innerHTML += `<div class="route-container">
        <div class="route-name route-${currentRoute}">${currentRoute}</div>
            <div class="route-body">
                <strong class="route-time-left">${msg}</strong>
            </div>
        </div>`;

    resultElement.innerHTML += rEl;
}

function populateDropdown() {
    const dropdownEl = document.getElementById("stopPicker");

    resetDropdown(dropdownEl);

    console.log(`Adding all ${stopData.length} stops`);

    const fragment = document.createDocumentFragment();

    stopData.forEach(function(opt) {
        let el = document.createElement("option");
        el.textContent = opt.display + " " + opt.name;
        el.value = opt.id;
        fragment.appendChild(el);
    });

    const storedFavorites = JSON.parse(localStorage.getItem("favoriteStop"));

    if (storedFavorites) {
        let favGroup = document.createElement("optgroup");
        favGroup.label = "Mine stoppesteder";
        
        storedFavorites.forEach(fav => {
            const favStop = stopData.find(stop => stop.id === String(fav));
            let el = document.createElement("option");
            el.textContent = favStop.display + " " + favStop.name;
            el.value = favStop.id;
            favGroup.appendChild(el);
        });
        
        dropdownEl.appendChild(favGroup);
    }

    let dropdownGroup = document.createElement("optgroup");
    dropdownGroup.label = "Alle stoppesteder";
    dropdownGroup.appendChild(fragment);
    dropdownEl.appendChild(dropdownGroup);
}

function setDropdown(stopId) {
    const dropdownEl = document.getElementById("stopPicker");
    dropdownEl.value = stopId;
    checkFavorite();
}

function resetDropdown(dropdownEl) {
    dropdownEl.innerHTML = "";
}

function loadDefault() {
    //Get stored values
    const s = JSON.parse(localStorage.getItem("favoriteStop"));

    populateDropdown();

    if (s) {
        console.log(`Favorite found: ${s[0]}`);
        document.getElementById("stopPicker").value = s[0];
        checkFavorite();
    }

    getNextBus();
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Jordens radius i meter
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    const distance = R * c; // Afstand i kilometer
    return distance;
}

function findNearestStop(userLat, userLon) {
    let nearestStop = null;
    let shortestDistance = Infinity;

    stopData.forEach(stop => {
        const distance = calculateDistance(userLat, userLon, stop.lat, stop.lon);
        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestStop = stop;
        }
    });

    return nearestStop;
}

function getNearestStop() {
    navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        const nearestStop = findNearestStop(userLat, userLon);
        if (nearestStop) {
            setDropdown(nearestStop.id);
            getNextBus();
        } else {
            resultElement.innerHTML = "Ingen stoppesteder fundet.";
        }
    }, (error) => {
        console.error('Error getting location:', error);
        //document.getElementById('dataContainer').innerHTML = 'Fejl ved hentning af position: ' + error.message;
    });
}

function loadRoutes() {
    if ("content" in document.createElement("template")) {
        const routesList = document.getElementById("routesList");
        if(routesList) {
            const listItemTemplate = document.getElementById("routesListItemTemp");
            for (const key in routes) {
                if (routes.hasOwnProperty(key)) {
                    const clon = listItemTemplate.content.cloneNode(true);
                    let li = clon.querySelector("a");
                    const route = routes[key];
                    li.querySelector(".route-name").classList.add("route-" + key);
                    li.querySelector(".route-name").textContent = key;
                    li.querySelector(".route-desc").textContent = route.description;
                    li.setAttribute("href", "route.html?route=" + key);
                    routesList.appendChild(clon);
                }
            }
        }
    }
    else {
        console.log("Templates virker ikke");
    }
}

function getSelectedRouteFromQueryString() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('route') || "X2"; // Default til "X2" hvis ingen parameter
}

function loadRouteDetails() {
    const selectedRoute = getSelectedRouteFromQueryString();

    // Check if the route exists
    if (!routes[selectedRoute]) {
        console.error(`Route ${selectedRoute} not found`);
        return;
    }

    document.querySelector(".route-name").textContent = selectedRoute;
    document.querySelector(".route-name").classList.add("route-" + selectedRoute);
    document.querySelector(".line").classList.add("line-" + selectedRoute);
    document.querySelector(".route-desc").textContent = routes[selectedRoute].description;

    const lineItemTemp = document.getElementById("lineStopDetailTemplate");
    const lineEl = document.querySelector(".line");

    routes[selectedRoute].stops.forEach(lineItem => {
        const stop = stopData.find(stop => stop.id === String(lineItem));
        if (stop) {
            const clone = lineItemTemp.content.cloneNode(true);
            clone.querySelector(".line-stop-number").textContent = stop.display;
            clone.querySelector(".line-stop-name").textContent = stop.name;
            lineEl.appendChild(clone);
        } else {
            console.error(`Stop with ID ${lineItem} not found`);
        }
    });
}