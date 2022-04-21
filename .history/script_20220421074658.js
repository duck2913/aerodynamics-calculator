const m1El = document.querySelector("#m1");
const gammaEl = document.querySelector("#gamma");
const btnCalculate = document.querySelector(".btn--cal");
const mSquare = document.querySelector(".m-square");

btnCalculate.addEventListener("click", function () {
	const m1 = m1El.value;
	const gamma = gammaEl.value;
	console.log(gamma, m1);
});
