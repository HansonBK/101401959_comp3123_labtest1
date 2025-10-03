// Q3 (Part 1): Create Log files
// - create a Logs directory if not exists
// - chdir into Logs
// - create 10 log files with text
// - output filenames to console

const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log("Created Logs directory:", logsDir);
} else {
  console.log("Logs directory already exists:", logsDir);
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const content = `Log file ${i} created at ${new Date().toISOString()}\n`;
  fs.writeFileSync(fileName, content, "utf8");
  console.log("Created:", fileName);
}

// To run: npm run add-logs
