// const spinner = document.getElementById("spinner");
let isSpinning = false;

// spinner.addEventListener("click", () => {
//     if (!isSpinning) {
//         wheel.classList.add("spin");
//         spinner.innerHTML = "Stop!";
//     } else {
//         wheel.classList.remove("spin");
//         spinner.innerHTML = "Spin!";
//     }
//     isSpinning = !isSpinning;
// });

const spin = (spinner) => {
    const wheel = document.getElementById("wheel");

    if (!isSpinning) {
        wheel.classList.add("spin");
        spinner.innerHTML = "Stop!";
    } else {
        wheel.classList.remove("spin");
        spinner.innerHTML = "Spin!";
    }
    isSpinning = !isSpinning;
}