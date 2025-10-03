// Q1: Create a function lowerCaseWords that:
// - returns a Promise (resolve/reject)
// - filters non-strings and lowercases the remaining words

function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      return reject(new Error("Input must be an array"));
    }

    const onlyStrings = mixedArray.filter((x) => typeof x === "string");
    if (onlyStrings.length === 0) {
      return reject(new Error("No string values found"));
    }

    const lowered = onlyStrings.map((s) => s.toLowerCase());
    resolve(lowered);
  });
}

// Export for potential tests/imports
module.exports = { lowerCaseWords };

// ---- Demo / Sample I/O ----
if (require.main === module) {
  const input = ["Apple", 12, "BANANA", null, "ChocoLATE", true, "HELLO"];
  lowerCaseWords(input)
    .then((result) => {
      console.log("Input:", input);
      console.log("Output:", result);
    })
    .catch((err) => console.error("Error:", err.message));
  // To run: npm run q1
}
