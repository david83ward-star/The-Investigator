function hideAllScreens() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
}

function showCharacterScreen() {
    hideAllScreens();
    document.getElementById("character-screen").classList.add("active");
}

function startGame() {
    const name = document.getElementById("player-name").value || "Detective";

    localStorage.setItem("playerName", name);
    document.getElementById("officer-name").textContent = name;

    hideAllScreens();
    document.getElementById("desktop-screen").classList.add("active");

    openInbox();
}

function continueGame() {
    const name = localStorage.getItem("playerName");

    if (!name) {
        alert("No saved game found.");
        return;
    }

    document.getElementById("officer-name").textContent = name;

    hideAllScreens();
    document.getElementById("desktop-screen").classList.add("active");

    openInbox();
}

function openInbox() {
    document.getElementById("main-window").innerHTML = `
        <h2>Inbox</h2>

        <div class="email-item" onclick="openEmailDI()">
            <strong>DI Morgan</strong><br>
            Welcome to CID
        </div>

        <div class="email-item" onclick="openEmailDS()">
            <strong>DS Hughes</strong><br>
            First Investigation
        </div>
    `;
}

function openEmailDI() {
    document.getElementById("main-window").innerHTML = `
        <button onclick="openInbox()">Back</button>
        <h2>DI Morgan</h2>
        <p><strong>Subject:</strong> Welcome to CID</p>
        <p>Detective,</p>
        <p>Welcome to the team. I expect professionalism, curiosity and attention to detail.</p>
        <p>No detective ever solved a case by making assumptions.</p>
        <p>DI Morgan</p>
    `;
}

function openEmailDS() {
    document.getElementById("main-window").innerHTML = `
        <button onclick="openInbox()">Back</button>
        <h2>DS Hughes</h2>
        <p><strong>Subject:</strong> First Investigation</p>
        <p>Morning.</p>
        <p>We have a straightforward burglary for you to review.</p>
        <p>Victim returned home to find a rear kitchen window smashed. Jewellery, cash and a portable computer are missing.</p>
        <button onclick="openInitialActions()">Start Investigation</button>
        <p>DS Hughes</p>
    `;
}

function openCaseFile() {
    document.getElementById("main-window").innerHTML = `
        <h2>Case File</h2>
        <p><strong>Crime:</strong> Residential Burglary</p>
        <p><strong>Location:</strong> 24 Willow Close</p>
        <p><strong>Date:</strong> 14 September 1987</p>
        <p><strong>Victim:</strong> Eleanor Price</p>
        <button onclick="openInitialActions()">Choose Initial Action</button>
    `;
}

function openPNC() {
    document.getElementById("main-window").innerHTML = `
        <h2>PNC</h2>
        <p>Database connected.</p>
        <p>No subject currently selected.</p>
    `;
}

function openEvidence() {
    document.getElementById("main-window").innerHTML = `
        <h2>Evidence</h2>
        <ul>
            <li>Victim statement</li>
            <li>Crime scene photographs</li>
            <li>Forensic submission pending</li>
        </ul>
    `;
}

function openInitialActions() {
    document.getElementById("main-window").innerHTML = `
        <h2>Initial Investigation Actions</h2>
        <p>What do you want to do first?</p>
        <button onclick="chooseAction('scene')">Attend the scene</button>
        <button onclick="chooseAction('victim')">Speak to the victim</button>
        <button onclick="chooseAction('cctv')">Check local CCTV</button>
        <button onclick="chooseAction('pnc')">Run intelligence checks</button>
    `;
}

function chooseAction(action) {
    let response = "";

    if (action === "scene") {
        response = "Good. Attending the scene gives you the best chance of identifying forensic opportunities before evidence is lost.";
    }

    if (action === "victim") {
        response = "Useful, but do not rely solely on the victim account before checking the physical scene.";
    }

    if (action === "cctv") {
        response = "Good line of enquiry. CCTV is time-sensitive and should run alongside scene preservation.";
    }

    if (action === "pnc") {
        response = "Too early. Intelligence checks help, but you need offence details and evidence first.";
    }

    document.getElementById("main-window").innerHTML = `
        <h2>Decision Recorded</h2>
        <p>${response}</p>
        <button onclick="openInitialActions()">Try another action</button>
        <button onclick="openCaseFile()">Return to Case File</button>
    `;
}
