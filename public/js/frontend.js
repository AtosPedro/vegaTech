var suppliers = {}
var httpResponse = {}

// Get the JSON from the route /api and stores in a variable, wheres the key is the supplier_id, and the value is the qrCode.
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

// uses the variable 'suppliers' to populate one html element with the right qrCode 
function selectOnChangeOption(){
    var select = document.getElementById("matSuppliers")
    document.getElementById("qrCodeContainer").innerHTML = suppliers[select.options[select.selectedIndex].value].replace(/%/g,"");
}
