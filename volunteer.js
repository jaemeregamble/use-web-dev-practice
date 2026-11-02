// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");

const form = document.querySelector("#volunteerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestSelect = document.querySelector("#interest");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const interestValue = interestSelect.value;

    if (nameValue === "") {
        result.textContent = "Please enter your name.";
        nameInput.focus();
        return;
    }

    if (emailValue === "") {
        result.textContent = "Please enter your email.";
        emailInput.focus();
        return;
    }

    if (interestValue === "" || interestValue === null) {
        result.textContent = "Please select an area of interest.";
        interestSelect.focus();
        return;
    }

    if (interestValue === "outreach") {
        result.textContent = `Thank you, ${nameValue}! Community Outreach is a wonderful way to connect with local residents.`;
    } else if (interestValue === "events") {
        result.textContent = `Thank you, ${nameValue}! Event Support helps us run smooth and engaging community functions.`;
    } else if (interestValue === "mentoring") {
        result.textContent = `Thank you, ${nameValue}! Youth Mentoring is a rewarding opportunity to guide the next generation.`;
    } else {
        result.textContent = `Thank you, ${nameValue}! Your volunteer interest has been submitted successfully.`;
    }
});