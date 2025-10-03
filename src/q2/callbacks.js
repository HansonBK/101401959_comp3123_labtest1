// Q2: Create resolvedPromise and rejectedPromise (500ms timeouts)
// Call both and handle resolve/reject in console

function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("resolvedPromise: Success after 500ms"), 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("rejectedPromise: Failed after 500ms")), 500);
  });
}

// Export if needed elsewhere
module.exports = { resolvedPromise, rejectedPromise };

// ---- Demo ----
if (require.main === module) {
  resolvedPromise()
    .then((msg) => console.log("Resolved ->", msg))
    .catch((err) => console.error("Resolved path error (unexpected):", err.message))
    .finally(() => console.log("resolvedPromise finished"));

  rejectedPromise()
    .then((msg) => console.log("Rejected path success (unexpected):", msg))
    .catch((err) => console.error("Rejected ->", err.message))
    .finally(() => console.log("rejectedPromise finished"));

  // To run: npm run q2
}
