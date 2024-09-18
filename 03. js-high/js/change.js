var heading = document.querySelector('#heading');
console.log('- heading instanceof HTMLElement:', heading instanceof HTMLElement);

heading.onclick = function (e) {
    console.log('\t+ e:', e);

    heading.style.color = 'red';
}