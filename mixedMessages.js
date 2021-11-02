function randomMessage() {
    var message = Math.floor(Math.random() * 3);

    if (message === 0) {
        console.log("Invest in Crypto");
    } else if (message === 1) {
        console.log("Invest in Stocks");    
    } else {
        console.log("Pay off Debt")
    }
}

function main() {
    randomMessage()
}

main()
