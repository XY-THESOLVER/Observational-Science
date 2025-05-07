// Sample data - You can add or edit cases here
const cases = [
    {
        id: 1,
        title: "The Vanishing Bride",
        description: "A woman disappears on her wedding day. The only clue: a blood-stained veil.",
        status: "Open"
    },
    {
        id: 2,
        title: "The Cyanide Widow",
        description: "A businessman dies after drinking his usual coffee. Poison or something more sinister?",
        status: "Closed"
    }
];

// Function to display cases
function displayCases() {
    const casesContainer = document.getElementById("cases-list");
    casesContainer.innerHTML = ""; // Clear existing content

    cases.forEach(caseData => {
        const caseElement = document.createElement("div");
        caseElement.className = "case";
        caseElement.innerHTML = `
            <h3>${caseData.title}</h3>
            <p>${caseData.description}</p>
            <p>Status: ${caseData.status}</p>
        `;
        casesContainer.appendChild(caseElement);
    });
}

// Call function to display cases on page load
window.onload = displayCases;
// Fetch cases from local storage or initialize with default data
let cases = JSON.parse(localStorage.getItem("cases")) || [
    {
        id: 1,
        title: "The Vanishing Bride",
        description: "A woman disappears on her wedding day. The only clue: a blood-stained veil.",
        status: "Open"
    },
    {
        id: 2,
        title: "The Cyanide Widow",
        description: "A businessman dies after drinking his usual coffee. Poison or something more sinister?",
        status: "Closed"
    }
];

// Function to display cases
function displayCases() {
    const casesContainer = document.getElementById("cases-list");
    casesContainer.innerHTML = "";

    cases.forEach(caseData => {
        const caseElement = document.createElement("div");
        caseElement.className = "case";
        caseElement.innerHTML = `
            <h3>${caseData.title}</h3>
            <p>${caseData.description}</p>
            <p>Status: ${caseData.status}</p>
        `;
        casesContainer.appendChild(caseElement);
    });
}

// Function to add a new case
function addCase(event) {
    event.preventDefault();

    const title = document.getElementById("caseTitle").value;
    const description = document.getElementById("caseDescription").value;
    const status = document.getElementById("caseStatus").value;

    const newCase = {
        id: cases.length + 1,
        title: title,
        description: description,
        status: status
    };

    cases.push(newCase);

    // Save to local storage
    localStorage.setItem("cases", JSON.stringify(cases));

    // Reset the form
    document.getElementById("caseForm").reset();

    // Display updated cases
    displayCases();
}

// Event listener for form submission
document.getElementById("caseForm").addEventListener("submit", addCase);

// Display cases on page load
window.onload = displayCases;
// Fetch cases from local storage or initialize with empty array
let cases = JSON.parse(localStorage.getItem("cases")) || [];

// Function to display cases
function displayCases() {
    const casesContainer = document.getElementById("cases-list");
    casesContainer.innerHTML = "";

    cases.forEach(caseData => {
        const caseElement = document.createElement("div");
        caseElement.className = "case";
        caseElement.innerHTML = `
            <h3>${caseData.title}</h3>
            <p>${caseData.description}</p>
            <p>Status: ${caseData.status}</p>
            <button onclick="editCase(${caseData.id})">Edit</button>
            <button onclick="deleteCase(${caseData.id})">Delete</button>
        `;
        casesContainer.appendChild(caseElement);
    });
}

// Function to add or edit a case
function addOrEditCase(event) {
    event.preventDefault();

    const id = document.getElementById("caseId").value;
    const title = document.getElementById("caseTitle").value;
    const description = document.getElementById("caseDescription").value;
    const status = document.getElementById("caseStatus").value;

    if (id) {
        // Editing existing case
        const caseIndex = cases.findIndex(c => c.id == id);
        if (caseIndex !== -1) {
            cases[caseIndex] = { id: parseInt(id), title, description, status };
        }
    } else {
        // Adding new case
        const newCase = {
            id: cases.length ? cases[cases.length - 1].id + 1 : 1,
            title,
            description,
            status
        };
        cases.push(newCase);
    }

    // Save to local storage
    localStorage.setItem("cases", JSON.stringify(cases));

    // Reset form
    document.getElementById("caseForm").reset();
    document.getElementById("caseId").value = "";

    // Display updated cases
    displayCases();
}

// Function to edit a case
function editCase(id) {
    const caseData = cases.find(c => c.id === id);
    if (caseData) {
        document.getElementById("caseId").value = caseData.id;
        document.getElementById("caseTitle").value = caseData.title;
        document.getElementById("caseDescription").value = caseData.description;
        document.getElementById("caseStatus").value = caseData.status;
    }
}

// Function to delete a case
function deleteCase(id) {
    cases = cases.filter(c => c.id !== id);
    localStorage.setItem("cases", JSON.stringify(cases));
    displayCases();
}

// Event listener for form submission
document.getElementById("caseForm").addEventListener("submit", addOrEditCase);

// Display cases on page load
window.onload = displayCases;
