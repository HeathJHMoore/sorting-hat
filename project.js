let count = 0;

let gryffindorNames = [];
let gryffindorObjects = [];

let hufflepuffNames = [];
let hufflepuffObjects = [];

let ravenclawNames = [];
let ravenclawObjects = [];

let slytherinNames = [];
let slytherinObjects = [];


const printToDom = (divId, elementToAppend) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.appendChild(elementToAppend);
}

const counter = () => {
    count = count + 1;
    console.log(count);
}

const errorMessage = () => {
    const studentNameInput = document.getElementById("nameInput").value;
    if (studentNameInput === '') {
        document.getElementById("alert").style.display= 'block';
    };
}


const sort = () => {
    let domString = ``;
    let studentName = document.getElementById("nameInput").value;
    const alertBox = document.getElementById("alert");
    if (studentName === '') {
        errorMessage();
        return;
    };
    alertBox.style.display = 'none';
    counter();
    const houseNumber = Math.ceil(Math.random() * 4);
    let studentHouse = ``;
    if (houseNumber === 1) {
        studentHouse = `Gryffindor`;
    } else if (houseNumber === 2) {
        studentHouse = `Hufflepuff`;
    } else if (houseNumber === 3) {
        studentHouse = `Ravenclaw`;
    } else if (houseNumber === 4) {
        studentHouse = `Slytherin`;
    };
    domString +=  `<h2>${studentName}</h2>`;
    domString +=  `<p>${studentHouse}</p>`;
    domString +=  `<button type="button" class="btn btn-primary expel" id="expel${count}">Expel</button>`;
    const newCard = document.createElement('div');
    newCard.innerHTML = domString;
    newCard.id = `card${count}`;
    if (studentHouse === 'Gryffindor') {
        newCard.className = `card gryffindor`;
        gryffindorNames.push(`${studentName}`);
        gryffindorNames = gryffindorNames.sort();
        studentName = {
            name: `${studentName}`,
            house: `${studentHouse}`
        };
        gryffindorObjects.push(studentName);
        // printToDom('gryffindorContainer', newCard);
    } else if (studentHouse === 'Hufflepuff') {
        newCard.className = `card hufflepuff`;
        hufflepuffNames.push(`${studentName}`);
        hufflepuffNames = hufflepuffNames.sort();
        studentName = {
            name: `${studentName}`,
            house: `${studentHouse}`
        };
        hufflepuffObjects.push(studentName);
        // printToDom('hufflepuffContainer', newCard)
    } else if (studentHouse === 'Ravenclaw') {
        newCard.className = `card ravenclaw`;
        ravenclawNames.push(`${studentName}`);
        ravenclawNames = ravenclawNames.sort();
        studentName = {
            name: `${studentName}`,
            house: `${studentHouse}`
        };
        ravenclawObjects.push(studentName);
        // printToDom('ravenclawContainer', newCard)
    } else if (studentHouse === 'Slytherin') {
        newCard.className = `card slytherin`;
        slytherinNames.push(`${studentName}`);
        slytherinNames = slytherinNames.sort();
        studentName = {
            name: `${studentName}`,
            house: `${studentHouse}`
        };
        slytherinObjects.push(studentName);
        // printToDom('slytherinContainer', newCard)
    };
    alphabetize();
}

const clear = () => {
    document.getElementById("nameInput").value = ``;
}

const expel = (e) => {
    const cardToRemove = e.target.parentNode;
    const parentContainer = cardToRemove.parentNode;
    parentContainer.removeChild(cardToRemove);
}

const alphabetize = () => {
    document.getElementById('gryffindorContainer').innerHTML = ``;
    gryffindorNames.forEach((alphabetName) => {
        gryffindorObjects.forEach((object) => {
            if (object.name === alphabetName) {
                let alphabetDomString = ``;
                alphabetDomString +=  `<h2>${object.name}</h2>`;
                alphabetDomString +=  `<p>${object.house}</p>`;
                alphabetDomString +=  `<button type="button" class="btn btn-primary expel" id="expel${count}">Expel</button>`;
                const alphabetCard = document.createElement('div');
                alphabetCard.innerHTML = alphabetDomString;
                alphabetCard.className = `card gryffindor`;
                printToDom('gryffindorContainer', alphabetCard);
            };
        })
    });
    document.getElementById('hufflepuffContainer').innerHTML = ``;
    hufflepuffNames.forEach((alphabetName) => {
        hufflepuffObjects.forEach((object) => {
            if (object.name === alphabetName) {
                let alphabetDomString = ``;
                alphabetDomString +=  `<h2>${object.name}</h2>`;
                alphabetDomString +=  `<p>${object.house}</p>`;
                alphabetDomString +=  `<button type="button" class="btn btn-primary expel" id="expel${count}">Expel</button>`;
                const alphabetCard = document.createElement('div');
                alphabetCard.innerHTML = alphabetDomString;
                alphabetCard.className = `card hufflepuff`;
                printToDom('hufflepuffContainer', alphabetCard);
            };
        })
    });
    document.getElementById('ravenclawContainer').innerHTML = ``;
    ravenclawNames.forEach((alphabetName) => {
        ravenclawObjects.forEach((object) => {
            if (object.name === alphabetName) {
                let alphabetDomString = ``;
                alphabetDomString +=  `<h2>${object.name}</h2>`;
                alphabetDomString +=  `<p>${object.house}</p>`;
                alphabetDomString +=  `<button type="button" class="btn btn-primary expel" id="expel${count}">Expel</button>`;
                const alphabetCard = document.createElement('div');
                alphabetCard.innerHTML = alphabetDomString;
                alphabetCard.className = `card ravenclaw`;
                printToDom('ravenclawContainer', alphabetCard);
            };
        })
    });
    document.getElementById('slytherinContainer').innerHTML = ``;
    slytherinNames.forEach((alphabetName) => {
        slytherinObjects.forEach((object) => {
            if (object.name === alphabetName) {
                let alphabetDomString = ``;
                alphabetDomString +=  `<h2>${object.name}</h2>`;
                alphabetDomString +=  `<p>${object.house}</p>`;
                alphabetDomString +=  `<button type="button" class="btn btn-primary expel" id="expel${count}">Expel</button>`;
                const alphabetCard = document.createElement('div');
                alphabetCard.innerHTML = alphabetDomString;
                alphabetCard.className = `card slytherin`;
                printToDom('slytherinContainer', alphabetCard);
            };
        })
    });
    //for loop through each house array of student names
       //for each loop through array of objects containing card information to see where object.studentName === student name in house array
         //build domstring based on student name and house name key values found in object
         //create new card and set inner html = to domstring
         //append new card to appropriate house container
}

const buttonEvents = () => {
    document.getElementById("sortButton").addEventListener('click', sort);
    document.getElementById("sortButton").addEventListener("click", clear);
    document.addEventListener("click", function(e) {
        if (e.target.className === "btn btn-primary expel") {
            expel(e);
        }
    });
};

const init = () => {
    buttonEvents();
}

init();



