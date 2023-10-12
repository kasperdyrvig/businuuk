//Global variables
var stops = new Array();
var driveTime = new Array();
var drivingHours = new Array();
var selectedStop;
var routeResults;
var currentRoute;
var currentDayType = "";
var print = document.getElementById("result");
var currentTime;

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

/*
 * 0. Load stops.
 * 1. Set favorite stop.
 *      Load favorite stop.
 * 2. Get stop.
 * 3. Get possible routes.
 * 4. Find index of stop in route each route.
 *      Find active busses
 *      Create time tables for active busses.
 *      Based on interval setting, create times for stop until next departure is found.
 *      If no future departure times, try next timeslot (if available).
 *      Check if next interval is outside timeslot to discover is this is last round.
 * 5. Present each result.
 */

function goBack() {
    window.history.back();
}

function setFavorite() {
    //Store favorite in local storage
    localStorage.favoriteStop = document.getElementById("stopPicker").value;
    console.log("Fovirite set");

    document.getElementById("favoriteBtn").setAttribute("class", "button-star active");
}

function checkFavorite() {
    //Get selected values
    selectedStop = document.getElementById("stopPicker").value;

    //Get stored values
    var s = localStorage.getItem("favoriteStop");

    if (selectedStop == s) {
        //If they match, highlight the button
        document.getElementById("favoriteBtn").setAttribute("class", "button-star active");
        console.log("Selection and stored favorite match");
    } else {
        //If they do not match, unhighlight the button
        document.getElementById("favoriteBtn").setAttribute("class", "button-star");
        console.log("Selection and stored favorite do not match");
    }
}

function getNextBus() {
    //Clear console
    console.clear();
    routeResults = 0;
    checkFavorite();

    //Set timestamp
    currentTime = new Date();

    //Get selection
    selectedStop = document.getElementById("stopPicker").value;
    console.log("Stop " + selectedStop + " selected.");

    //Reset HTML
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    //Get day type
    currentDayType = setDayType();
    console.log(currentDayType);

    //Loop routes
    for (var i = 0; i < routeData.length; i++) {

        //Determine if route is active
        if (setVariables(routeData[i])) {

            //Determine if selected stop is in route
            if (stops.indexOf(parseInt(selectedStop)) > -1) {
                console.log("Found in route " + routeData[i]);
                routeResults++;

                //Initiate calculation
                currentRoute = routeData[i];
                estimateRoute();
            } else {
                //Not found in route
                console.log("Not found in route " + routeData[i]);
            }
        } else {
            //Route not active
            console.log(routeData[i] + " was not active");
            continue;
        }
    }

    if (routeResults == 0) {
        var rEl = "<div class=\"route-container\">";
        rEl += "<div class=\"route-body\">";
        rEl += "<strong class=\"route-time-left\">" + "Ingen ruter kører her p.t." + "</strong>";
        rEl += "</div>";
        rEl += "</div>";

        resultElement.innerHTML += rEl;
    }
}

function setVariables(currentRoute) {
    switch (currentRoute) {
        case "1":
            console.log("Checking route 1.");
            stops = [18, 1, 47, 50, 54, 56, 57, 60, 61, 41, 46, 8, 9, 52, 28, 27, 62, 58, 24];
            driveTime = [0, 1, 3, 3, 2, 2, 2, 1, 2, 2, 3, 2, 1, 2, 2, 1, 4, 2, 3]; //Add zero as first
            switch (currentDayType) {
                case "holiday":
                    drivingHours = [
                        { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                        { startHour: 11, startMinute: 9, endHour: 17, endMinute: 47, interval: 40 }
                    ];
                    return true;
                case "weekend":
                    drivingHours = [
                        { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                        { startHour: 8, startMinute: 9, endHour: 21, endMinute: 7, interval: 40 }
                    ];
                    return true;
                default:
                    drivingHours = [
                        { startHour: 6, startMinute: 9, endHour: 24, endMinute: 7, interval: 40 },
                        { startHour: 6, startMinute: 29, endHour: 21, endMinute: 7, interval: 40 },
                        { startHour: 7, startMinute: 19, endHour: 7, endMinute: 57 }
                    ];
                    return true;
            }
        case "X1":
            console.log("Checking route X1.");
            if (currentDayType == "weekday") {
                stops = [18, 1, 47, 50, 54, 41, 46, 8, 9, 10, 62, 58, 24];
                driveTime = [0, 1, 3, 3, 2, 3, 4, 2, 1, 2, 3, 2, 2]; //Add zero as first
                drivingHours = [
                    { startHour: 7, startMinute: 4, endHour: 9, endMinute: 32, interval: 30 },
                    { startHour: 7, startMinute: 17, endHour: 9, endMinute: 17, interval: 30 },
                    { startHour: 12, startMinute: 34, endHour: 17, endMinute: 53, interval: 30 },
                    { startHour: 14, startMinute: 49, endHour: 18, endMinute: 8, interval: 30 }
                ];
                return true;
            } else {
                return false;
            }
        case "2":
            console.log("Checking route 2.");
            stops = [17, 18, 70, 1, 36, 48, 49, 19, 2, 59, 3, 4, 5, 6, 71, 8, 9, 10, 11, 12, 13, 14, 15, 16];
            driveTime = [0, 2, 3, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 3, 2, 1, 2, 2, 1, 3, 1, 2, 1]; //Add zero as first
            switch (currentDayType) {
                case "holiday":
                    drivingHours = [
                        { startHour: 7, startMinute: 20, endHour: 27, endMinute: 58, interval: 40 },
                        { startHour: 11, startMinute: 0, endHour: 20, endMinute: 58, interval: 40 }
                    ];
                    return true;
                case "weekend":
                    drivingHours = [
                        { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                        { startHour: 9, startMinute: 0, endHour: 20, endMinute: 58, interval: 40 }
                    ];
                    return true;
                default:
                    drivingHours = [
                        { startHour: 6, startMinute: 0, endHour: 23, endMinute: 58, interval: 40 },
                        { startHour: 6, startMinute: 20, endHour: 20, endMinute: 58, interval: 40 }
                    ];
                    return true;
            }
        case "X2":
            console.log("Checking route X2.");
            if (currentDayType == "weekday") {
                stops = [17, 18, 1, 2, 59, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];
                driveTime = [0, 2, 1, 2, 1, 1, 1, 2, 2, 3, 1, 2, 2, 1, 3, 1, 2, 1, 2]; //Add zero as first
                drivingHours = [
                    { startHour: 7, startMinute: 18, endHour: 9, endMinute: 16, interval: 30 },
                    { startHour: 7, startMinute: 33, endHour: 9, endMinute: 1, interval: 30 },
                    { startHour: 11, startMinute: 3, endHour: 18, endMinute: 1, interval: 30 },
                    { startHour: 12, startMinute: 48, endHour: 17, endMinute: 16, interval: 30 }
                ];
                return true;
            } else {
                return false;
            }
        case "3":
            console.log("Checking route 3.");
            stops = [10, 11, 12, 13, 14, 15, 16, 17, 18, 350, 1, 2, 59, 3, 4, 5, 6, 36, 37, 38, 42, 39, 40, 44, 43, 48, 49, 19, 8, 351, 9];
            driveTime = [0, 2, 1, 3, 1, 1, 2, 2, 2, 3, 4, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 2, 2, 1, 1, 2, 3, 2]; //Add zero as first
            switch (currentDayType) {
                case "holiday":
                    return false;
                case "weekend":
                    drivingHours = [
                        { startHour: 12, startMinute: 26, endHour: 16, endMinute: 23, interval: 60 }
                    ];
                    return true;
                default:
                    drivingHours = [
                        { startHour: 6, startMinute: 16, endHour: 8, endMinute: 13, interval: 60 },
                        { startHour: 8, startMinute: 26, endHour: 18, endMinute: 23, interval: 60 }
                    ];
                    return true;
            }
        default:
            return false;
    }
}

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

function estimateRoute() {
    //Prepare timeslot start and end times
    var timeSlot = new Array();

    //Find current timeslots
    for (var i = 0; i < drivingHours.length; i++) {
        var potentionalStartTime = new Date();
        potentionalStartTime.setHours(drivingHours[i].startHour);
        potentionalStartTime.setMinutes(drivingHours[i].startMinute);
        var potentionalEndTime = new Date();
        potentionalEndTime.setHours(drivingHours[i].endHour);
        potentionalEndTime.setMinutes(drivingHours[i].endMinute);
        if (currentTime.getTime() >= potentionalStartTime.getTime() && currentTime.getTime() <= potentionalEndTime.getTime()) {
            timeSlot.push(i);
        }
    }

    if (timeSlot.length == 0) {
        //No timeslot found
        console.log("Stopped driving");
        routeResults--;
        //printResult("Kører ikke mere i dag");
    } else {
        //Timeslot found
        console.log("Active busses found: " + timeSlot.length);

        var departures = new Array();

        for (var i = 0; i < timeSlot.length; i++) {
            departures.push(setTimeslot(timeSlot[i]));
        }

        nextBus(departures);
    }
}

function setTimeslot(timeSlot) {
    var currentStart = new Date();
    var currentEnd = new Date();

    //Set timeslot start and end times
    currentStart.setHours(drivingHours[timeSlot].startHour);
    currentStart.setMinutes(drivingHours[timeSlot].startMinute);
    currentEnd.setHours(drivingHours[timeSlot].endHour);
    currentEnd.setMinutes(drivingHours[timeSlot].endMinute);
    console.log("Timeslot start time: " + currentStart.toTimeString());
    console.log("Timeslot end time: " + currentEnd.toTimeString());

    //Find index of stop in route
    var stopIndex = stops.indexOf(parseInt(selectedStop));
    console.log("Selected stop is index " + stopIndex + " in route");

    if (stopIndex > -1) {
        //Stop found in route

        //Initiate time table calculation
        var nextDeparture = CreateTimeTable(stopIndex, currentStart, currentEnd, drivingHours[timeSlot].interval);

        if (nextDeparture != null) {
            console.log(nextDeparture);

            return nextDeparture;
        } else {
            //No more departures. Try next timeslot, if available
            console.log("No more departures");
            return null;
            //printResult("Ikke flere afgange");
        }
    } else {
        //Stop not found in route
        console.log("This stop is not in the route");
        printResult("Dette stop er ikke på ruten");
        return null;
    }
}

function AddMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}

function SubtractMinutes(date, minutes) {
    return new Date(date.getTime() - minutes * 60000);
}

function CreateTimeTable(stopIndex, startHour, endHour, interval) {
    var tempStartTime = new Date(startHour);

    //Find first departure time from selected stop
    for (var i = 0; i <= stopIndex; i++) {
        tempStartTime = AddMinutes(tempStartTime, driveTime[i]);
    }

    console.log("First departue is " + tempStartTime.toTimeString());

    //Calculate every departure until current time
    while (tempStartTime <= endHour) {
        if (currentTime > tempStartTime) {
            tempStartTime = AddMinutes(tempStartTime, interval);
        } else {
            //This is the next departure time
            return tempStartTime;
        }
    }

    //If calculation extends endHour
    return null;
}

function nextBus(departures) {
    console.log("Departures found: " + departures.length);

    var nextDeparture = departures.filter(function (el) {
        return el != null;
    });

    //nextDeparture = nextDeparture.sort();

    var departureTimes = new Array();
    var departureMinutes = new Array();

    for (var i = 0; i < nextDeparture.length; i++) {
        var timeDiff = nextDeparture[i] - currentTime;
        console.log("Difference: " + timeDiff);

        departureMinutes.push(Math.round(timeDiff / 60000));
        departureTimes.push(nextDeparture[i]);
    }

    pushElement(departureMinutes, departureTimes);
}

function pushElement(departureMinutes, departureTimes) {
    var stringMinutes = "minutter";
    if (departureMinutes[0] == 1) {
        stringMinutes = "minut";
    }

    var rEl = "<div class=\"route-container\">";
    rEl += "<div class=\"route-name route-" + currentRoute + "\">" + currentRoute + "</div>";
    rEl += "<div class=\"route-body\">";
    rEl += "<strong class=\"route-time-left\">" + departureMinutes[0] + " " + stringMinutes + "</strong>";
    rEl += "<small class=\"route-next-stop\">";
    rEl += (departureTimes[0].getHours() < 10 ? '0' + departureTimes[0].getHours() : departureTimes[0].getHours()) + ":" + (departureTimes[0].getMinutes() < 10 ? '0' + departureTimes[0].getMinutes() : departureTimes[0].getMinutes());
    if (departureTimes.length > 1) {
        rEl += " og igen " + (departureTimes[1].getHours() < 10 ? '0' + departureTimes[1].getHours() : departureTimes[1].getHours()) + ":" + (departureTimes[1].getMinutes() < 10 ? '0' + departureTimes[1].getMinutes() : departureTimes[1].getMinutes());
    }
    //if (isLastRound) {
    //    rEl += "<span class=\"last\">Sidste runde</span>";
    //}
    rEl += "</small>";
    rEl += "</div>";
    rEl += "</div>";

    var resultElement = document.getElementById("result");
    resultElement.innerHTML += rEl;
}

function printResult(msg) {
    var rEl = "<div class=\"route-container\">";
    rEl += "<div class=\"route-name route-" + currentRoute + "\">" + currentRoute + "</div>";
    rEl += "<div class=\"route-body\">";
    rEl += "<strong class=\"route-time-left\">" + msg + "</strong>";
    rEl += "</div>";
    rEl += "</div>";

    var resultElement = document.getElementById("result");
    resultElement.innerHTML += rEl;
}

function populateDropdown() {
    dropdownEl = document.getElementById("stopPicker");

    resetDropdown(dropdownEl);

    console.log("Adding all " + stopData.length + " stops");

    for (var i = 0; i < stopData.length; i++) {
        var opt = stopData[i];
        var el = document.createElement("option");
        el.textContent = opt.display + " " + opt.name;
        el.value = opt.id;
        dropdownEl.appendChild(el);
    }
}

function resetDropdown(dropdownEl) {
    for (var i = 0; i < dropdownEl.options.length; i++) {
        dropdownEl.remove(i--);
    }
}

function loadDefault() {
    //Get stored values
    var s = localStorage.getItem("favoriteStop");

    populateDropdown();

    if (s != null) {
        console.log("Favorite found: " + s);
        //Set stop
        document.getElementById("stopPicker").value = s;
        checkFavorite();
    }

    getNextBus();
}
