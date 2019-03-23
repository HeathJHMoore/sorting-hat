
const printToDom = (divId, elementToAppend) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.appendChild(elementToAppend);
}

let count = 0

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
    const studentName = document.getElementById("nameInput").value;
    if (studentName === '') {
        errorMessage();
        return;
    };
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
    newCard.className = `card`;
    printToDom('cardContainer', newCard);
}

const clear = () => {
    document.getElementById("nameInput").value = ``;
}

const expel = (e) => {
    const cardToRemove = e.target.parentNode;
    const parentContainer = cardToRemove.parentNode;
    parentContainer.removeChild(cardToRemove);
}


const buttonEvents = () => {
    // document.getElementById("sortButton").addEventListener('click', counter);
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