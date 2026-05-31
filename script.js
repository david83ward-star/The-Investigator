function openInbox() {
    document.getElementById('main-window').innerHTML = `
        <h2>Inbox</h2>

        <div class="email-list">
            <div class="email-item" onclick="openEmailDI()">
                <strong>DI Morgan</strong><br>
                Subject: Welcome to CID
            </div>

            <div class="email-item" onclick="openEmailDS()">
                <strong>DS Hughes</strong><br>
                Subject: First Investigation
            </div>
        </div>
    `;
}

function openEmailDI() {
    document.getElementById('main-window').innerHTML = `
        <button onclick="openInbox()">Back to Inbox</button>
        <h2>DI Morgan</h2>
        <p><strong>Subject:</strong> Welcome to CID</p>

        <p>Detective,</p>

        <p>Welcome to the team.</p>

        <p>You’re joining us at a busy time. I expect professionalism, curiosity and attention to detail.</p>

        <p>No detective ever solved a case by making assumptions.</p>

        <p>DI Morgan</p>
    `;
}

function openEmailDS() {
    document.getElementById('main-window').innerHTML = `
        <button onclick="openInbox()">Back to Inbox</button>
        <h2>DS Hughes</h2>
        <p><strong>Subject:</strong> First Investigation</p>

        <p>Morning.</p>

        <p>We have a straightforward burglary for you to review.</p>

        <p>Review the case file and identify any investigative opportunities.</p>

        <p>DS Hughes</p>
    `;
}
function openInitialActions() {
    document.getElementById('main-window').innerHTML = `
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
        response = "Useful, but you should avoid relying solely on the victim account before checking the physical scene.";
    }

    if (action === "cctv") {
        response = "Good line of enquiry, but CCTV is time-sensitive and should run alongside scene preservation.";
    }

    if (action === "pnc") {
        response = "Too early. Intelligence checks help, but you need offence details and evidence first.";
    }

    document.getElementById('main-window').innerHTML = `
        <h2>Decision Recorded</h2>
        <p>${response}</p>
        <button onclick="openInitialActions()">Try another action</button>
        <button onclick="openCaseFile()">Return to Case File</button>
    `;
}
