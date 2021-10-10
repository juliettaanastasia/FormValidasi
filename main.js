function validateForm() {
    if (document.forms["formValidasi"]["nama"].value == "") {
        alert("Nama wajib diisi");
        document.forms["formValidasi"]["nama"].focus();
        return false;
    }
 
    if (document.forms["formValidasi"]["nrp"].value == "") {
        alert("NRP wajib diisi");
        document.forms["formValidasi"]["nrp"].focus();
        return false;
    }
 
    if (isNaN(document.forms["formValidasi"]["nrp"].value)) {
        alert("NRP hanya boleh berupa angka saja");
        document.forms["formValidasi"]["nrp"].focus();
        return false;
    }
   
    if (document.forms["formValidasi"]["email"].value == "") {
        alert("Email wajib diisi");
        document.forms["formValidasi"]["email"].focus();
        return false;
    }
 
    if (document.forms["formValidasi"]["domisili"].value == "") {
        alert("Domisili wajib diisi");
        document.forms["formValidasi"]["domisili"].focus();
        return false;
    }
   
    if (document.forms["formValidasi"]["jurusan"].selectedIndex < 1) {
        alert("Mohon memilih jurusan terlebih dahulu");
        document.forms["formValidasi"]["jurusan"].focus();
        return false;
    }
 
    if (document.forms["formValidasi"]["status_vaksin"].selectedIndex < 1) {
        alert("Mohon mengkonfirmasi status vaksin anda terlebih dahulu");
        document.forms["formValidasi"]["status_vaksin"].focus();
        return false;
    }
    if (document.forms["formValidasi"]["Kesediaan"].selectedIndex < 1) {
        alert("Mohon mengisi kesediaan anda untuk keberlangsungan kuliah tatap muka");
        document.forms["formValidasi"]["Kesediaan"].focus();
        return false;
    }
    alert("Data telah berhasil di submit!");
}