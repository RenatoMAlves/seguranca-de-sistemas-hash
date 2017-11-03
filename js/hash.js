var hashfile1 = "";
var hashfile2 = "";

function visualizarHash(idElemento){
    if(idElemento==0){
        var ta = document.getElementById('hash1');
        ta.value = hashfile1;
    }
    else{
        var ta = document.getElementById('hash2');
        ta.value = hashfile2;
    }
    
}

function comparaHash(){
    if(hashfile1 == '' || hashfile2 =='')
        alert("O hash de um dos arquivos não foi gerado");
    else{
        if(hashfile1.toString() == hashfile2.toString())
            alert("Os arquivos possuem hashs iguais");
        else
            alert("Os arquivos possuem hashs diferentes");
    }
}

function gerarHash(e){
    var input = e.target.id;
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        var arrayPalavras = CryptoJS.lib.WordArray.create(e.target.result)
        if(input == "hash-file-a-input"){
            hashfile1 = CryptoJS.SHA256(arrayPalavras);
            var button = document.getElementById('view-hash1');
            button.removeAttribute("disabled");
        }
        else{
            hashfile2 = CryptoJS.SHA256(arrayPalavras);
            var button = document.getElementById('view-hash2');
            button.classList.remove("disabled");
        }
    }
    reader.readAsText(file);
}


document.getElementById('hash-file-a-input')
    .addEventListener('change', gerarHash, false);

document.getElementById('hash-file-b-input')
    .addEventListener('change', gerarHash, false);