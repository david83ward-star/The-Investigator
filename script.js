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
