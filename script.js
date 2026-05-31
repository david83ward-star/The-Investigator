function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

function showCharacterScreen() {
    hideAllScreens();
    document.getElementById('character-screen').classList.add('active');
}

function startGame() {
    const name = document.getElementById('player-name').value || "Detective";
    const pronouns = document.getElementById('player-pronouns').value || "Not specified";

    localStorage.setItem('playerName', name);
    localStorage.setItem('playerPronouns', pronouns);

    document.getElementById('officer-name').textContent = name;

    hideAllScreens();
    document.getElementById('desktop-screen').classList.add('active');

    openInbox();
}

function continueGame() {
    const name = localStorage.getItem('playerName');

    if (!name) {
        alert("No saved game found.");
        return;
    }

    document.getElementById('officer-name').textContent = name;

    hideAllScreens();
    document.getElementById('desktop-screen').classList.add('active');

    openInbox();
}

function loadGame() {
    alert("Load Game coming in future version.");
}

function openInbox() {
    document.getElementById('main-window').innerHTML = `
        <h2>Inbox</h2>

        <hr>

        <h3>Email 1 - Detective Inspector Morgan</h3>

        <p><strong>Subject:</strong> Welcome to CID</p>

        <p>
        Detective,
        </p>

        <p>
        Welcome to the team.
        </p>

        <p>
        You're joining us at a busy time. The borough has seen a sharp increase
        in acquisitive crime over recent months and resources are stretched.
        </p>

        <p>
        I expect professionalism, curiosity and attention to detail.
        No detective ever solved a case by making assumptions.
        </p>

        <p>
        Your line manager will brief you shortly.
        </p>

        <p>
        DI Morgan
        </p>

        <hr>

        <h3>Email 2 - Detective Sergeant Hughes</h3>

        <p><strong>Subject:</strong> First Investigation</p>

        <p>
        Morning.
        </p>

        <p>
        We have a straightforward burglary for you to review.
        </p>

        <p>
        Victim returned home yesterday to find a rear kitchen window smashed.
        A laptop, jewellery and cash are reported stolen.
        </p>

        <p>
        Review the case file and identify any investigative opportunities.
        </p>

        <p>
        DS Hughes
        </p>
    `;
}

function openCaseFile() {
    document.getElementById('main-window').innerHTML = `
        <h2>Case File</h2>

        <p><strong>Crime:</strong> Residential Burglary</p>

        <p><strong>Location:</strong> 24 Willow Close</p>

        <p><strong>Date:</strong> 14 September 1987</p>

        <p>
        Victim states they returned home at approximately 18:15hrs.
        Rear kitchen window found smashed.
        Property missing includes:
        </p>

        <ul>
            <li>Gold necklace</li>
            <li>£250 cash</li>
            <li>Portable computer</li>
        </ul>
    `;
}

function openPNC() {
    document.getElementById('main-window').innerHTML = `
        <h2>PNC Search</h2>

        <p>Database connection established.</p>

        <p>No subjects queried.</p>
    `;
}

function openEvidence() {
    document.getElementById('main-window').innerHTML = `
        <h2>Evidence</h2>

        <ul>
            <li>Crime Scene Photographs</li>
            <li>Victim Statement</li>
            <li>Forensic Submission Pending</li>
        </ul>
    `;
}