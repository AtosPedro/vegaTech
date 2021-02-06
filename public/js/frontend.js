var suppliers = {}
var httpResponse = {}

function showValue(){
    console.log('hello')
    
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        httpResponse = JSON.parse(xhttp.responseText);
        for (let i = 0; i < httpResponse.length; i++) {
            suppliers[httpResponse[i].supplier_id] = httpResponse[i].qrCode;                
        }
        
      }
    };
    xhttp.open("GET", "/api", true);
    xhttp.send();
  }
loadDoc();

function selectOnChangeOption(){
    var select = document.getElementById("matSuppliers")
    document.getElementById("qrCodeContainer").innerHTML = suppliers[select.options[select.selectedIndex].value].replace(/%/g,"");
}

function setValue(){

    loadDoc();

    var select = document.getElementById("matSuppliers");

     
}
setValue();