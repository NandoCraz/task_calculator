let tampung = document.getElementById("tampung");
let change = document.getElementById("change");
let body = document.getElementById("mainBody");
let fa = document.getElementById("fa");
let ganti = document.querySelectorAll(".ganti");

change.addEventListener("click", function () {
  fa.classList.toggle("fa-sun");
  fa.classList.toggle("fa-moon");
  body.classList.toggle("bg-light");
  body.classList.toggle("text-dark");
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");

  ganti.forEach((item) => {
    item.classList.toggle("bg-light");
    item.classList.toggle("text-dark");
    item.classList.toggle("bg-dark");
    item.classList.toggle("text-light");
  });
});

function allClear() {
  tampung.innerText = "";
}

function currentNum(num) {
  let awal = tampung.innerText;
  let checkDouble = tampung.innerText.slice(-1);
  if (!awal && ["*", "+", "-", "/", "."].includes(num)) return;
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
  if (awal[0] == "-") {
    awal = awal.slice(1);
  } else {
    awal = "-" + awal;
  }
  tampung.innerText = awal;
}
