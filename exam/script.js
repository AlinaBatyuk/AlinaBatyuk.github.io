
const fahrenheitInput = document.getElementById('fahrenheitInput');

        celsiusInput.addEventListener("click", function () {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            console.log("yes")
            if (!isNaN(fahrenheit) & 1<=fahrenheit & fahrenheit<=100) {
                const resultElement1 = document.getElementById("result");
                const input = document.getElementById("fahrenheitInput");
                input.classList = "correct_input";
            } else {
                const resultElement = document.getElementById("result");
                const input = document.getElementById("fahrenheitInput");
                input.classList = "false_input";
            }
        
    });
