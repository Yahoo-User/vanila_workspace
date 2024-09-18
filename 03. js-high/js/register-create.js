function newRegister() {
    console.log('- newRegister() invoked.');

    var userName = document.querySelector('#userName');
    if(userName.value === null || userName.value === '') {
        console.log(`\t+ userName.value: ${userName.value}`);
        
        return;
    }  // if

    var newP = document.createElement('p');
    var newText = document.createTextNode(userName.value);

    newP.appendChild(newText);

    //---------------------------------------------------//

    var delBtn = document.createElement('span');
    var delText = document.createTextNode('X');

    delBtn.setAttribute('class', 'del');
    delBtn.appendChild(delText);

    newP.appendChild(delBtn);

    //---------------------------------------------------//

    var nameList = document.querySelector('#nameList');

    // nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.childNodes[0]);

    //---------------------------------------------------//

    var delBtns = document.querySelectorAll('.del');
    for(var delBttn of delBtns) {
        console.log('\t+ delBttn:', delBttn);

        delBttn.addEventListener('click', function (e) {
            console.log(`- this: ${this}, e: ${e}`);

            if(this.parentNode.parentNode) {    // if truthy
                this.parentNode.parentNode.removeChild(this.parentNode);
            } // if
        });
    } // for-of

    //---------------------------------------------------//

    userName.value = '';
    userName.focus();
} // newRegister