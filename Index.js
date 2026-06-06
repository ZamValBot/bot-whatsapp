
const { google } = require('googleapis');

// Si no existe process.env.GOOGLE_CREDENTIALS, el bot te avisará
if (!process.env.GOOGLE_CREDENTIALS) {
    console.error("¡Error! La variable GOOGLE_CREDENTIALS no está configurada en Render.");
    process.exit(1);
}

const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive']
});

const drive = google.drive({ version: 'v3', auth });
