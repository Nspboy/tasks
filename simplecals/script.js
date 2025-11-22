function calc(op) {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);

    let result = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': b === 0 ? "Cannot divide by 0" : a / b
    }[op];

    document.getElementById("out").innerHTML = result;
}
