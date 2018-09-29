var body = document.body;
var mulai = document.getElementById('mulai');
var soal = document.getElementsByClassName('soal');
var pertanyaan = document.getElementById('pertanyaan');
// soal.style.visibility = "hidden";
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Klik pada jawaban');
h1.appendChild(h1Text);
mulai.appendChild(h1);


//1. klik mulai
function myFunction() {
    //soal.style.visibility = "visible";
    // mulai.removeChild(h1);
    mulai.style.display = "none"
    // randomIndex()
}

var bankPertanyaan = [
    [],
    [' Apa nama sungai terpanjang di Indonesia?', 'a. Kapuas', 'b. Kalimalang', 'c. Musi', 1],
    [' Lagu ampar-ampar pisang berasal dari provinsi?', 'a. Kalimantan Selatan', 'b. Jawa Barat', 'c. Sumatera Barat', 1],
    [' Apa nama pulau terluas di Indonesia?', 'a. Jawa', 'b. Kalimantan', 'c. Papua', 2],
    [' Gunung tertinggi ke dua di Pulau Jawa?', 'a. Semeru', 'b. Mahameru', 'c. Slamet', 3],
    [' Tari kecak berasal dari?', 'a. Jawa', 'b. Sumatera', 'c. Bali', 3],
    [' Siapa penjahit sang saka merah putih pertama?', 'a. Fatmawati', 'b. Taylor Swift', 'c. Kartini'],
    [' Kerak telor adalah makanan khas provinsi?', 'a. Jawa Timur', 'b. Nusa Tenggara Timur', 'c. DKI Jakarta'],
    ['Lagu daerah dari papua adalah','a. Soleram','b. Apuse','c. Ampar Pisang'],
    ['Apakah senjata tradisionl dari Aceh?','a. Golok','b. Rencong','c. Mandau']
]

var jawaban = [
    [],
    ['a. Kapuas'], ['a. Kalimantan Selatan'], ['b. Kalimantan'], ['c. Slamet'], ['c. Bali'], ['a. Fatmawati'],
    ['c. DKI Jakarta'],['b. Apuse'],['b. Rencong']
]
var a = []
//var a = [1, 2, 3, 4, 5]
for (let i = 1; i < bankPertanyaan.length; i++) {
    a.push(i);
}
var urutan = [];
for (a, i = a.length; i--;) {
    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    urutan.push(random);
}
var pertanyaanText = document.createTextNode(bankPertanyaan[urutan[0]][0]);
pertanyaan.appendChild(pertanyaanText);

//option jawaban
var a = document.getElementById('optionA');
var b = document.getElementById('optionB');
var c = document.getElementById('optionC');

var aText = document.createTextNode(bankPertanyaan[urutan[0]][1]);
var bText = document.createTextNode(bankPertanyaan[urutan[0]][2]);
var cText = document.createTextNode(bankPertanyaan[urutan[0]][3]);

a.appendChild(aText);
b.appendChild(bText);
c.appendChild(cText);

// var hasilBenar = document.createElement('h1');
// var hasilBenarText = document.createTextNode('Benar');
// hasilBenar.appendChild(hasilBenarText);

// var hasilSalah = document.createElement('h1');
// var hasilSalahText = document.createTextNode('Salah');
// hasilSalah.appendChild(hasilSalahText)

//console.log(a, '   ', aText, '   ', bankPertanyaan[urutan[0]][1], '    ', jawaban[urutan[0]][0])
var jawabana = ''
function myFunctionA() {
    jawabana = bankPertanyaan[urutan[0]][1];
    if (jawabana === jawaban[urutan[0]][0]) {
        a.style.color = 'green'
        alert('Benar');
        // randomIndex();
    }
    else {
        // randomIndex();
        a.style.color = 'red'
        alert('Salah');
    }
    //location.reload();
}
function myFunctionB() {
    jawabana = bankPertanyaan[urutan[0]][2]
    if (jawabana === jawaban[urutan[0]][0]) {
        // randomIndex();
        b.style.color = 'green'
        alert('Benar');
        
    }
    else {
        b.style.color = 'red'
        alert('Salah');
        // randomIndex();
    }
    //location.reload();
}
function myFunctionC() {
    jawabana = bankPertanyaan[urutan[0]][3]
    if (jawabana === jawaban[urutan[0]][0]) {
        c.style.color = 'green'
        alert('Benar');
        // randomIndex();
        
    }
    else {
        c.style.color = 'red'
        alert('Salah');
        // randomIndex();
        
    }
    //location.reload();
}

function ganti() {
    location.reload();
}



