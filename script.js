import fetch from "node-fetch";

function generateRandomName() {
    const names = [
        "Juana",
        "María",
        "Pedro",
        "Luisa",
        "Ana",
        "Carlos",
        "Milko",
        "Joanes",
        "Pachuli",
        "Fernando",
        "Rafelito",
        "Rafael",
        "Rafaela",
        "Rafaelo",
        "Rafaelucho",
        "Rafaelina",
        "Rafaelita",
        "Rafaelote",
        "Rafae",
        "Rafaele",
        "Rafaeleto",
        "Rafaelechu",
        "House",
        "Houseito",
        "Housechu",
        "Wander",
        "Wanderito",
        "Wanderchu",
        "Moreno",
    ];
    const lastNames = [
        "Pérez",
        "González",
        "Rodríguez",
        "Fernández",
        "López",
        "Martínez",
        "García",
        "Sánchez",
        "Romero",
        "Sosa",
    ];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLastName =
        lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomName} ${randomLastName}`;
}

function generateRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    return `user${randomNumber}@${randomDomain}`;
}

async function sendRequest(requestData) {
    try {
        fetch("https://testing-backend-vercel-fawn.vercel.app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

    } catch (error) {
        throw error;
    }
}

async function sendMultipleRequests() {
    const numberOfRequests = 10000;

    for (let i = 0; i < numberOfRequests; i++) {
        const requestData = {
            id: i + 1,
            name: generateRandomName(),
            email: generateRandomEmail(),
        };

        try {
            sendRequest(requestData);
            console.log(`Solicitud ${i + 1}: completada`);
        } catch (error) {
            console.error(`Error en la solicitud ${i + 1}:`, error);
        }
    }
}

sendMultipleRequests();
