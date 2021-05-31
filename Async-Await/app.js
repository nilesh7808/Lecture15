// async function add(x, y) {
//     return x + y;
// }
// add(2)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Something Went Wrong");
//         console.log(err);
//     })

async function getBitCoinPrice() {
    console.log("Starting the getBitCoin Function");
    const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log("After getting Response from fetch");
    console.log("Parsing Response for Data");
    const data = await response.json();
    console.log("Parsing Complete......");
    console.log(data.ticker.price);
    console.log("getBitCoinPrice Function Completes");

}
getBitCoinPrice()
    .then(() => {
        console.log("Price Returned Resolved");
    })
    .catch(err => {
        console.log("There is some error");
        console.log(err);
    })