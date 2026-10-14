/* ================= MOBILE MENU ================= */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* ================= SKILL DATA ================= */

const skills = {

    frontend: {
        number: "01",
        title: "Frontend Development",
        description:
        "I create responsive and interactive websites using modern frontend technologies.",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"]
    },

    backend: {
        number: "02",
        title: "Backend Development",
        description:
        "I use Python and Flask to create application logic and REST APIs.",
        tech: ["Python", "Flask", "REST APIs"]
    },

    database: {
        number: "03",
        title: "Databases",
        description:
        "I work with structured data and relational databases.",
        tech: ["MySQL", "SQL", "DBMS"]
    },

    programming: {
        number: "04",
        title: "Programming & App Development",
        description:
        "I explore programming and application development using Python, Dart and Flutter.",
        tech: ["Python", "Dart", "Flutter"]
    },

    tools: {
        number: "05",
        title: "Tools & Platforms",
        description:
        "I use development and version-control tools to build and manage projects.",
        tech: ["Git", "GitHub", "VS Code", "Android Studio"]
    }

};


/* ================= SKILL MODAL ================= */

function openSkill(type) {

    const data = skills[type];

    document.getElementById("modalNumber").textContent =
        data.number;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalDescription").textContent =
        data.description;


    const techBox =
        document.getElementById("modalTech");

    techBox.innerHTML = "";


    data.tech.forEach(item => {

        const span = document.createElement("span");

        span.textContent = item;

        techBox.appendChild(span);

    });


    document
        .getElementById("skillModal")
        .classList.add("show");

}


/* Close skill modal */

function closeSkill() {

    document
        .getElementById("skillModal")
        .classList.remove("show");

}


/* Close modal by clicking outside */

document
    .getElementById("skillModal")
    .addEventListener("click", event => {

        if (event.target.id === "skillModal") {
            closeSkill();
        }

    });


/* Close modal with Escape */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeSkill();
    }

});


/* ================= RAILFLY DEMO ================= */

const tabs =
    document.querySelectorAll(".tab");

let journeyType = "train";


/* City codes */

const cityCodes = {

    Bengaluru: "BLR",
    Chennai: "MAA",
    Mumbai: "BOM",
    Delhi: "DEL",
    Hyderabad: "HYD"

};


/* ================= TRAIN / FLIGHT TABS ================= */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(item => {
            item.classList.remove("active");
        });


        tab.classList.add("active");


        journeyType =
            tab.dataset.type;


        updateJourney();

    });

});


/* ================= UPDATE JOURNEY ================= */

function updateJourney() {

    const departure =
        document.getElementById("departure");

    const arrival =
        document.getElementById("arrival");

    const platform =
        document.getElementById("platform");

    const coach =
        document.getElementById("coach");


    /* Flight */

    if (journeyType === "flight") {

        departure.textContent =
            "08:10 AM";

        arrival.textContent =
            "09:20 AM";

        platform.textContent =
            "Gate 18";

        coach.textContent =
            "6E 421";

    }


    /* Train */

    else {

        departure.textContent =
            "06:30 AM";

        arrival.textContent =
            "12:45 PM";

        platform.textContent =
            "04";

        coach.textContent =
            "B2";

    }

}


/* ================= RAILFLY SEARCH ================= */

document
    .getElementById("searchBtn")
    .addEventListener("click", () => {


        const from =
            document.getElementById("fromCity").value;


        const to =
            document.getElementById("toCity").value;


        /* Same city check */

        if (from === to) {

            alert(
                "Please select different cities."
            );

            return;

        }


        /* Update city codes */

        document
            .getElementById("resultFrom")
            .textContent =
            cityCodes[from];


        document
            .getElementById("resultTo")
            .textContent =
            cityCodes[to];


        /* Update city names */

        document
            .getElementById("resultFromName")
            .textContent =
            from;


        document
            .getElementById("resultToName")
            .textContent =
            to;


        /* Update train/flight information */

        updateJourney();


        /* Show result */

        document
            .getElementById("demoResult")
            .classList.add("show");


        /* Hide previous tracking message */

        document
            .getElementById("liveStatus")
            .classList.remove("show");

});


/* ================= TRACK JOURNEY ================= */

document
    .getElementById("trackBtn")
    .addEventListener("click", () => {


        const status =
            document.getElementById("liveStatus");


        status.classList.add("show");


        if (journeyType === "train") {

            status.textContent =
            "● Train is on schedule. Platform 04 confirmed. Coach B2 is ready.";

        }

        else {

            status.textContent =
            "● Flight is on schedule. Gate 18 confirmed. Boarding will begin soon.";

        }

});


/* ================= CURRENT DATE ================= */

const dateInput =
    document.getElementById("travelDate");


if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;

}
