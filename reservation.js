const dateInput = document.getElementById("date");
const dayInput = document.getElementById("day");
const confirmBtn = document.getElementById("confirmBtn");
const message = document.getElementById("message");

let reservedDate = "";

// Show day automatically
dateInput.addEventListener("change", function(){
  const date = new Date(this.value);
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  dayInput.value = days[date.getDay()];
});

function reserveTable() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const table = document.getElementById("table").value;

  if (!name || !date || !time || !table) {
    message.style.color = "red";
    message.innerText = "❌ Please fill all details.";
    return;
  }

  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0,0,0,0);

  if (selectedDate <= today) {
    message.style.color = "red";
    message.innerText = "❌ Please select a future date.";
    return;
  }

  reservedDate = date;
  message.style.color = "green";
  message.innerText = "✅ Reservation done. Confirm on the same day!";
}

function confirmReservation() {
  const today = new Date().toISOString().split("T")[0];

  if (today === reservedDate) {
    alert("🎉 Reservation Confirmed! See you soon.");
  } else {
    alert("⏳ You can confirm only on the reserved date.");
  }
}

// Enable confirm button only on reserved date
setInterval(() => {
  const today = new Date().toISOString().split("T")[0];
  confirmBtn.disabled = (today !== reservedDate);
}, 1000);