// This "server.js" file helps RENDER to serve files from "dist/recommendation-system" directory

const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "dist/recommendation-system")));

// Send all requests to index.html
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist/recommendation-system/index.html"));
});

// Start the app by listening on the default Render port
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});