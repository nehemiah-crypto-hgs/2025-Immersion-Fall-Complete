function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.
    let counterNumber = document.getElementById("counter-number");
    let number = counterNumber.innerHTML;
    parseInt(number) + 1;
    counterNumber.innerHTML = paraeInt(number) + 1;
}