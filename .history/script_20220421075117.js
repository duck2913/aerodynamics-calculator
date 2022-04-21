const m1El = document.querySelector("#m1");
const gammaEl = document.querySelector("#gamma");
const btnCalculate = document.querySelector(".btn--cal");
const mSquareEl = document.querySelector(".m-square");
const rhoEl = document.querySelector(".rho");
const pEl = document.querySelector(".p");
const tEl = document.querySelector(".t");

btnCalculate.addEventListener("click", function () {
	const m1 = m1El.value;
	const gamma = gammaEl.value;

	const mSquare =
		(1 + ((gamma - 1) / 2) * Math.pow(m1, 2)) / (gamma * Math.pow(m1, 2) - (gamma - 1) / 2);
	console.log(mSquare);
});
