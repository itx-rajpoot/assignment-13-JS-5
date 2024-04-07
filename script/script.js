var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

document.getElementById("inputClear").onclick = function () {
    inputBox.value = null;

}

document.getElementById("outputClear").onclick = function () {
    document.getElementById("outputBox").innerHTML = ""
}

let originalString = "I love my country Pakistan. <br>\n I like my city Faisalabad. <br>\n I love my Homeland.";
function lowerCase() {
    originalString = originalString.toLowerCase();
    document.getElementById("outputBox").innerHTML = originalString
}
function upperCase() {
    originalString = originalString.toUpperCase();
    document.getElementById("outputBox").innerHTML = originalString
}
function capitalize() {
    originalString = originalString.toLowerCase();
    document.getElementById("outputBox").style.textTransform = "capitalize";
    document.getElementById("outputBox").innerHTML = originalString
}
function betterFormatting() {
    let text = document.getElementById("inputBox").value;
    if (!text) {
        alert("Please Enter text in Input Box")
        return
    }
    text = text.toLowerCase();
    document.getElementById("outputBox").style.textTransform = "capitalize";
    document.getElementById("outputBox").innerHTML = text
}
function printCities() {
    document.getElementById("inputBox").value = null
    document.getElementById("outputBox").innerHTML = ""
    for (let index = 0; index < cities.length; index++)
        document.getElementById("outputBox").innerHTML += index + 1 + ") " + cities[index] + "<br>"
}

function addCity() {
    let city = document.getElementById("inputBox").value.trim();
    if (city.length < 3) {
        alert("Please enter your city correctly!");
        return;
    }

    let cityWordInCapitalize = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    if (cities.includes(cityWordInCapitalize)) {
        document.getElementById("outputBox").innerHTML="Your city <span style='color: red; font-size: 20px;'>" + cityWordInCapitalize + "</span> is already in the list!"
    } else {
        cities.push(cityWordInCapitalize);
        let html = "Your city <span style='color: green; font-size: 20px;'>"+ cityWordInCapitalize + "</span> has been added successfully!";
        document.getElementById("outputBox").innerHTML = html;
    }
}

function checkCity() {
    let city = document.getElementById("inputBox").value.trim();
    if (city.length < 3) {
        alert("Please enter your city correctly!");
        return;
    }

    let cityWordInCapitalize = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    if (cities.includes(cityWordInCapitalize)) {
        let html = "Your city <span style='color: green; font-size: 20px;'>" + cityWordInCapitalize + "</span> is in the list &#x1F60D!";
        document.getElementById("outputBox").innerHTML = html;
    } else {
        let html = "Ohh sorry! Your city <span style='color: red; font-size: 20px;'>" + cityWordInCapitalize + "</span> is not in the list! &#128533;";
        document.getElementById("outputBox").innerHTML = html;
    }
}

// find word
function findWord() {
    let neworiginalString = originalString.toLowerCase();
    let word = document.getElementById("inputBox").value;
    if (!word) {
        alert("Please type a word to find!");

        return;
    }
    word = word.toLowerCase();

    let findWord = neworiginalString.indexOf(word);

    if (findWord !== -1) {
        let html = "Your word  <span style='color: green; font-size: 20px;'>" + word + "</span> found at index: <span style='color: green; font-size: 20px;'>" + findWord + "</span>";
        document.getElementById("outputBox").innerHTML = html;
    }
    else {
        let html = "Your word <span style='color: red; font-size: 20px;'>" + word + "</span> Not found in String!";
        document.getElementById("outputBox").innerHTML = html;

    }
}
// replace word
function replaceWord() {

    let neworiginalString = originalString.toLowerCase();
    let word = document.getElementById("inputBox").value;

    if (!word) {
        alert("Please Type a word to replace!");
        return;
    }

    let replaceWith = prompt("Enter a word that you want to replace with");
    if (!replaceWith) {
        alert("Please type a word to replace it with '" + word + "'.");
        return;
    }
    word = word.toLowerCase();
    word = new RegExp(word, 'g');
    replaceWith = replaceWith.toLowerCase();
    let replaceThatWord = neworiginalString.replace(word, replaceWith);

    document.getElementById("outputBox").innerHTML = replaceThatWord;
}