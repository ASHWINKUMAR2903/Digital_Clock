# Digital_Clock
## Date:10.07.25
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link href="style.css" rel="stylesheet">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>🕒 TimeTrack</h1>
        <p class="subtitle">Live Digital Clock</p>
        <div id="clock">00:00:00 <span id="ampm">AM</span></div>
        <div id="date">Loading date...</div>
        <button id="toggle-format">Switch to 24-Hour</button>
    </div>
</body>
</html>
```
## CSS Code:
```
body {
    background-color: #1e1e2f;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background: #2c2c3e;
    padding: 30px 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    width: 350px;
}

h1 {
    margin-bottom: 10px;
    font-size: 2rem;
}

.subtitle {
    margin-bottom: 20px;
    color: #ccc;
}

#clock {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

#clock span {
    font-size: 18px;
    vertical-align: super;
}

#date {
    color: #aaa;
    font-size: 1rem;
    margin-bottom: 20px;
}

button {
    padding: 8px 16px;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: #4c74ff;
    color: #fff;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3455e0;
}
```
## Javascript code:
```
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
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/48d5c8f4-bbdf-41a1-97b4-c52260a27f0c" />

## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
