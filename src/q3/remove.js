// Q3 (Part 2): Remove Log files
// - remove all files from Logs directory (if exists) and output filenames
// - remove the Logs directory

const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDir)) {
  console.log("No Logs directory found. Nothing to remove.");
  process.exit(0);
}

const files = fs.readdirSync(logsDir);

if (files.length) {
  console.log("Deleting files:");
  for (const f of files) {
    console.log("Deleting:", f);
    fs.unlinkSync(path.join(logsDir, f));
  }
} else {
  console.log("Logs directory is empty.");
}

fs.rmdirSync(logsDir);
console.log("Removed Logs directory:", logsDir);

// To run: npm run remove-logs
