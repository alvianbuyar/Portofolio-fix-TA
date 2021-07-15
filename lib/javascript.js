function visitor(){
    var person = prompt("Masukan Nama Anda");
    if(person !=null){
        alert ("Selamat datang "+ person + " Anda Adalah Pengunjung ke " + parseInt(3*3+2));
    }
}

//Mengubah Teks Footer
const teks = document.getElementById("teks");
teks.innerHTML = "Copyright JS &copy;2021 - Mukhamad Ivan Alvian | All right reserved";
//Menambah Style CSS
teks.style.display = "flex";
teks.style.justifyContent = "center";
teks.style.alignItems = "center";
teks.style.color = "#e2e2e2";
teks.style.paddingTop = "18px";
teks.style.fontFamily = "calibri" ;