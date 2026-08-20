document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("waitlistForm");
const success = document.getElementById("formSuccess");
const error = document.getElementById("formError");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  success.hidden = true;
  error.hidden = true;
  submitButton.disabled = true;
  submitButton.textContent = "Joining...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    success.hidden = false;
  } catch (err) {
    error.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Join the waitlist";
  }
});
