const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const ampmEl = document.getElementById("ampm");
const toggleBtn = document.getElementById("toggle-format");

let is24Hour = false;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let ampm = "AM";
    if (!is24Hour) {
        if (hours >= 12) 
        {
            ampm = "PM";
            if (hours > 12) hours -= 12;
        }
        if (hours === 0) hours = 12;
    }

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    clock.innerHTML = `${hh}<span class="blink">:</span>${mm}<span class="blink">:</span>${ss} <span id="ampm">${!is24Hour ? ampm : ""}</span>`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.innerText = now.toLocaleDateString(undefined, options);
}

toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();