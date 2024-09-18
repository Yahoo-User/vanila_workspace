
const order = new Promise((resolve, reject) => {
    let coffee = prompt("어떤 커피를 주문하시겠습니까!?", "아메리카노");
    console.log('1. coffee:', coffee);

    if(coffee != null && coffee != "") {
        document.querySelector("#wrapper").innerHTML = `<h1>${coffee} 주문접수</h1>`;

        setTimeout(() => resolve(coffee), 3000);
    } else {
        reject("커피를 주문하지 않았습니다.");
    } // if-else
}); // order


console.log('order:', order);

order.then(value => console.log(value)).catch(reason => console.log(reason)).finally(() => console.log('Done.'));