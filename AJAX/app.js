// const textData = `{
//     "ticker": {
//         "base": "BTC",
//         "target": "USD",
//         "price": "39007.01301995",
//         "volume": "80050.17796383",
//         "change": "50.08361215"
//     },
//     "timestamp": 1621927382,
//     "success": true,
//     "error": ""
// }`;

// const data = JSON.parse(textData);
// console.log(data);
// console.log(data.ticker.price);

// ===================================== Sending Request Using JS =======================================


// ********************************************************************************************

// Oldest Way of Sending Request

// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log(this.responseText);

//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function() {
//     console.log(err);
// }

// req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
// req.send();

// *****************************************************************************************************

// Newest Way of Sending Request

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(parsedData => {
        console.log(parsedData.ticker.price);
    })
    .catch(err => {
        console.log("Something Went Wrong in Parsing Data:");
        console.log(err);
    })