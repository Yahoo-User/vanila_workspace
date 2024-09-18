var itemList = [];
// var itemList = new Array();

var addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addList);


function addList() {
    console.log('- addList() invoked.');

    var item = document.querySelector('#item').value;
    if(item != null) {
        // itemList.push(item);
        itemList.unshift(item);
        console.log(`\t+ itemList: ${itemList}`);

        document.querySelector('#item').value = '';
        document.querySelector('#item').focus();
    } // if

    showList();
} // addList


function showList() {
    console.log('- showList() invoked.');

    var list = "<ul>";

    for(var i=0;i<itemList.length;i++) {
        list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
    } // for

    list += "</ul>";

    document.querySelector('#itemList').innerHTML = list;

    var remove = document.querySelectorAll('.close');
    for(var close of remove) {
        close.addEventListener('click', removeList);
    } // for-of
} // showList


function removeList() {
    console.log('- removeList() invoked.');

    var id = this.getAttribute('id');

    itemList.splice(id, 1);
    console.log(`\t+ itemList: ${itemList}`);

    showList();
} // removeList


function ttt() {
    var arr1 = [1,2,3,4,5];
    var arr2 = ['1', '2', '3', '4'];

    // arr1.every(e => e % 2 == 0);
    // arr1.filter()

    // arr1.forEach()
    // arr1.indexOf()
    // arr1.join()
    // arr1.pop()
    // arr1.push()
    // arr1.reverse()
    // arr1.shift()
    // arr1.slice()
    // arr1.sort()
    // arr1.splice(1,3,2,3,4)
    arr1.unshift()
}