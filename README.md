# ⚽ Thai League 2026/27 Match Day Countdown

<img width="1919" height="943" alt="Screenshot 2026-06-15 134038" src="https://github.com/user-attachments/assets/83f51dd3-89ed-4813-b6a7-9059445406b4" />


## 📖 Overview
A dynamic, responsive front-end web application built to track the opening kickoff of the 2026/27 Thai League season. This project was developed from scratch (without tutorials) to solidify my understanding of Vanilla JavaScript, CSS Flexbox, and DOM manipulation. 

It features multiple independent countdown timers running simultaneously on a single page, dynamically calculating the remaining time down to the exact second.

## ✨ Key Features
* **Dynamic Time Tracking:** Utilizes JavaScript `setInterval` and the `Date` object to calculate real-time countdowns for multiple matches.
* **Scalable Architecture:** Built using HTML `data-` attributes, allowing new match cards to be added without having to rewrite any JavaScript logic.
* **Modern UI/UX:** Styled completely with custom CSS, featuring CSS Flexbox for alignment, hover states, and background gradients.
* **Actionable Routing:** Includes anchor tags equipped with `target="_blank"` attributes to safely route users to official match previews and team pages.

## 🛠️ Tech Stack
* **HTML5:** Semantic structure and custom `data-target` attributes.
* **CSS3:** Flexbox layouts, gradients, responsive design.
* **Vanilla JavaScript (ES6):** Array iterations (`forEach`), DOM manipulation (`querySelectorAll`), and mathematical time conversions.

## 🧠 What I Learned
Building this project helped me break out of "tutorial hell" by forcing me to solve real-world development problems:
1. **Time Math:** Learning that computers process time in milliseconds, and writing the logic to divide those massive numbers into readable days, hours, minutes, and seconds.
2. **The "Boxes Inside Boxes" Concept:** Mastering CSS Flexbox to perfectly align team logos and text horizontally.
3. **DRY (Don't Repeat Yourself) Code:** Transitioning from hardcoding a single timer with `getElementById` to building a reusable loop with `querySelectorAll` that handles infinite timers automatically.

## 🚀 How to Run Locally
To view this project on your own machine:
1. Clone this repository to your local machine.
2. Navigate to the project folder.
3. Open `index.html` directly in your web browser, or use an extension like VS Code Live Server.

---

## ⚖️ Disclaimer & Copyright
This project is a personal, educational portfolio piece created strictly to demonstrate front-end web development skills. 

* This project is **strictly non-commercial**. 
* All team crests, league logos, and sponsor trademarks (including the Thai League, Buriram United, and BYD) are the exclusive property of their respective trademark holders. 
* This website is not affiliated with, endorsed by, or sponsored by the Thai League or any related football clubs.

## 📄 License
The underlying source code (HTML, CSS, JavaScript) is licensed under the [MIT License](LICENSE).
