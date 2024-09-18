var bigPic = document.querySelector('#cup');
var smallPics = document.querySelectorAll('.small');


for(var smallPic of smallPics) {
    smallPic.addEventListener('click', changePic);
    // smallPic.onclick = changePic;
} // for-of


function changePic() {
    console.log('- changePic() invoked.');
    console.log('\t+ this:', this);             // window 객체

    // var newPic = this.src;
    var newPic = this.getAttribute('src');
    
    console.log(`\t+ this.src: ${this.src}`);

    // bigPic.src = newPic;
    bigPic.setAttribute('src', newPic);
    console.log(`\t+ bigPic.src: ${bigPic.src}`);
} // changePic


var view = document.querySelector('#view');
view.addEventListener('click', function () {
    var detail = document.querySelector('#detail');
    
    if(detail.style.display == 'none') {
        detail.style.display = 'block';
    } else {
        detail.style.display = 'none';
    }
});