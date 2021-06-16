
//My api key
var apikey = {
    key: '3fee0206-8860-4f79-90a2-e118466ceb1d'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var texto = "";
    // Get 10 coins and symbols 
    for(let i = 0; i < 10; i++){



    //Show API information

    texto = texto + `
    
        <div class="media">
            <img src="coin.jpg" class="mcoin" alt="coin" width="100" height="60">
            <div class="media-body">
            <h5 class="description">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            </div>
            <hr>
        </div>

        `;

        document.getElementById("coins").innerHTML = texto;
        
    }
})
.catch((error) => {
    console.error(error.message);
});