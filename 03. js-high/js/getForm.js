var selectMenu = document.testForm.major;
console.log('- selectMenu:', selectMenu);



function displaySelect() {
    console.log('- displaySelect() invoked.');
    
    console.log(`\t+ selectMenu.selectedIndex: ${selectMenu.selectedIndex}`);
    console.log('\t+ selectMenu.options:', selectMenu.options);

    var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    console.log(`\t+ selectedText: ${selectedText}`);
} // displaySelect