var toyRobot = {

    productId: "P-1",
    name: "Toy Robot",
    price: 250000,
    quantity: 10,

    showStock: function () {
        document.querySelector('#display').innerHTML = this.name + " 제품은 " + this.quantity + "개 남아있습니다.";
    } // showStock

};

toyRobot.showStock();