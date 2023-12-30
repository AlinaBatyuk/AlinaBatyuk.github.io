
const fahrenheitInput = document.getElementById('fahrenheitInput');

        function validateNumber() {
            const inputElement = document.getElementById('fahrenheitInput');
            const fahrenheit = parseInt(fahrenheitInput.value);

             if (!isNaN(fahrenheit) && fahrenheit >= 1 && fahrenheit <= 100) {
                    inputElement.classList.remove('false_input');
                    inputElement.classList.add('correct_input');
                } else {
                    inputElement.classList.remove('correct_input');
                    inputElement.classList.add('false_input');
                }
    };
