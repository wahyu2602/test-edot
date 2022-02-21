// Logic Jam Dunia ----------------------------------------------
const returnDate = document.querySelector('.return-date');
setInterval(() => {
  let jam = new Date().getHours();
  let menit = new Date().getMinutes();
  let detik = new Date().getSeconds();
  returnDate.textContent = `${jam} : ${menit} : ${detik}`;
}, 1000);

// logic Drawing Tolls ------------------------------------------
const inputBangunan = document.querySelector('.jenis-bangunan');
const inputUkuran = document.querySelector('.ukuran');
const btnLihat = document.querySelector('.btn-lihat');
const lihatHasil = document.querySelector('.cetak');

let ukuran;
let jenis;
inputBangunan.addEventListener('change', function () {
  let input = this.value;
  jenis = input;
});

inputUkuran.addEventListener('keyup', function () {
  let value = this.value;
  ukuran = value;
});

function cetakHasil(jenis, ukuran) {
  if (jenis == 1) {
    let hasil = '';
    for (let i = 0; i < ukuran; i++) {
      for (let j = 0; j < ukuran; j++) {
        hasil += `<span class="ms-1">*</span>`;
      }
      hasil += `<br>`;
    }
    lihatHasil.innerHTML = hasil;
  } else if (jenis == 2) {
    let hasil2 = '';
    for (let i = 0; i < ukuran; i++) {
      for (let j = 0; j <= i; j++) {
        hasil2 += `<span class="ms-1">* </span>`;
      }
      hasil2 += `<br>`;
    }
    lihatHasil.innerHTML = hasil2;
  } else if (jenis == 3) {
    let hasil3 = '';
    for (let i = ukuran; i > 0; i--) {
      for (let j = 1; j <= ukuran; j++) {
        if (j >= i) {
          hasil3 += `<span class="ms-1">* </span>`;
        } else {
          hasil3 += `<span class="me-2"></span>`
        }
      }
      hasil3 += `<br>`;
    }
    lihatHasil.innerHTML = hasil3;
  } else {
    lihatHasil.innerHTML = `<p class="text-red">Pilih Jenis Bangunan sesuai ketentuan.</p>`
  }
}

btnLihat.addEventListener('click', function () {
  cetakHasil(jenis, ukuran);
});

// logic Daftar Manusia -------------------------------------------
const loopData = document.querySelector('.loop-data');
const submit = document.querySelector('#submit');
const sortNama = document.querySelector('#sort-nama');
const sortUmur = document.querySelector('#sort-umur');
const sortKelamin = document.querySelector('#sort-kelamin');
const sortPekerjaan = document.querySelector('#sort-pekerjaan');
const valueNama = document.querySelector('#nama');
const valueUmur = document.querySelector('#umur');
const valueKelamin = document.querySelectorAll('.kelamin');
const valuePekerjaan = document.querySelector('#pekerjaan');
const error = document.querySelector('.feed');

let data = []
let vKelamin;

valueKelamin.forEach(v => {
  v.addEventListener('change', function () {
    vKelamin = this.value
  });
});

Data();
submit.addEventListener('click', function () {

  if (valueNama.value == '' && valueKelamin.value == undefined && valueUmur.value == '' && valuePekerjaan.value == '') {
    error.classList.remove('feed');
  } else {
    error.classList.add('feed');
    data.push({
      nama: valueNama.value,
      umur: valueUmur.value,
      kelamin: vKelamin,
      pekerjaan: valuePekerjaan.value,
    });
    Data();
    valueNama.value = '';
    valueUmur.value = '';
    valuePekerjaan.value = '';
  }

});

sortNama.addEventListener('click', function () {
  data.sort((a, b) => {
    let namaA = a.nama.toUpperCase();
    let namaB = b.nama.toUpperCase();
    if (namaA < namaB) {
      return -1;
    }
    if (namaA > namaB) {
      return 1;
    }
    return 0;
  })
  Data();
});

sortUmur.addEventListener('click', function () {
  data.sort((a, b) => a.umur - b.umur);
  Data();
});

sortKelamin.addEventListener('click', function () {
  data.sort((a, b) => {
    let sortKelaminA = a.kelamin.toUpperCase();
    let sortKelaminB = b.kelamin.toUpperCase();
    if (sortKelaminA < sortKelaminB) {
      return -1;
    }
    if (sortKelaminA > sortKelaminB) {
      return 1;
    }
    return 0;
  })
  Data();
});

sortPekerjaan.addEventListener('click', function () {
  data.sort((a, b) => {
    let sortPekerjaanA = a.pekerjaan.toUpperCase();
    let sortPekerjaanB = b.pekerjaan.toUpperCase();
    if (sortPekerjaanA < sortPekerjaanB) {
      return -1;
    }
    if (sortPekerjaanA > sortPekerjaanB) {
      return 1;
    }
    return 0;
  })
  Data();
});

function Data() {
  let dataLength = data.length;
  if (dataLength == 0) {
    loopData.innerHTML = `
      <tr>
        <td class="text-center" colspan="4">Data masih kosong.</td>
      </tr>
    `
  } else {
    loopData.innerHTML = '';
    data.forEach(data => {
      loopData.innerHTML += `
        <tr>
          <td>${data.nama}</td>
          <td>${data.umur}</td>
          <td>${data.kelamin}</td>
          <td>${data.pekerjaan}</td>
        </tr>
        `
    });
  }
}

// logic JavaScript -------------------------------------------
const btnFizzBuzz = document.querySelector('.btn-fizzbuzz');
const inputFizzBuzz = document.querySelector('#fizzbuzz');
const cetakFizzBuzz = document.querySelector('.cetak-fizzbuzz');

// fizzbuzz
btnFizzBuzz.addEventListener('click', function () {
  let value = inputFizzBuzz.value;
  let convertInt = Number(value);
  cetakFizzBuzz.innerHTML = '';
  fizzbuzz(convertInt);
});

function fizzbuzz(convertInt) {
  for (let i = 1; i <= convertInt; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      cetakFizzBuzz.innerHTML += `
        <div class="fizzbuzz">FizzBuzz</div>
      `
    } else if (i % 3 === 0) {
      cetakFizzBuzz.innerHTML += `
        <div class="fizz">Fizz</div>
      `
    } else if (i % 5 === 0) {
      cetakFizzBuzz.innerHTML += `
        <div class="buzz">Buzz</div>
      `
    } else {
      cetakFizzBuzz.innerHTML += `
        <div class="notfizzbuzz"></div>
      `
    }
  }
}

// convert to string

// perkalian
const inputSatu = document.querySelector('#input-1');
const inputDua = document.querySelector('#input-2');
const subPerkalian = document.querySelector('.sub-perkalian');
const hasilPerkalian = document.querySelector('.hasil-perkalian');

subPerkalian.addEventListener('click', function () {
  let hasilKali = multiply(Number(inputSatu.value), Number(inputDua.value))
  hasilPerkalian.innerHTML = hasilKali;
});

function multiply(a, b) {
  return a * b
}


// fibonacci
const inputFibonacci = document.querySelector('#fibonacci');
const btnFibonacci = document.querySelector('.btn-fibonacci');
const hasilFibonacci = document.querySelector('.cetak-fibonacci');

btnFibonacci.addEventListener('click', function () {
  hasilFibonacci.innerHTML = '';
  let valFibonacci = Number(inputFibonacci.value);
  fibonacci(valFibonacci);
});

function fibonacci(valFibonacci) {
  let n1 = 0, n2 = 1, nextTerm;
  for (let i = 1; i <= valFibonacci; i++) {
    hasilFibonacci.innerHTML += - n1;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}









