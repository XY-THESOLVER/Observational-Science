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
