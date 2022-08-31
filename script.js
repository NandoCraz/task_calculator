let tampung = document.getElementById("tampung");

function allClear() {
  tampung.innerText = "";
}

function currentNum(num) {
  let checkDouble = tampung.innerText.slice(-1);
  if (["*", "+", "-", "/", "."].includes(checkDouble) && ["*", "+", "-", "/", "."].includes(num)) {
    return;
  } else {
    tampung.innerText += num;
  }
}

function final() {
  let num = tampung.innerText;
  if (num === "") {
    tampung.innerText = "";
  } else {
    let hasil = eval(num);
    tampung.innerText = hasil;
  }
}

function hapus() {
  let nilai = tampung.innerText;
  let hapus = nilai.substring(0, nilai.length - 1);
  tampung.innerText = hapus;
}

function persen() {
  let nilai = tampung.innerText;
  let persen = nilai / 100;
  tampung.innerText = persen;
}

function minus() {
  let awal = tampung.innerText;
  let nilai = awal.slice(-awal.length);
  let minus = "-" + nilai;
  tampung.innerText = minus;
}

// let currentSum = "";

// const span = document.querySelectorAll("span");
// const tampung = document.querySelector(".display h1");
// const operator = document.querySelectorAll(".operator").innerText;

// span.forEach((item) => {
//   item.addEventListener("click", function () {
//     let value = item.innerText;

//     if (value == "=") {
//       currentSum = eval(currentSum);
//       tampung.innerText = currentSum;
//     } else if (value == "x") {
//       currentSum += "*";
//       tampung.innerText = currentSum;
//     } else if (value == "%") {
//       currentSum = currentSum / 100;
//       tampung.innerText = currentSum;
//     } else if (value == "AC") {
//       currentSum = "";
//       tampung.innerText = "0";
//     } else if (value == "CE") {
//       currentSum = currentSum.substring(0, currentSum.length - 1);
//       tampung.innerText = currentSum;
//     } else {
//       currentSum += value;
//       tampung.innerText = currentSum;
//     }
//   });
// });

// $("span").click(function () {
//   var value = $(this).text();

//   if (value == "=") {
//     currentSum = eval(currentSum);
//     $(".display h1").text(currentSum);
//   } else if (value == "x") {
//     currentSum += "*";
//     $(".display h1").text(currentSum);
//   } else if (value == "%") {
//     currentSum = currentSum / 100;
//     $(".display h1").text(currentSum);
//   } else if (value == "÷") {
//     currentSum += "/";
//     $(".display h1").text(currentSum);
//   } else if (value == "AC") {
//     currentSum = "";
//     $(".display h1").text("0");
//   } else if (value == "CE") {
//     currentSum = currentSum.substring(0, currentSum.length - 1);
//     $(".display h1").text(currentSum);
//   } else {
//     currentSum += value;
//     $(".display h1").text(currentSum);
//   }
// });
