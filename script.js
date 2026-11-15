
/* ======================================
   WEBBIFYIT - BIRTHDAY WEBSITE
   PERSONALIZATION SETTINGS
   ====================================== */

// CHANGE THESE DETAILS TO PERSONALIZE THE WEBSITE

const birthdayDetails = {
    name: "Ananya"
};

// ======================================
// PERSONALIZATION
// ======================================

const name = birthdayDetails.name.trim() || "Beautiful";

document.getElementById("welcomeName").textContent = name;
document.getElementById("heroName").textContent = name;
document.getElementById("letterName").textContent = name;
document.getElementById("finalName").textContent = name.toUpperCase();

// ======================================
// OPEN THE SURPRISE
// ======================================

const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const openButton = document.getElementById("openSurprise");

openButton.addEventListener("click", () => {

    welcomeScreen.classList.add("exit");

    setTimeout(() => {
        welcomeScreen.style.display = "none";
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createConfetti(70);

    }, 800);

});

// ======================================
// BLOW OUT THE CANDLES
// ======================================

const blowButton = document.getElementById("blowCandles");
const cakeScene = document.querySelector(".cake-scene");
const wishResult = document.getElementById("wishResult");

let candlesBlown = false;

blowButton.addEventListener("click", () => {

    if (!candlesBlown) {

        cakeScene.classList.add("blown");

        wishResult.textContent =
            "May every little wish of yours come true! ♡";

        blowButton.textContent = "Candles blown! ✨";

        createConfetti(90);

        candlesBlown = true;

    } else {

        cakeScene.classList.remove("blown");

        wishResult.textContent = "Make another wish! ♡";

        blowButton.textContent = "Blow the candles ♡";

        candlesBlown = false;

    }

});

// ======================================
// CONFETTI ANIMATION
// ======================================

function createConfetti(amount = 50) {

    const container =
        document.getElementById("confettiContainer");

    const colors = [
        "#e99bb9",
        "#f8c7d9",
        "#d5b6eb",
        "#ffe0a3",
        "#ffffff",
        "#c98fbf"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2.5 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.width =
            (5 + Math.random() * 8) + "px";

        piece.style.height =
            (7 + Math.random() * 12) + "px";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

}

// ======================================
// REPLAY THE EXPERIENCE
// ======================================

const replayButton = document.getElementById("replayButton");

replayButton.addEventListener("click", () => {

    // Reset cake
    cakeScene.classList.remove("blown");

    candlesBlown = false;

    blowButton.textContent = "Blow the candles ♡";

    wishResult.textContent = "Your wish is waiting...";

    // Return to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Show welcome screen again
    welcomeScreen.style.display = "flex";

    welcomeScreen.classList.remove("exit");

    mainContent.classList.add("hidden");

});
