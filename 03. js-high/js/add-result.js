function addNumber(initialVal = 1000, ...numbers) {
    console.log('addNumber() invoked.');
    console.log('\t+ initialVal:', initialVal);

    var button = document.querySelector('button');
    console.log('\t+ numbers:', numbers, numbers instanceof Array);

    var sum = 0;
    for(var val of numbers) {
        sum += val;
    } // for-of

    sum += initialVal;

    alert(sum);
} // addNumber