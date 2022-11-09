var url = "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("accept", "application/json");

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
   
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.write(xhr.responseText)
    
 
  }
};



xhr.send();