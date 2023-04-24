function vypocet() {

    const number = Number(document.getElementById("number-input").value);
    const operation = document.getElementById("operation-input").value;
  
    if (operation === "F") {
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }

      document.getElementById("result").value = result;

    } else if (operation === "S") {
      let result = 0;
      for (let i = 1; i <= number; i++) {
        result += i;
      }

      document.getElementById("result").value = result;

    } else if (operation === "C") {

      document.getElementById("number-input").value = "";
      document.getElementById("operation-input").value = "";
      document.getElementById("result").value = "";
    }
  }