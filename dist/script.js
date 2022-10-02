window.onscroll = function () {
  const header = document.querySelector(".navbar");
  const navMenu = document.querySelector("#nav-menu");
  const fixNav = header.offsetTop;
  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
    navMenu.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
    navMenu.classList.remove("navbar-fixed");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// konversi suhu

function konversiSuhu(valueAngka) {
  let result;
  let temperaturs1 = document.querySelector("#temperaturs1");
  let temperaturs2 = document.querySelector("#temperaturs2");

  if (temperaturs1.value == "Celcius" && temperaturs2.value == "Fahrenheit") {
    result = (9 / 5) * valueAngka + 32;
  } else if (
    temperaturs1.value == "Celcius" &&
    temperaturs2.value == "Kelvin"
  ) {
    result = valueAngka + 273.15;
  } else if (
    temperaturs1.value == "Celcius" &&
    temperaturs2.value == "Reamur"
  ) {
    result = (4 / 5) * valueAngka;
  } else if (
    temperaturs1.value == "Celcius" &&
    temperaturs2.value == "Celcius"
  ) {
    result = valueAngka;
  } else {
    result = false;
  }

  return result;
}

function konversiResultTemps(valueAngka, str) {
  switch (str) {
    case "fahrenheit":
      return (9 / 5) * valueAngka + 32;
      break;
    case "kelvin":
      return valueAngka + 273.15;
      break;
    case "reamur":
      return (4 / 5) * valueAngka;
      break;
    default:
      break;
  }
}

function heandleUnitTemp1(temps) {
  switch (temps.value) {
    case "Celcius":
      return "C";
      break;
    case "Fahrenheit":
      return "F";
      break;
    case "Kelvin":
      return "R";
      break;
    case "Reamur":
      return "R";
      break;

    default:
      return "";
      break;
  }
}

function heandleTemps() {
  const numberResult = document.getElementById("temps-result");
  const temperaturs1 = document.querySelector("#temperaturs1");
  const temperaturs2 = document.querySelector("#temperaturs2");
  const inputNumber = document.getElementById("number");
  const konvertNumber = Number(inputNumber.value);

  if (inputNumber.value == "") {
    numberResult.innerHTML = "Number belum dimasukan";
  } else if (konversiSuhu(konvertNumber) == false) {
    numberResult.innerHTML = "Satuan Suhu Tidak Sesuai";
  } else {
    numberResult.innerHTML = `${konvertNumber} <sup><small>0</small></sup>${heandleUnitTemp1(
      temperaturs1
    )} adalah sama dengan ${konversiSuhu(
      konvertNumber
    )} <sup><small>0</small></sup>${heandleUnitTemp1(temperaturs2)}`;
  }

  // table selection
  const celcius = document.querySelector("#celcius");
  const fahrenheit = document.querySelector("#fahrenheit");
  const kelvin = document.querySelector("#kelvin");
  const reamur = document.querySelector("#reamur");

  celcius.innerHTML = `${konvertNumber}`;
  fahrenheit.innerHTML = `${konversiResultTemps(konvertNumber, "fahrenheit")} `;
  kelvin.innerHTML = `${konversiResultTemps(konvertNumber, "kelvin")}`;
  reamur.innerHTML = `${konversiResultTemps(konvertNumber, "reamur")}`;
}
