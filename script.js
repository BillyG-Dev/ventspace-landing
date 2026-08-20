document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("waitlistForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Temporary MVP behavior:
  // Replace this with your real form endpoint later.
  const data = Object.fromEntries(new FormData(form).entries());
  console.log("VentSpace waitlist signup:", data);

  form.reset();
  success.hidden = false;
});
