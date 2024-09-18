var pic = document.querySelector('#pic');

pic.addEventListener('mouseover', changeStyle);
pic.addEventListener('mouseover', changePic, false);

pic.addEventListener('mouseout', originPic, false);
pic.addEventListener('mouseout', originStyle);


function changePic(e) {
    console.log('- changePic(e) invoked.');
    // console.log(`\t+ e:`, e);

    pic.setAttribute('src', 'https://picsum.photos/264/375');
} // changePic


function changeStyle(e) {
    console.log('- changeStyle(e) invoked.');

    pic.style.border = '5px outset gold';
} // changeStyle


function originPic(e) {
    console.log('- originPic(e) invoked.');
    // console.log(`\t+ e:`, e);

    pic.setAttribute('src', 'http://placehold.it/264x375');
} // originPic


function originStyle(e) {
    console.log('- originStyle(e) invoked.');

    pic.style.border = 'none';
} // originStyle