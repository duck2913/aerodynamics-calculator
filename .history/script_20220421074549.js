const m1El = document.querySelector("#m1");
const gammaEl = document.querySelector("#gamma");
const btnCalculate = document.querySelector(".btn--cal");

btnCalculate.addEventListener("click", function () {
	const m1 = m1El.target.value;
	const gamma = gammaEl.target.value;
	console.log(gamma, m1);
});
