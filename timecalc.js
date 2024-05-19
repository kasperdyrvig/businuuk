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

const routeData = ["1", "X1", "2", "X2", "3"];
const stopData = [
    { id: "1", display: "1", name: "Eqalugalinnguit", position: "64.1887001,-51.7128939" },
    { id: "2", display: "2", name: "Nunngarut", position: "64.185182,-51.7051482" },
    { id: "3", display: "3", name: "Illorput", position: "64.1806788,-51.7069689" },
    { id: "4", display: "4", name: "Nigerleq", position: "64.1784781,-51.7106846" },
    { id: "5", display: "5", name: "Sangoriaq", position: "64.1816733,-51.7108667" },
    { id: "6", display: "6", name: "Nuniaffik", position: "64.1860343,-51.7105026" },
    { id: "70", display: "7", name: "Qajaasat (mod Nuussuaq)", position: "64.1916859,-51.7097386" },
    { id: "71", display: "7", name: "Qajaasat (mod Nuuk)", position: "64.1916859,-51.7097386" },
    { id: "8", display: "8", name: "Paarnat", position: "64.187966,-51.7212763" },
    { id: "9", display: "9", name: "Eqalugalinnguit Tasiat", position: "64.185276,-51.7206896" },
    { id: "10", display: "10", name: "H.J. Rinksvej", position: "64.1776196,-51.7339269" },
    { id: "11", display: "11", name: "Rasmuuseeqqap Aqq.", position: "64.1785416,-51.7403829" },
    { id: "12", display: "12", name: "Kuussuaq", position: "64.1771636,-51.7404361" },
    { id: "13", display: "13", name: "Nuup Qeqqa", position: "64.1744375,-51.7367254" },
    { id: "14", display: "14", name: "Katersortarfik", position: "64.1732623,-51.737402" },
    { id: "15", display: "15", name: "N.I.", position: "64.1718513,-51.7367524" },
    { id: "16", display: "16", name: "Qatserisut", position: "64.1718513,-51.7367524" },
    { id: "17", display: "17", name: "Sarfaannguit", position: "64.1793412,-51.7234424" },
    { id: "18", display: "18", name: "Akunnerit", position: "64.185276,-51.7206896" },
    { id: "23", display: "23", name: "Arsifik", position: "64.1771767,-51.7348127" },
    { id: "24", display: "24", name: "Narsarsuaq", position: "64.1772066,-51.7315979" },
    { id: "27", display: "27", name: "Tuujuk", position: "64.1711948,-51.7344789" },
    { id: "28", display: "28", name: "Røde etagehuse", position: "64.1711948,-51.7344789" },
    { id: "29", display: "29", name: "Jens Kreutzmannip. Aqq.", position: "64.1711948,-51.7344789" },
    { id: "30", display: "30", name: "Sanamut Aqq.", position: "64.1700196,-51.7359856" },
    { id: "31", display: "31", name: "Svend Jungep. Aqq.", position: "64.1700196,-51.7359856" },
    { id: "32", display: "32", name: "Sipisaq Kujalleq", position: "64.1684943,-51.7332159" },
    { id: "350", display: "35", name: "Qernertunnguanut (mod Nuussuaq)", position: "64.1889938,-51.7248637" },
    { id: "351", display: "35", name: "Qernertunnguanut (mod Nuuk)", position: "64.1889938,-51.7248637" },
    { id: "36", display: "36", name: "Atertaq", position: "64.188663,-51.7005409" },
    { id: "37", display: "37", name: "Ilimmarfik", position: "64.1912275,-51.696024" },
    { id: "38", display: "38", name: "Nukappiakuluk", position: "64.1953984,-51.6832138" },
    { id: "39", display: "39", name: "Nuuk Lufthavn", position: "64.1916647,-51.6756845" },
    { id: "40", display: "40", name: "Air Greenland adm.", position: "64.1901139,-51.6745258" },
    { id: "41", display: "41", name: "Asiarpak", position: "64.1736119,-51.6695683" },
    { id: "42", display: "42", name: "Isikkivik" },
    { id: "44", display: "44", name: "Isikkivik (mod Nuuk)" },
    { id: "46", display: "46", name: "Qattaaq", position: "64.185024,-51.7046705" },
    { id: "47", display: "47", name: "Naluttarfik Malik", position: "64.185024,-51.7046705" },
    { id: "48", display: "48", name: "Ilimmarfik", position: "64.1912275,-51.696024" },
    { id: "49", display: "49", name: "Manguaraq", position: "64.1894572,-51.6960991" },
    { id: "50", display: "50", name: "Tikiusaaq", position: "64.1736119,-51.6695683" },
    { id: "52", display: "52", name: "400-rtalik", position: "64.1793412,-51.7234424" },
    { id: "54", display: "54", name: "Atuarfik Hans Lynge", position: "64.1692592,-51.6699001" },
    { id: "56", display: "56", name: "Suloraq", position: "64.1653353,-51.6761817" },
    { id: "58", display: "58", name: "Nuuk Center", position: "64.1784755,-51.7408154" },
    { id: "59", display: "59", name: "Narsarviaq", position: "64.1828066,-51.7049282" },
    { id: "60", display: "60", name: "Igimaq", position: "64.1677585,-51.6783817" },
    { id: "61", display: "61", name: "Unaaq", position: "64.1700691,-51.6700215" },
    { id: "62", display: "62", name: "Kommuneqarfik", position: "64.1769488,-51.7372953" }
];
const routes = {
    "1": {
        stops: [18, 1, 47, 50, 54, 56, 57, 60, 61, 41, 46, 8, 9, 52, 28, 27, 62, 58, 24],
        driveTime: [0, 1, 3, 3, 2, 2, 2, 1, 2, 2, 3, 2, 1, 2, 2, 1, 4, 2, 3],
        drivingHours: {
            holiday: [
                { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                { startHour: 11, startMinute: 9, endHour: 17, endMinute: 47, interval: 40 }
            ],
            weekend: [
                { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                { startHour: 8, startMinute: 9, endHour: 21, endMinute: 7, interval: 40 }
            ],
            default: [
                { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                { startHour: 6, startMinute: 29, endHour: 21, endMinute: 7, interval: 40 },
                { startHour: 7, startMinute: 19, endHour: 7, endMinute: 57 }
            ]
        }
    },
    "X1": {
        stops: [18, 1, 47, 50, 54, 41, 46, 8, 9, 10, 62, 58, 24],
        driveTime: [0, 1, 3, 3, 2, 3, 4, 2, 1, 2, 3, 2, 2],
        drivingHours: {
            weekday: [
                { startHour: 7, startMinute: 4, endHour: 9, endMinute: 32, interval: 30 },
                { startHour: 7, startMinute: 17, endHour: 9, endMinute: 17, interval: 30 },
                { startHour: 12, startMinute: 34, endHour: 17, endMinute: 53, interval: 30 },
                { startHour: 14, startMinute: 49, endHour: 18, endMinute: 8, interval: 30 }
            ]
        }
    },
    "2": {
        stops: [17, 18, 70, 1, 36, 48, 49, 19, 2, 59, 3, 4, 5, 6, 71, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        driveTime: [0, 2, 3, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 3, 2, 1, 2, 2, 1, 3, 1, 2, 1],
        drivingHours: {
            holiday: [
                { startHour: 7, startMinute: 20, endHour: 27, endMinute: 58, interval: 40 },
                { startHour: 11, startMinute: 0, endHour: 20, endMinute: 58, interval: 40 }
            ],
            weekend: [
                { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                { startHour: 9, startMinute: 0, endHour: 20, endMinute: 58, interval: 40 }
            ],
            default: [
                { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                { startHour: 6, startMinute: 20, endHour: 20, endMinute: 58, interval: 40 }
            ]
        }
    },
    "X2": {
        stops: [17, 18, 1, 2, 59, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        driveTime: [0, 2, 1, 2, 1, 1, 1, 2, 2, 3, 1, 2, 2, 1, 3, 1, 2, 1, 2],
        drivingHours: {
            weekday: [
                { startHour: 7, startMinute: 18, endHour: 9, endMinute: 16, interval: 30 },
                { startHour: 7, startMinute: 33, endHour: 9, endMinute: 1, interval: 30 },
                { startHour: 11, startMinute: 3, endHour: 18, endMinute: 1, interval: 30 },
                { startHour: 12, startMinute: 48, endHour: 17, endMinute: 16, interval: 30 }
            ]
        }
    },
    "3": {
        stops: [10, 11, 12, 13, 14, 15, 16, 17, 18, 350, 1, 2, 59, 3, 4, 5, 6, 36, 37, 38, 42, 39, 40, 44, 43, 48, 49, 19, 8, 351, 9],
        driveTime: [0, 2, 1, 3, 1, 1, 2, 2, 2, 3, 4, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 2, 2, 1, 1, 2, 3, 2],
        drivingHours: {
            holiday: [],
            weekend: [
                { startHour: 12, startMinute: 26, endHour: 16, endMinute: 23, interval: 60 }
            ],
            default: [
                { startHour: 6, startMinute: 16, endHour: 8, endMinute: 13, interval: 60 },
                { startHour: 8, startMinute: 26, endHour: 18, endMinute: 23, interval: 60 }
            ]
        }
    }
};

// Function to navigate back to the previous page
function goBack() {
    window.history.back();
}

// Function to set a favorite stop
function setFavorite() {
    // Store favorite in local storage
    selectedStop = document.getElementById("stopPicker").value;
    localStorage.setItem("favoriteStop", selectedStop);
    console.log("Favorite set:", selectedStop);

    // Highlight the favorite button
    document.getElementById("favoriteBtn").classList.add("active");
}

// Function to check if the selected stop is the favorite stop
function checkFavorite() {
    // Get selected values
    selectedStop = document.getElementById("stopPicker").value;

    // Get stored values
    const storedFavorite = localStorage.getItem("favoriteStop");

    // Highlight or unhighlight the button based on match
    const favoriteBtn = document.getElementById("favoriteBtn");
    if (selectedStop === storedFavorite) {
        favoriteBtn.classList.add("active");
        console.log("Selection and stored favorite match:", selectedStop);
    } else {
        favoriteBtn.classList.remove("active");
        console.log("Selection and stored favorite do not match:", selectedStop);
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
        resultElement.innerHTML += `<div class=\"route-container\">
            <div class=\"route-body\">
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
function setDayType() {
    //Determine day type
    switch (currentTime.getDay()) {
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
    resultElement.innerHTML += `<div class=\"route-container\">
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

    dropdownEl.appendChild(fragment);
}

function resetDropdown(dropdownEl) {
    dropdownEl.innerHTML = "";
}

function loadDefault() {
    //Get stored values
    const s = localStorage.getItem("favoriteStop");

    populateDropdown();

    if (s) {
        console.log(`Favorite found: ${s}`);
        document.getElementById("stopPicker").value = s;
        checkFavorite();
    }

    getNextBus();
}
