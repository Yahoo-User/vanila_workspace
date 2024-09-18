var coverImage = document.querySelector('#cover');
console.log('- coverImage instanceof HTMLElement:', coverImage instanceof HTMLElement);


coverImage.onclick = function () {
    console.log('- onclicked.');

    alert('onclicked.');
}   // onclick


coverImage.onmouseover = function () {
    console.log('- onmouseovered.');

    coverImage.style.border = '5px outset gold';
    coverImage.style.boxShadow = '5px 5px 10px gray';
} // onmouseover


coverImage.onmouseout = function () {
    console.log('- onmouseouted.');

    coverImage.style.border = '';
} // onmouseout